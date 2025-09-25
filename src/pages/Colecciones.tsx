import { useLanguage } from '@/contexts/LanguageContext';
import CollectionCard from '@/components/CollectionCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import collectionMinimalist from '@/assets/collection-minimalist.jpg';
import collectionColorful from '@/assets/collection-colorful.jpg';
import collectionClassic from '@/assets/collection-classic.jpg';

const Colecciones = () => {
  const { t } = useLanguage();

  const collections = [
    {
      id: 1,
      title: t('minimalistCollection'),
      descriptionKey: 'minimalistDesc',
      image: collectionMinimalist,
      href: '/productos?collection=minimalist',
      featured: true
    },
    {
      id: 2,
      title: t('colorfulCollection'),
      descriptionKey: 'colorfulDesc',
      image: collectionColorful,
      href: '/productos?collection=colorful'
    },
    {
      id: 3,
      title: t('classicCollection'),
      descriptionKey: 'classicDesc',
      image: collectionClassic,
      href: '/productos?collection=classic'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
              {t('collections')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explora nuestras colecciones cuidadosamente curadas, cada una con su propio estilo y personalidad única.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-6 h-auto lg:h-[800px]">
            {collections.map((collection, index) => (
              <div 
                key={collection.id}
                className={`animate-fade-up ${
                  collection.featured ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CollectionCard {...collection} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Features */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
              ¿Por qué elegir nuestras colecciones?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Diseño Único</h3>
              <p className="text-muted-foreground">
                Cada pieza está diseñada con atención al detalle y un enfoque en la estética moderna.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Calidad Premium</h3>
              <p className="text-muted-foreground">
                Materiales de alta calidad que garantizan durabilidad y seguridad alimentaria.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sostenible</h3>
              <p className="text-muted-foreground">
                Comprometidos con prácticas sostenibles en cada paso del proceso de producción.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Colecciones;