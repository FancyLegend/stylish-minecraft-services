import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    title: "VIP Статус",
    description: "Получите особые привилегии и доступ к эксклюзивным функциям",
    price: 25,
    isPopular: true,
    discount: 20
  },
  {
    title: "Набор ресурсов",
    description: "Стартовый набор редких ресурсов для быстрого развития",
    price: 15,
    isPopular: true
  },
  {
    title: "Кастомные питомцы",
    description: "Уникальные питомцы с особыми способностями",
    price: 30,
    discount: 15
  },
  {
    title: "Приват территории",
    description: "Защитите свою территорию от других игроков",
    price: 20
  },
  {
    title: "Косметические эффекты",
    description: "Особые эффекты для вашего персонажа",
    price: 10,
    discount: 10
  },
  {
    title: "Летающий остров",
    description: "Личный летающий остров с телепортом",
    price: 40,
    isPopular: true
  }
];

const Index = () => {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <Hero />
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Наши услуги</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;