import { Screen } from './Screen';
import { ProjectCard } from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: "E-commerce App",
    description: "Aplicación de compras construida con React.",
    tags: ["React", "JavaScript", "CSS"]
  },
  {
    id: 2,
    title: "Task Tracker",
    description: "Administrador de tareas pendientes.",
    tags: ["React", "Vite"]
  }
];

export function Projects() {
  return (
    <Screen title="Mis Proyectos">
      <div className="card-list">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </Screen>
  );
}