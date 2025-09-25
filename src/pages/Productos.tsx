import { useLanguage } from '@/contexts/LanguageContext';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import bowlFeatured from '@/assets/bowl-featured.jpg';
import bowlSet1 from '@/assets/bowl-set-1.jpg';

const Productos = () => {
  const { t } = useLanguage();

  const products = [
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
    },
    {
      id: 4,
      name: 'Artisan Bowl Collection',
      price: 35.99,
      image: bowlSet1,
      features: ['foodGrade', 'microwaveSafe'],
      materials: ['ceramic', 'wood'],
      description: {
        es: 'Colección artesanal con acabados únicos, perfecta para ocasiones especiales.',
        en: 'Artisan collection with unique finishes, perfect for special occasions.'
      }
    },
    {
      id: 5,
      name: 'Stainless Steel Bowl',
      price: 28.99,
      image: bowlFeatured,
      features: ['foodGrade', 'dishwasherSafe'],
      materials: ['stainless'],
      description: {
        es: 'Bowl de acero inoxidable duradero, ideal para uso profesional y doméstico.',
        en: 'Durable stainless steel bowl, ideal for professional and home use.'
      }
    },
    {
      id: 6,
      name: 'Wood & Ceramic Hybrid',
      price: 42.99,
      image: bowlSet1,
      features: ['foodGrade', 'microwaveSafe'],
      materials: ['wood', 'ceramic'],
      description: {
        es: 'Diseño híbrido que combina la calidez de la madera con la funcionalidad de la cerámica.',
        en: 'Hybrid design that combines the warmth of wood with the functionality of ceramic.'
      }
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
              {t('products')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Descubre nuestra colección completa de bowls elegantes y funcionales, diseñados para cada ocasión.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
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

      {/* Special Offer Banner */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            {t('specialWeekend')}
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            {t('percentOff')} en toda la colección este fin de semana
          </p>
          <div className="bg-primary text-primary-foreground inline-block px-6 py-3 rounded-xl font-bold text-lg">
            Código: WEEKEND15
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Productos;