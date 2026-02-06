import { technologies } from '../data/technologiesData';

const Technologies = () => {
  const categories = [...new Set(technologies.map(tech => tech.category))];
  
  return (
    <section id="technologies" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Tecnologías & <span className="text-gradient">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estas son las tecnologías y herramientas con las que trabajo diariamente para crear soluciones digitales.
          </p>
        </div>
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-primary-400 mb-6 text-center md:text-left">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech) => (
                    <div
                      key={tech.name}
                      className="group relative bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20"
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-sm font-medium text-gray-300 group-hover:text-primary-400 transition-colors">
                          {tech.name}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
