// src/app/tools/invoice-generator/page.tsx
'use client';

import { useState } from 'react';
import { FileText, Download, Plus, Trash2 } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

type LineItem = {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
};

export default function InvoiceGeneratorPage() {
  const [invoiceNumber, setInvoiceNumber] = useState('INV-001');
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState('');
  
  const [fromName, setFromName] = useState('');
  const [fromABN, setFromABN] = useState('');
  const [fromAddress, setFromAddress] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  
  const [toName, setToName] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [toEmail, setToEmail] = useState('');
  
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: '1', description: '', quantity: 1, unitPrice: 0 }
  ]);
  
  const [taxInclusive, setTaxInclusive] = useState(true);
  const [notes, setNotes] = useState('');

  const addLineItem = () => {
    setLineItems([...lineItems, { 
      id: Date.now().toString(), 
      description: '', 
      quantity: 1, 
      unitPrice: 0 
    }]);
  };

  const removeLineItem = (id: string) => {
    if (lineItems.length > 1) {
      setLineItems(lineItems.filter(item => item.id !== id));
    }
  };

  const updateLineItem = (id: string, field: keyof LineItem, value: string | number) => {
    setLineItems(lineItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const calculateSubtotal = () => {
    return lineItems.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  };

  const calculateGST = () => {
    const subtotal = calculateSubtotal();
    if (taxInclusive) {
      return subtotal * (1 / 11); // GST component of tax-inclusive price
    } else {
      return subtotal * 0.1; // 10% GST added
    }
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    if (taxInclusive) {
      return subtotal; // Already includes GST
    } else {
      return subtotal + calculateGST(); // Add GST
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('TAX INVOICE', 105, 20, { align: 'center' });
    
    // From Section
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('From:', 20, 40);
    doc.setFont('helvetica', 'normal');
    doc.text(fromName, 20, 46);
    doc.text(`ABN: ${fromABN}`, 20, 52);
    doc.text(fromAddress, 20, 58);
    doc.text(fromEmail, 20, 64);
    
    // To Section
    doc.setFont('helvetica', 'bold');
    doc.text('Bill To:', 120, 40);
    doc.setFont('helvetica', 'normal');
    doc.text(toName, 120, 46);
    doc.text(toAddress, 120, 52);
    doc.text(toEmail, 120, 58);
    
    // Invoice Details
    doc.setFont('helvetica', 'bold');
    doc.text(`Invoice #: ${invoiceNumber}`, 20, 80);
    doc.text(`Date: ${invoiceDate}`, 20, 86);
    if (dueDate) {
      doc.text(`Due Date: ${dueDate}`, 20, 92);
    }
    
    // Line Items Table
    const tableData = lineItems.map(item => [
      item.description,
      item.quantity.toString(),
      `$${item.unitPrice.toFixed(2)}`,
      `$${(item.quantity * item.unitPrice).toFixed(2)}`
    ]);
    
    autoTable(doc, {
      startY: dueDate ? 100 : 94,
      head: [['Description', 'Qty', 'Unit Price', 'Amount']],
      body: tableData,
      theme: 'striped',
      headStyles: { fillColor: [59, 130, 246] },
    });
    
    // Totals
    const finalY = (doc as any).lastAutoTable.finalY + 10;
    const subtotal = calculateSubtotal();
    const gst = calculateGST();
    const total = calculateTotal();
    
    doc.setFont('helvetica', 'normal');
    doc.text('Subtotal:', 120, finalY);
    doc.text(`$${subtotal.toFixed(2)}`, 180, finalY, { align: 'right' });
    
    doc.text(`GST (10%)${taxInclusive ? ' included' : ''}:`, 120, finalY + 6);
    doc.text(`$${gst.toFixed(2)}`, 180, finalY + 6, { align: 'right' });
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Total:', 120, finalY + 14);
    doc.text(`$${total.toFixed(2)}`, 180, finalY + 14, { align: 'right' });
    
    // Notes
    if (notes) {
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('Notes:', 20, finalY + 30);
      doc.text(notes, 20, finalY + 36, { maxWidth: 170 });
    }
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text('This is a valid tax invoice for GST purposes.', 105, 280, { align: 'center' });
    
    // Save
    doc.save(`${invoiceNumber}.pdf`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-semibold text-white mb-4 tracking-tight">Invoice Generator</h1>
            <p className="text-lg text-white/60">Create ATO compliant tax invoices with GST calculations</p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 space-y-8">
            {/* Invoice Details */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Invoice Number</label>
                <input
                  type="text"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Invoice Date</label>
                <input
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Due Date (Optional)</label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* From/To Sections */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">From (Your Business)</h3>
                <input
                  type="text"
                  placeholder="Business Name"
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="ABN (e.g., 12 345 678 901)"
                  value={fromABN}
                  onChange={(e) => setFromABN(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <textarea
                  placeholder="Business Address"
                  value={fromAddress}
                  onChange={(e) => setFromAddress(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows={2}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Bill To (Client)</h3>
                <input
                  type="text"
                  placeholder="Client Name"
                  value={toName}
                  onChange={(e) => setToName(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <textarea
                  placeholder="Client Address"
                  value={toAddress}
                  onChange={(e) => setToAddress(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows={2}
                />
                <input
                  type="email"
                  placeholder="Client Email"
                  value={toEmail}
                  onChange={(e) => setToEmail(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Line Items */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Line Items</h3>
                <button
                  onClick={addLineItem}
                  className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <Plus className="w-4 h-4" /> Add Item
                </button>
              </div>
              
              <div className="space-y-3">
                {lineItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-12 gap-3">
                    <input
                      type="text"
                      placeholder="Description"
                      value={item.description}
                      onChange={(e) => updateLineItem(item.id, 'description', e.target.value)}
                      className="col-span-5 bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Qty"
                      value={item.quantity}
                      onChange={(e) => updateLineItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                      className="col-span-2 bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      value={item.unitPrice}
                      onChange={(e) => updateLineItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                      className="col-span-2 bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <div className="col-span-2 flex items-center justify-between bg-zinc-800 border border-white/10 rounded-lg p-3">
                      <span className="text-white">${(item.quantity * item.unitPrice).toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => removeLineItem(item.id)}
                      className="col-span-1 flex items-center justify-center text-red-400 hover:text-red-300"
                      disabled={lineItems.length === 1}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* GST Option */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="taxInclusive"
                checked={taxInclusive}
                onChange={(e) => setTaxInclusive(e.target.checked)}
                className="w-5 h-5"
              />
              <label htmlFor="taxInclusive" className="text-white">Prices are GST inclusive</label>
            </div>

            {/* Totals */}
            <div className="bg-zinc-800 rounded-lg p-6 space-y-2">
              <div className="flex justify-between text-lg">
                <span>Subtotal:</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>GST (10%){taxInclusive ? ' included' : ''}:</span>
                <span>${calculateGST().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-2xl font-bold border-t border-white/20 pt-2 mt-2">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-semibold mb-2">Notes (Optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Payment terms, thank you message, etc."
                className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows={3}
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={generatePDF}
              className="w-full bg-blue-600 text-white font-semibold px-6 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" /> Generate PDF Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
