import React, { useState } from 'react';
import ProjectCard from '@/components/ui/projects/ProjectCard';
import ProjectModal from '@/components/ui/projects/ProjectModal';
import { projectsList } from '@/data/portfolioData';
import { getToken } from '@/utils/i18n';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{getToken(1040)}</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
          {getToken(1041)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onOpenModal={() => setSelectedProject(project)} 
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}