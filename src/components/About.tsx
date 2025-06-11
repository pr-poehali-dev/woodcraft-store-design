import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-earth-cream to-earth-beige"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl font-montserrat font-bold text-wood-dark mb-6">
              О мастерской Владерия
            </h2>
            <p className="text-lg text-wood-medium mb-6 leading-relaxed">
              Уже более 15 лет мы создаём уникальные изделия из натурального
              дерева. Наша философия — сохранить природную красоту материала и
              передать тепло ручной работы каждому изделию.
            </p>
            <p className="text-lg text-wood-medium mb-8 leading-relaxed">
              Мы работаем с лучшими породами дерева: дубом, буком, орехом,
              сосной. Каждое изделие проходит все этапы обработки вручную — от
              распила до финишной шлифовки.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <div className="text-3xl font-montserrat font-bold text-wood-dark mb-2">
                  15+
                </div>
                <div className="text-wood-medium font-medium">лет опыта</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <div className="text-3xl font-montserrat font-bold text-wood-dark mb-2">
                  500+
                </div>
                <div className="text-wood-medium font-medium">
                  довольных клиентов
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="px-6 py-3 bg-wood-dark text-earth-beige rounded-lg font-montserrat font-semibold hover:bg-wood-medium transition-all duration-300">
                Наша история
              </button>
              <button className="flex items-center space-x-2 text-wood-dark hover:text-wood-medium transition-colors">
                <Icon name="Play" size={20} />
                <span className="font-medium">Смотреть видео</span>
              </button>
            </div>
          </div>

          {/* Video/Image */}
          <div className="animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden wood-shadow">
              <img
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&h=400&fit=crop"
                alt="Мастер за работой"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group">
                  <Icon
                    name="Play"
                    size={32}
                    className="text-wood-dark ml-1 group-hover:scale-110 transition-transform"
                  />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-lg">
                <Icon name="Shield" size={24} className="text-nature-green" />
                <div>
                  <div className="font-montserrat font-semibold text-wood-dark">
                    Гарантия качества
                  </div>
                  <div className="text-sm text-wood-medium">
                    5 лет на изделия
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/70 rounded-lg">
                <Icon name="Truck" size={24} className="text-wood-medium" />
                <div>
                  <div className="font-montserrat font-semibold text-wood-dark">
                    Доставка
                  </div>
                  <div className="text-sm text-wood-medium">По всей России</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
