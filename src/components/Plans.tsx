
import React from 'react';
import { Crown, Zap, Target } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      icon: <Crown className="w-8 h-8 text-yellow-600" />,
      title: "Premium-аккаунт",
      color: "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200",
      features: [
        "Официальное подтверждение имени компании в Meta",
        "Лимит: до 1000 сообщений/сутки",
        "Можно начинать рассылки сразу",
        "Подходит для холодных и тёплых баз",
        "Высокая степень доверия со стороны пользователей"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Аккаунт без имени (лимит 250)",
      color: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
      features: [
        "Без официального названия",
        "Подходит для пилота или тёплых баз",
        "Есть шанс подтвердить имя при соблюдении политики",
        "Возможен рост лимита до 1000",
        "Лимит: 250 сообщений/сутки"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Аккаунт без имени (лимит 1000)",
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
      features: [
        "Без официального названия",
        "Имя бизнеса нельзя будет добавить",
        "Максимальный лимит сразу",
        "Подходит для стабильных рассылок без привязки к бренду",
        "Лимит: 1000 сообщений/сутки"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Варианты аккаунтов</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Тип аккаунта определяется алгоритмами Meta. Вы получите первый доступный из пула готовых аккаунтов.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`${plan.color} border-2 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300`}>
              <div className="flex items-center mb-6">
                {plan.icon}
                <h3 className="text-xl font-bold text-gray-800 ml-3">{plan.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
