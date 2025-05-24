
import React from 'react';
import { Clock, Users, Shield, CheckCircle } from 'lucide-react';

const Recommendations = () => {
  const recommendations = [
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Отвечайте быстро",
      description: "Отвечать на входящие сообщения в течение 24 часов"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Качественные базы",
      description: "Использовать только актуальные, заинтересованные базы контактов"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Избегайте спама",
      description: "Не отправлять холодные рассылки незнакомым пользователям"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Соблюдайте правила",
      description: "Следовать требованиям Meta и политикам WhatsApp"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Рекомендации по использованию</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Следуйте этим простым правилам для долгосрочной и успешной работы с аккаунтом
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="flex justify-center mb-4">
                {rec.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{rec.title}</h3>
              <p className="text-gray-600 text-sm">{rec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
