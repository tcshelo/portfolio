import React from 'react';
import { getToken } from '@/utils/i18n';

export default function ProjectCard({ project, onOpenModal }) {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between">
      <div>
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer" onClick={onOpenModal}>
          <img 
            src={project.images[0]} 
            alt={getToken(project.titleToken)} 
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-900/50 inline-block mb-3">
            {getToken(project.categoryToken)}
          </span>
          <h3 className="text-xl font-bold text-white mb-2">{getToken(project.titleToken)}</h3>
          <p className="text-slate-400 text-sm line-clamp-3 mb-4">{getToken(project.shortDescToken)}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tech, idx) => (
              <span key={idx} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                {typeof tech === 'number' ? getToken(tech) : tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-slate-800/60 pt-4">
        {/* Adicionado o cursor-pointer aqui no botão */}
        <button 
          onClick={onOpenModal}
          className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
        >
          {getToken(1110)}
        </button>

        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label="GitHub Repository"
          >
            {/* SVG Nativo do GitHub */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path 
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}