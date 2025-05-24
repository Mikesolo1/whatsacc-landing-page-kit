
import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <MessageCircle className="w-8 h-8 text-green-500 mr-2" />
              <h3 className="text-2xl font-bold">WhatsAcc</h3>
            </div>
            <p className="text-gray-300">
              Готовые аккаунты WhatsApp Business API под ключ для вашего бизнеса.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Premium-аккаунты WABA</li>
              <li>Техническое сопровождение</li>
              <li>Консультации по масштабированию</li>
              <li>Обучение работе с API</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: support@whatsacc.ru</p>
              <p>Телефон: +7 (XXX) XXX-XX-XX</p>
              <p>Telegram: @WhatsAccBot</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 WhatsAcc. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
