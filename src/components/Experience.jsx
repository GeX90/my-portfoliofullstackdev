import { useLanguage } from '../context/LanguageContext';
import { experience } from '../data/experienceData';

const Experience = () => {
  const { t } = useLanguage();
  
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {t.experience.title} <span className="text-gradient">{t.experience.titleHighlight}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.experience.description}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-400 to-primary-600"></div>
            
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 last:mb-0">
                <div className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className="flex-1 w-full">
                    <div className="bg-gray-800 p-6 rounded-xl hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 hover:scale-105">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-primary-400 mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-gray-300 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-700 text-primary-400 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-900 z-10"></div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
