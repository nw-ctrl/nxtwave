'use client';

export default function EmailMonitor() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">📧 Email Monitor</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-4">
            Email monitoring functionality coming soon!
          </p>
          <p className="text-sm text-gray-500">
            This will integrate with your Python email automation once the backend is set up.
          </p>
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
