const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Sobre <span className="text-gradient">Mí</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative">
              <img
                src="../images/profile.jpg"
                alt="Profile"
                className="rounded-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Developer Full Stack formado mediante bootcamp intensivo en desarrollo web y fundamentos de Inteligencia Artificial. Experiencia práctica trabajando con tecnologías frontend y backend como HTML, CSS, JavaScript, React, Node.js, Express y MongoDB. Profesional con más de 10 años de experiencia en entornos digitales, creación de contenido y marketing en redes sociales, con alta capacidad de aprendizaje y orientación a resultados.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Acostumbrado a aprender nuevas tecnologías rápidamente y a trabajar con APIs REST, código estructurado 
              y control de versiones. Motivado por crecer profesionalmente en entornos de producto propio y desarrollo 
              de software robusto. Además, cuento con experiencia en gestión de proyectos digitales como creador de contenido.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <span className="text-primary-400 text-2xl">📍</span>
                <span className="text-gray-300">Elche, España</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-400 text-2xl">💼</span>
                <span className="text-gray-300">Disponibilidad inmediata</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-400 text-2xl">🎯</span>
                <span className="text-gray-300">Backend, Node.js & MongoDB</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-400 text-2xl">🚗</span>
                <span className="text-gray-300">Carnet de conducir y vehículo propio</span>
              </div>
            </div>
            
            <div className="pt-6">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
