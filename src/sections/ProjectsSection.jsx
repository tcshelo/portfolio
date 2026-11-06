import { useState } from 'react';
import { Eye } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROJECTS_SECTION_STYLES } from '@/constants/theme';
import { PORTFOLIO_STRUCTURE } from '@/data/portfolioData';
import { getToken } from '@/utils/i18n';

export default function ProjectsSection({ onSelectProject, lang }) {
  const [selectedCategoryToken, setSelectedCategoryToken] = useState(1044); // 1044 = Todos / All

  const categories = [
    { token: 1044, filterVal: 'ALL' },
    { name: 'React', filterVal: 'React' },
    { name: 'PHP', filterVal: 'PHP' },
    { name: 'JavaScript', filterVal: 'JavaScript' },
    { token: 1045, filterVal: 'Automação' }
  ];

  const projects = PORTFOLIO_STRUCTURE.projectsList;

  const filteredProjects = selectedCategoryToken === 1044
    ? projects
    : projects.filter(p => {
        const catObj = categories.find(c => c.token === selectedCategoryToken || c.name === selectedCategoryToken);
        return p.category === catObj?.filterVal || p.tags.includes(catObj?.filterVal);
      });

  return (
    <section id="projects" className={PROJECTS_SECTION_STYLES.section}>
      <div className={PROJECTS_SECTION_STYLES.container}>
        
        <div className={PROJECTS_SECTION_STYLES.headerWrapper}>
          <SectionHeading
            align="left"
            title={getToken(1040, lang)}
            description={getToken(1041, lang)}
          />

          <div className={PROJECTS_SECTION_STYLES.filterContainer}>
            {categories.map((cat, idx) => {
              const catLabel = cat.token ? getToken(cat.token, lang) : cat.name;
              const catKey = cat.token || cat.name;
              const isActive = selectedCategoryToken === catKey;

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategoryToken(catKey)}
                  className={isActive 
                    ? PROJECTS_SECTION_STYLES.filterBtnActive 
                    : PROJECTS_SECTION_STYLES.filterBtnInactive}
                >
                  {catLabel}
                </button>
              );
            })}
          </div>
        </div>

        <div className={PROJECTS_SECTION_STYLES.grid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={PROJECTS_SECTION_STYLES.card}>
              <div className={PROJECTS_SECTION_STYLES.cardContent}>
                
                <div className="flex items-center justify-between">
                  <span className={PROJECTS_SECTION_STYLES.badgeCategory}>
                    {project.categoryToken ? getToken(project.categoryToken, lang) : project.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className={PROJECTS_SECTION_STYLES.cardTitle}>
                    {getToken(project.titleToken, lang)}
                  </h4>
                  <p className={PROJECTS_SECTION_STYLES.cardDescription}>
                    {getToken(project.shortDescToken, lang)}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className={PROJECTS_SECTION_STYLES.tagItem}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className={PROJECTS_SECTION_STYLES.cardFooter}>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  icon={Eye} 
                  onClick={() => onSelectProject(project)}
                  className="flex-1"
                >
                  {getToken(1042, lang)}
                </Button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={PROJECTS_SECTION_STYLES.githubBtn}
                  title={getToken(1043, lang)}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}