import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  features: string[];
  materials: string[];
  description: {
    es: string;
    en: string;
  };
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  features, 
  materials, 
  description 
}: ProductCardProps) => {
  const { t, language } = useLanguage();

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {originalPrice && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-lg text-xs font-medium">
            {t('specialWeekend')}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 tracking-tight">{name}</h3>
        
        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-3">
          {features.map((feature) => (
            <Badge 
              key={feature} 
              variant="secondary" 
              className="text-xs bg-accent text-accent-foreground"
            >
              {t(feature)}
            </Badge>
          ))}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description[language]}
        </p>

        {/* Materials */}
        <div className="flex flex-wrap gap-2 mb-4">
          {materials.map((material) => (
            <span 
              key={material} 
              className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md"
            >
              {t(material)}
            </span>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-foreground">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button 
            size="sm" 
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            {t('viewDetails')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;