
import React from 'react';
import { Banknote, Clock, AlertCircle, Key } from 'lucide-react';

const Terms = () => {
  const terms = [
    {
      icon: <Banknote className="w-6 h-6 text-green-600" />,
      title: "Стоимость",
      description: "16 000 ₽ за любой вариант аккаунта"
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "Срок",
      description: "От 2 до 4 недель с момента оплаты"
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-green-600" />,
      title: "Важно",
      description: "Вариант аккаунта определяется алгоритмами Meta и заранее неизвестен"
    },
    {
      icon: <Key className="w-6 h-6 text-green-600" />,
      title: "Доступы",
      description: "Выдаются после полной активации аккаунта"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Условия подключения</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {terms.map((term, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gray-100 transition-colors duration-300">
              <div className="flex justify-center mb-4">
                {term.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{term.title}</h3>
              <p className="text-gray-600 text-sm">{term.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Terms;
