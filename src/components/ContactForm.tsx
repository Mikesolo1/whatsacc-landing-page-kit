
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      comment: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Оставить заявку</h2>
          <p className="text-xl text-gray-600">
            Заполните форму, и наш специалист свяжется с вами для обсуждения деталей
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium">Имя *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 border-gray-300 focus:border-green-500 focus:ring-green-500"
                  placeholder="Ваше имя"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 border-gray-300 focus:border-green-500 focus:ring-green-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium">Телефон</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 border-gray-300 focus:border-green-500 focus:ring-green-500"
                  placeholder="+7 (XXX) XXX-XX-XX"
                />
              </div>
              
              <div>
                <Label htmlFor="comment" className="text-gray-700 font-medium">Комментарий</Label>
                <Textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  className="mt-2 border-gray-300 focus:border-green-500 focus:ring-green-500"
                  placeholder="Расскажите о ваших потребностях..."
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-lg"
              >
                Оставить заявку
              </Button>
            </form>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Контакты</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <a href="mailto:support@whatsacc.ru" className="text-green-600 hover:text-green-700">
                    support@whatsacc.ru
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium text-gray-800">Телефон</p>
                  <a href="tel:+7" className="text-green-600 hover:text-green-700">
                    +7 (XXX) XXX-XX-XX
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium text-gray-800">Telegram</p>
                  <a href="#" className="text-green-600 hover:text-green-700">
                    @WhatsAccBot
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Время ответа:</strong> Мы отвечаем на все обращения в течение 2-4 часов в рабочие дни.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
