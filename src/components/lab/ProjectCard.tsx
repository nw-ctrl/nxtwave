interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  endpoint?: string;
  category?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <span className={`px-2 py-1 rounded text-xs ${
          project.status === 'active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {project.status}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <a 
        href={`/lab-x9k2/${project.id}`}
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        Launch Project →
      </a>
    </div>
  );
}
