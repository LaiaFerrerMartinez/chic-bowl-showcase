import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import CollectionCard from '@/components/CollectionCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import bowlFeatured from '@/assets/bowl-featured.jpg';
import bowlSet1 from '@/assets/bowl-set-1.jpg';
import collectionMinimalist from '@/assets/collection-minimalist.jpg';
import collectionColorful from '@/assets/collection-colorful.jpg';
import collectionClassic from '@/assets/collection-classic.jpg';

const Index = () => {
  const { t } = useLanguage();

  const featuredProducts = [
    {
      id: 1,
      name: 'Ceramic Bowl Verde',
      price: 20.99,
      originalPrice: 24.99,
      image: bowlFeatured,
      features: ['foodGrade', 'microwaveSafe', 'ovenSafe'],
      materials: ['ceramic'],
      description: {
        es: 'Bowl cerámico con interior verde y exterior beige, perfecto para servir ensaladas y sopas.',
        en: 'Ceramic bowl with green interior and beige exterior, perfect for serving salads and soups.'
      }
    },
    {
      id: 2,
      name: 'Minimalist Bowl Set',
      price: 45.99,
      image: bowlSet1,
      features: ['foodGrade', 'microwaveSafe', 'dishwasherSafe'],
      materials: ['ceramic'],
      description: {
        es: 'Set de tres bowls en colores neutros, ideal para una mesa moderna y elegante.',
        en: 'Set of three bowls in neutral colors, ideal for a modern and elegant table.'
      }
    },
    {
      id: 3,
      name: 'Classic White Bowl',
      price: 18.99,
      image: bowlFeatured,
      features: ['foodGrade', 'microwaveSafe', 'ovenSafe', 'dishwasherSafe'],
      materials: ['ceramic'],
      description: {
        es: 'Bowl clásico blanco que combina con cualquier vajilla, versátil y atemporal.',
        en: 'Classic white bowl that matches any tableware, versatile and timeless.'
      }
    }
  ];

  const collections = [
    {
      id: 1,
      title: t('minimalistCollection'),
      descriptionKey: 'minimalistDesc',
      image: collectionMinimalist,
      href: '/colecciones'
    },
    {
      id: 2,
      title: t('colorfulCollection'),
      descriptionKey: 'colorfulDesc',
      image: collectionColorful,
      href: '/colecciones'
    },
    {
      id: 3,
      title: t('classicCollection'),
      descriptionKey: 'classicDesc',
      image: collectionClassic,
      href: '/colecciones'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Featured Products */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">
              Productos Destacados
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Descubre nuestros bowls más populares, elegidos por su diseño excepcional y funcionalidad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">
              Nuestras {t('collections')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Cada colección cuenta una historia única, diseñada para diferentes estilos y ocasiones.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <div 
                key={collection.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CollectionCard {...collection} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
