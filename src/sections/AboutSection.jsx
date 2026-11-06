import React from 'react';
import { PORTFOLIO_STRUCTURE } from '@/data/portfolioData';
import { getToken } from '@/utils/i18n';

export default function AboutSection({ lang }) {
  return (
    <section id="about" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {getToken(1020, lang)}
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_STRUCTURE.aboutFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className={`p-6 rounded-xl border ${feature.borderColor} ${feature.bgColor} backdrop-blur-sm transition-transform hover:-translate-y-1 duration-300`}
              >
                {IconComponent && <IconComponent className={`w-8 h-8 ${feature.iconColor} mb-4`} />}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {getToken(feature.titleToken, lang)}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {getToken(feature.descToken, lang)}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}