
import React from 'react';
import { Shield, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Команда экспертов",
      description: "Специалисты с многолетним опытом работы с WhatsApp Business API"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Безопасность",
      description: "Полное соблюдение политик Meta и WhatsApp при создании аккаунтов"
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Надёжность",
      description: "Готовые к работе аккаунты с полным техническим сопровождением"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">О нас</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <strong>WhatsAcc</strong> — команда специалистов по WhatsApp Business API. 
            Мы запускаем, прогреваем и передаём клиенту уже активированные и готовые к работе аккаунты. 
            Наш опыт позволяет обеспечить максимальную надёжность и безопасность ваших коммуникаций.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
