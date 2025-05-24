
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8">
          <MessageCircle className="w-12 h-12 text-green-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-800">WhatsAcc</h1>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Готовые аккаунты<br />
          <span className="text-green-600">WhatsApp Business API</span><br />
          под ключ
        </h2>
        
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Для рассылок, поддержки и автоматизации. Получите полностью настроенный и активированный аккаунт WABA за 2-4 недели.
        </p>
        
        <Button 
          onClick={scrollToForm}
          size="lg" 
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
        >
          Получить аккаунт
        </Button>
      </div>
    </section>
  );
};

export default Hero;
