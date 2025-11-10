'use client';
import { useState } from 'react';

export default function EmailMonitor() {
  const [folder, setFolder] = useState('Inbox');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    setLoading(true);
    setResult(null);
    
    try {
      // Use relative URL - works in both local and production
      const response = await fetch(`/api/lab/email-monitor/scan?folder=${encodeURIComponent(folder)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setResult(data);
      } else {
        setResult({ error: data.detail || data.error || 'Failed to scan emails' });
      }
    } catch (error) {
      console.error('Scan failed:', error);
      setResult({ error: 'Failed to connect to API. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">📧 Email Monitor</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Folder
              </label>
              <input
                type="text"
                value={folder}
                onChange={(e) => setFolder(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Inbox"
              />
              <p className="mt-2 text-sm text-gray-500">
                Enter the folder name you want to monitor (e.g., Inbox, Sent, Drafts)
              </p>
            </div>

            <button
              onClick={handleScan}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Scanning...
                </span>
              ) : (
                '🔍 Scan Emails'
              )}
            </button>

            {result && (
              <div className={`mt-6 p-6 rounded-lg ${result.error ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'}`}>
                <h3 className="font-semibold text-lg mb-3">
                  {result.error ? '❌ Error' : '✅ Scan Results'}
                </h3>
                
                {result.error ? (
                  <p className="text-red-700">{result.error}</p>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white p-3 rounded border">
                        <p className="text-gray-500 text-xs">Folder Scanned</p>
                        <p className="font-semibold">{result.folder}</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <p className="text-gray-500 text-xs">Emails Found</p>
                        <p className="font-semibold text-green-600">{result.emails_found}</p>
                      </div>
                    </div>
                    
                    {result.matched_emails && result.matched_emails.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2">Matched Emails:</h4>
                        <div className="space-y-2">
                          {result.matched_emails.map((email: any, index: number) => (
                            <div key={index} className="bg-white p-4 rounded border">
                              <p className="font-medium">{email.subject}</p>
                              <p className="text-sm text-gray-600">From: {email.from}</p>
                              <p className="text-sm text-gray-500">{email.date}</p>
                              <div className="mt-2 flex gap-2 flex-wrap">
                                {email.keywords_matched.map((keyword: string, i: number) => (
                                  <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                                    {keyword}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <details className="mt-4">
                      <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-900">
                        View Raw JSON Response
                      </summary>
                      <pre className="mt-2 text-xs overflow-auto bg-white p-4 rounded border max-h-64">
                        {JSON.stringify(result, null, 2)}
                      </pre>
                    </details>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <a 
            href="/lab-x9k2" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Lab
          </a>
        </div>
      </div>
    </div>
  );
}
