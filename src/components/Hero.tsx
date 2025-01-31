export function Hero() {
  return (
    <div className="hero-gradient text-white py-20 px-4 rounded-2xl mb-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Уникальные услуги для вашего Minecraft сервера
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Улучшите свой игровой опыт с нашими премиум услугами
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
          Смотреть услуги
        </button>
      </div>
    </div>
  );
}