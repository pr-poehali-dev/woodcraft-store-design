import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-earth-beige via-earth-cream to-wood-pine overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${wood - dark}' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm-4-8c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-wood-dark mb-6 leading-tight">
              Тепло ручной работы
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-16 h-px bg-nature-green"></div>
              <Icon name="TreePine" size={20} className="text-nature-green" />
              <div className="w-16 h-px bg-nature-green"></div>
            </div>
            <p className="text-xl md:text-2xl text-wood-medium font-open-sans font-light max-w-2xl mx-auto leading-relaxed">
              Мастерская «Владерия» создаёт уникальные изделия из натурального
              дерева. Каждая вещь — это тепло ручной работы и забота о природе.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in">
            <button className="px-8 py-4 bg-wood-dark text-earth-beige rounded-lg font-montserrat font-semibold hover:bg-wood-medium transition-all duration-300 hover-scale wood-shadow">
              Смотреть каталог
            </button>
            <button className="px-8 py-4 border-2 border-wood-dark text-wood-dark rounded-lg font-montserrat font-semibold hover:bg-wood-dark hover:text-earth-beige transition-all duration-300">
              О мастерской
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-nature-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" size={28} className="text-nature-green" />
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-wood-dark mb-2">
                100% Экологично
              </h3>
              <p className="text-wood-medium">
                Используем только натуральное дерево и безопасные покрытия
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wood-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Hammer" size={28} className="text-wood-light" />
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-wood-dark mb-2">
                Ручная работа
              </h3>
              <p className="text-wood-medium">
                Каждое изделие создано с душой и вниманием к деталям
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wood-medium/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={28} className="text-wood-medium" />
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-wood-dark mb-2">
                Качество
              </h3>
              <p className="text-wood-medium">
                Изделия служат десятилетиями и передаются по наследству
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-wood-medium" />
      </div>
    </section>
  );
};

export default Hero;
