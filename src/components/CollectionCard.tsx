import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface CollectionCardProps {
  title: string;
  descriptionKey: string;
  image: string;
  href: string;
  featured?: boolean;
}

const CollectionCard = ({ title, descriptionKey, image, href, featured = false }: CollectionCardProps) => {
  const { t } = useLanguage();

  return (
    <div className={`group relative overflow-hidden rounded-2xl ${
      featured ? 'lg:col-span-2 lg:row-span-2' : ''
    }`}>
      {/* Background Image */}
      <div className="relative h-80 lg:h-96 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
        <div className="text-white">
          <h3 className={`font-bold mb-2 tracking-tight ${
            featured ? 'text-3xl lg:text-4xl' : 'text-2xl'
          }`}>
            {title}
          </h3>
          <p className={`mb-4 leading-relaxed ${
            featured ? 'text-lg max-w-lg' : 'text-base'
          }`}>
            {t(descriptionKey)}
          </p>
          <Link to={href}>
            <Button 
              variant="secondary"
              className="bg-white/90 hover:bg-white text-black hover:text-black"
            >
              {t('exploreCollection')}
            </Button>
          </Link>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default CollectionCard;