
import React from 'react';
import { CheckCircle, Settings, BookOpen, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Регистрация и верификация аккаунта",
      description: "Полный цикл создания аккаунта с прохождением всех этапов верификации в Meta"
    },
    {
      icon: <Settings className="w-8 h-8 text-green-600" />,
      title: "Техническое сопровождение",
      description: "Поддержка до полного запуска с настройкой всех необходимых параметров"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: "Инструкции по «прогреву»",
      description: "Подробные рекомендации по правильному началу работы с аккаунтом"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Консультации по масштабированию",
      description: "Советы по увеличению лимитов и соблюдению политики Meta"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Что входит в услугу</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный комплекс услуг для запуска вашего WhatsApp Business API аккаунта
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <div className="flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
