import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {t.about.title} <span className="text-gradient">{t.about.titleHighlight}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative">
              <img
                src="../images/profilepic.jpeg"
                alt="Profile"
                className="rounded-lg w-full h-[400px] object-contain"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.about.paragraph1}
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.about.paragraph2}
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <span className="text-primary-400 text-2xl">📍</span>
                <span className="text-gray-300">{t.about.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-400 text-2xl">💼</span>
                <span className="text-gray-300">{t.about.availability}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-400 text-2xl">🎯</span>
                <span className="text-gray-300">{t.about.focus}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-400 text-2xl">🚗</span>
                <span className="text-gray-300">{t.about.vehicle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
