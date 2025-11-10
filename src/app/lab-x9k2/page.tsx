import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function LabLibrary() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('lab-authenticated');
  
  if (!isAuthenticated || isAuthenticated.value !== 'true') {
    redirect('/lab-x9k2/auth');
  }

  const projects = [
    {
      id: 'email-monitor',
      name: '📧 Email Monitor',
      description: 'Monitor and automate email processing with keyword detection',
      status: 'active',
      url: '/lab-x9k2/email-monitor'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">🔬 Experimental Projects Lab</h1>
        
        {/* Lab Status Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              ✓ Authentication Successful!
            </h2>
            <p className="text-gray-600 mb-6">
              Welcome to NextWave Lab. Your experimental Python projects.
            </p>
            <div className="mt-6 p-6 bg-blue-50 rounded-lg text-left">
              <h3 className="font-semibold text-lg mb-3">🚀 Lab Status:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">●</span>
                  Frontend: Running on localhost:3000
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">●</span>
                  Python API: Running on localhost:8000
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">→</span>
                  Test API: <a href="/api/healthcheck" className="text-blue-600 hover:underline">/api/healthcheck</a>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">→</span>
                    API Docs: <a href="/api/docs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">/api/docs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">🧪 Available Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-200 border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex items-center text-blue-600 font-medium text-sm">
                  Launch Project 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
          
          {projects.length === 0 && (
            <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
              No projects yet. Start building your experimental projects!
            </div>
          )}
        </div>

        {/* Logout Section */}
        <div className="text-center pt-4 border-t border-gray-200">
          <a 
            href="/lab-x9k2/auth"
            className="text-red-600 hover:text-red-800 text-sm font-medium"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}
