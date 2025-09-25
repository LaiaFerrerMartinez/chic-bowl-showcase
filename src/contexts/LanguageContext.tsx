import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { es: 'Home', en: 'Home' },
  products: { es: 'Productos', en: 'Products' },
  collections: { es: 'Colecciones', en: 'Collections' },
  buyNow: { es: 'Comprar ahora', en: 'Buy now' },
  getInTouch: { es: 'Contactar', en: 'Get in touch' },
  
  // Hero Section
  heroTitle: { es: 'Bowl Collection', en: 'Bowl Collection' },
  heroDescription: { 
    es: 'Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.',
    en: 'Explore our collection of bowls that combines style and practicality, perfect for any table.'
  },
  exploreCollection: { es: 'Explorar Colección', en: 'Explore Collection' },
  
  // Product Features
  foodGrade: { es: 'Food grade', en: 'Food grade' },
  microwaveSafe: { es: 'Microwave safe', en: 'Microwave safe' },
  ovenSafe: { es: 'Oven safe', en: 'Oven safe' },
  dishwasherSafe: { es: 'Dishwasher safe', en: 'Dishwasher safe' },
  viewDetails: { es: 'Ver detalles', en: 'View details' },
  
  // Collections
  minimalistCollection: { es: 'Minimalistas', en: 'Minimalist' },
  colorfulCollection: { es: 'Coloridos', en: 'Colorful' },
  classicCollection: { es: 'Clásicos', en: 'Classic' },
  
  minimalistDesc: {
    es: 'Diseños limpios y elegantes que complementan cualquier cocina moderna.',
    en: 'Clean and elegant designs that complement any modern kitchen.'
  },
  colorfulDesc: {
    es: 'Colores vibrantes que añaden personalidad y alegría a tu mesa.',
    en: 'Vibrant colors that add personality and joy to your table.'
  },
  classicDesc: {
    es: 'Diseños atemporales que nunca pasan de moda, perfectos para cualquier ocasión.',
    en: 'Timeless designs that never go out of style, perfect for any occasion.'
  },
  
  // Promotions
  specialWeekend: { es: 'Especial fin de semana', en: 'Special weekend' },
  percentOff: { es: '15% descuento', en: '15% off' },
  
  // Materials
  stainless: { es: 'Acero inoxidable', en: 'Stainless' },
  ceramic: { es: 'Cerámica', en: 'Ceramic' },
  wood: { es: 'Madera', en: 'Wood' },
  
  // Footer
  contact: { es: 'Contacto', en: 'Contact' },
  followUs: { es: 'Síguenos', en: 'Follow us' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};