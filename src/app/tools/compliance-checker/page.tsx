// src/app/tools/compliance-checker/page.tsx
'use client';

import { useState } from 'react';
import { Shield, Download, CheckCircle2, AlertTriangle } from 'lucide-react';

type ComplianceItem = {
  id: string;
  title: string;
  description: string;
  deadline?: string;
  penalty?: string;
  link: string;
};

const complianceData: Record<string, Record<string, ComplianceItem[]>> = {
  retail: {
    ato: [
      {
        id: 'gst1',
        title: 'GST Registration',
        description: 'Register for GST if turnover exceeds $75,000',
        deadline: 'Within 21 days of exceeding threshold',
        penalty: 'Up to $11,000',
        link: 'https://www.ato.gov.au/business/gst/'
      },
      {
        id: 'bas1',
        title: 'BAS Lodgement',
        description: 'Lodge Business Activity Statement quarterly or monthly',
        deadline: '28th of the month following quarter end',
        penalty: 'Up to 75% of tax shortfall',
        link: 'https://www.ato.gov.au/business/reporting-and-lodging/activity-statements/'
      },
    ],
    fairwork: [
      {
        id: 'fw1',
        title: 'Modern Award Compliance',
        description: 'Ensure employees are paid according to relevant retail award',
        deadline: 'Ongoing',
        penalty: 'Back pay + penalties up to $82,500',
        link: 'https://www.fairwork.gov.au/awards-and-agreements/awards'
      },
      {
        id: 'fw2',
        title: 'Employee Records',
        description: 'Keep employee records for 7 years',
        deadline: 'Ongoing',
        penalty: 'Up to $16,500',
        link: 'https://www.fairwork.gov.au/tools-and-resources/fact-sheets/minimum-workplace-entitlements/employee-records'
      },
    ],
    privacy: [
      {
        id: 'pr1',
        title: 'Privacy Policy',
        description: 'Display clear privacy policy if collecting customer data',
        deadline: 'Before collecting data',
        penalty: 'Up to $2.5 million',
        link: 'https://www.oaic.gov.au/privacy/privacy-for-organisations'
      },
    ],
  },
  hospitality: {
    ato: [
      {
        id: 'gst1',
        title: 'GST Registration',
        description: 'Register for GST if turnover exceeds $75,000',
        deadline: 'Within 21 days',
        penalty: 'Up to $11,000',
        link: 'https://www.ato.gov.au/business/gst/'
      },
    ],
    fairwork: [
      {
        id: 'fw3',
        title: 'Penalty Rates',
        description: 'Pay weekend and public holiday penalty rates per Hospitality Award',
        deadline: 'Ongoing',
        penalty: 'Back pay + significant penalties',
        link: 'https://www.fairwork.gov.au/pay-and-wages/penalty-rates'
      },
    ],
    whs: [
      {
        id: 'whs1',
        title: 'Food Safety Plan',
        description: 'Maintain and document food safety procedures',
        deadline: 'Before commencing operations',
        penalty: 'Closure + fines up to $550,000',
        link: 'https://www.foodstandards.gov.au/'
      },
    ],
  },
  professional: {
    ato: [
      {
        id: 'abn1',
        title: 'ABN Registration',
        description: 'Obtain Australian Business Number',
        deadline: 'Before commencing business',
        penalty: 'Cannot issue tax invoices',
        link: 'https://www.abr.gov.au/'
      },
    ],
    privacy: [
      {
        id: 'pr2',
        title: 'Client Confidentiality',
        description: 'Implement data protection measures for client information',
        deadline: 'Ongoing',
        penalty: 'Up to $2.5 million',
        link: 'https://www.oaic.gov.au/'
      },
    ],
  },
};

export default function ComplianceCheckerPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const industries = [
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'hospitality', label: 'Hospitality & Food Service' },
    { value: 'professional', label: 'Professional Services' },
  ];

  const complianceAreas = [
    { value: 'ato', label: 'ATO & Taxation' },
    { value: 'fairwork', label: 'Fair Work & Employment' },
    { value: 'privacy', label: 'Privacy & Data Protection' },
    { value: 'whs', label: 'Work Health & Safety' },
  ];

  const toggleArea = (area: string) => {
    if (selectedAreas.includes(area)) {
      setSelectedAreas(selectedAreas.filter(a => a !== area));
    } else {
      setSelectedAreas([...selectedAreas, area]);
    }
  };

  const getChecklist = (): ComplianceItem[] => {
    if (!selectedIndustry) return [];
    
    const industryData = complianceData[selectedIndustry] || {};
    const items: ComplianceItem[] = [];
    
    selectedAreas.forEach(area => {
      const areaItems = industryData[area] || [];
      items.push(...areaItems);
    });
    
    return items;
  };

  const checklist = getChecklist();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-semibold text-white mb-4 tracking-tight">Compliance Checklist Generator</h1>
            <p className="text-lg text-white/60">Australian business compliance made simple. Generate customized checklists for your industry.</p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Select Your Industry</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {industries.map((industry) => (
                <button
                  key={industry.value}
                  onClick={() => setSelectedIndustry(industry.value)}
                  className={`p-4 rounded-lg border-2 transition ${
                    selectedIndustry === industry.value
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <p className="font-semibold">{industry.label}</p>
                </button>
              ))}
            </div>

            {selectedIndustry && (
              <>
                <h2 className="text-2xl font-semibold mb-6 mt-8">Select Compliance Areas</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {complianceAreas.map((area) => (
                    <button
                      key={area.value}
                      onClick={() => toggleArea(area.value)}
                      className={`p-4 rounded-lg border-2 transition flex items-center gap-3 ${
                        selectedAreas.includes(area.value)
                          ? 'border-green-500 bg-green-500/20'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      {selectedAreas.includes(area.value) && (
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      )}
                      <p className="font-semibold">{area.label}</p>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {checklist.length > 0 && (
            <div className="bg-zinc-900 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Your Compliance Checklist</h2>
                <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                  {checklist.length} items
                </span>
              </div>

              <div className="space-y-4">
                {checklist.map((item) => (
                  <div key={item.id} className="bg-zinc-800 rounded-lg p-6 border border-white/10">
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-white/70 mb-3">{item.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          {item.deadline && (
                            <div className="flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4 text-yellow-400" />
                              <span className="text-sm">
                                <strong>Deadline:</strong> {item.deadline}
                              </span>
                            </div>
                          )}
                          {item.penalty && (
                            <div className="flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4 text-red-400" />
                              <span className="text-sm">
                                <strong>Penalty:</strong> {item.penalty}
                              </span>
                            </div>
                          )}
                        </div>

                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm underline"
                        >
                          Official guidance →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-zinc-800 rounded-lg p-6 border border-yellow-500/30">
                <p className="text-sm text-white/70">
                  <strong className="text-yellow-400">Disclaimer:</strong> This checklist is for informational purposes only and does not constitute legal advice. 
                  Always consult with qualified legal, accounting, or compliance professionals for your specific situation.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
