import { useState } from 'react';
import { Code2, X, CheckCircle2, ExternalLink } from 'lucide-react';
import { PROJECT_MODAL_STYLES, BUTTON_STYLES, BADGE_STYLES } from '@/constants/theme';
import { GithubIcon } from '@/components/ui/Icons';
import { getToken } from '@/utils/i18n';

export default function ProjectModal({ project, lang, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  const getTabButtonClass = (tabName) => `pb-3 text-sm font-medium transition-colors border-b-2 ${
    activeTab === tabName 
      ? 'border-purple-400 text-purple-300' 
      : 'border-transparent text-slate-400 hover:text-slate-200'
  }`;

  return (
    <div className={PROJECT_MODAL_STYLES.overlay}>
      <div className={PROJECT_MODAL_STYLES.modalContainer}>
        
        {/* Cabeçalho do Modal */}
        <div className={PROJECT_MODAL_STYLES.header}>
          <div className="flex items-center gap-3">
            <div className={PROJECT_MODAL_STYLES.headerIconBox}>
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {getToken(project.titleToken, lang)}
              </h3>
              <p className="text-xs text-purple-300/70">
                {project.categoryToken ? getToken(project.categoryToken, lang) : project.category}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className={PROJECT_MODAL_STYLES.closeBtn}
            aria-label="Fechar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Corpo do Modal */}
        <div className={PROJECT_MODAL_STYLES.body}>
          
          {/* Caixa de Preview / Simulação */}
          <div className={PROJECT_MODAL_STYLES.previewBox}>
            <div className={PROJECT_MODAL_STYLES.previewGradient} />
            
            <div className={PROJECT_MODAL_STYLES.previewTopBar}>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">https://preview.app</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-purple-900/50 text-purple-300 font-mono text-[10px]">v1.0.0</span>
            </div>

            <div className={PROJECT_MODAL_STYLES.previewCenter}>
              <h4 className="text-lg font-semibold text-white">
                {getToken(project.previewTitleToken, lang)}
              </h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                {getToken(project.previewSummaryToken, lang)}
              </p>
            </div>

            <div className={PROJECT_MODAL_STYLES.previewBottomBar}>
              <span>Status: <strong className="text-emerald-400">Online</strong></span>
            </div>
          </div>

          {/* Navegação por Abas */}
          <div className={PROJECT_MODAL_STYLES.tabsWrapper}>
            <button
              onClick={() => setActiveTab('overview')}
              className={getTabButtonClass('overview')}
            >
              {getToken(1100, lang)}
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={getTabButtonClass('architecture')}
            >
              {getToken(1101, lang)}
            </button>
          </div>

          {/* Conteúdo das Abas */}
          {activeTab === 'overview' ? (
            <div className="space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                {getToken(project.fullDescToken, lang)}
              </p>
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
                  {getToken(1102, lang)}
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.featureTokens?.map((token, index) => (
                    <div key={index} className={PROJECT_MODAL_STYLES.featureCard}>
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{getToken(token, lang)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className={PROJECT_MODAL_STYLES.architectureBox}>
                <p className="text-slate-400">{getToken(1103, lang)}</p>
                <p><span className="text-purple-400">Frontend:</span> {project.techStack.frontend}</p>
                <p><span className="text-purple-400">Backend:</span> {project.techStack.backend}</p>
                <p><span className="text-purple-400">Database:</span> {project.techStack.database}</p>
                <p><span className="text-purple-400">Tools:</span> {project.techStack.tools}</p>
              </div>
            </div>
          )}

          {/* Tecnologias Utilizadas */}
          <div className="pt-2">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
              {getToken(1104, lang)}
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className={BADGE_STYLES.container}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé do Modal */}
        <div className={PROJECT_MODAL_STYLES.footer}>
          <span className="text-xs text-slate-400">{getToken(1105, lang)}</span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${BUTTON_STYLES.variants.primary} text-sm font-medium transition-all shadow-lg shadow-purple-950/50`}
          >
            <GithubIcon className="w-4 h-4" />
            <span>{getToken(1106, lang)}</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

      </div>
    </div>
  );
}