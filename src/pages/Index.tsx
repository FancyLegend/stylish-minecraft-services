import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type Category = "VIP" | "Игровые предметы" | "Косметика" | "Территория";

interface Service {
  title: string;
  description: string;
  price: number;
  category: Category;
  isPopular?: boolean;
  discount?: number;
}

const services: Service[] = [
  {
    title: "VIP Статус",
    description: "Получите особые привилегии и доступ к эксклюзивным функциям",
    price: 2500,
    category: "VIP",
    isPopular: true,
    discount: 20
  },
  {
    title: "Набор ресурсов",
    description: "Стартовый набор редких ресурсов для быстрого развития",
    price: 1500,
    category: "Игровые предметы",
    isPopular: true
  },
  {
    title: "Кастомные питомцы",
    description: "Уникальные питомцы с особыми способностями",
    price: 3000,
    category: "Косметика",
    discount: 15
  },
  {
    title: "Приват территории",
    description: "Защитите свою территорию от других игроков",
    price: 2000,
    category: "Территория"
  },
  {
    title: "Косметические эффекты",
    description: "Особые эффекты для вашего персонажа",
    price: 1000,
    category: "Косметика",
    discount: 10
  },
  {
    title: "Летающий остров",
    description: "Личный летающий остров с телепортом",
    price: 4000,
    category: "Территория",
    isPopular: true
  }
];

const Index = () => {
  const categories = Array.from(new Set(services.map(service => service.category)));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-4 md:p-8">
        <Hero />
        
        <div className="max-w-7xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">{category}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <ServiceCard
                      key={index}
                      {...service}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;