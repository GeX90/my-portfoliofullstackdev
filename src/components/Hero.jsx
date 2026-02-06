const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <p className="text-primary-400 font-medium mb-4 animate-fade-in">
            Hola, soy
          </p>
          
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">Tu Nombre</span>
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light mb-8 animate-slide-up animation-delay-200">
            Full Stack Developer
          </h2>
          
          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-400">
            Especializado en crear experiencias web excepcionales con React, Node.js y tecnologías modernas. 
            Transformo ideas en productos digitales escalables y de alto rendimiento.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50"
            >
              Contáctame
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Ver Proyectos
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
