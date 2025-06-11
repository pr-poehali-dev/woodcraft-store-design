import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-wood-dark text-earth-beige">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-earth-beige rounded-full flex items-center justify-center">
                <Icon name="TreePine" size={28} className="text-wood-dark" />
              </div>
              <div>
                <h3 className="text-2xl font-montserrat font-bold">Владерия</h3>
                <p className="text-sm text-earth-beige/80">
                  мастерская изделий из дерева
                </p>
              </div>
            </div>
            <p className="text-earth-beige/90 mb-6 max-w-md">
              Создаём уникальные изделия из натурального дерева с 2009 года.
              Каждая вещь — это воплощение мастерства и заботы о природе.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-earth-beige/20 rounded-full flex items-center justify-center hover:bg-earth-beige/30 transition-colors">
                <Icon name="Facebook" size={18} />
              </button>
              <button className="w-10 h-10 bg-earth-beige/20 rounded-full flex items-center justify-center hover:bg-earth-beige/30 transition-colors">
                <Icon name="Instagram" size={18} />
              </button>
              <button className="w-10 h-10 bg-earth-beige/20 rounded-full flex items-center justify-center hover:bg-earth-beige/30 transition-colors">
                <Icon name="Youtube" size={18} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#catalog"
                  className="text-earth-beige/80 hover:text-earth-beige transition-colors"
                >
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-earth-beige/80 hover:text-earth-beige transition-colors"
                >
                  О мастерской
                </a>
              </li>
              <li>
                <a
                  href="#delivery"
                  className="text-earth-beige/80 hover:text-earth-beige transition-colors"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-earth-beige/80 hover:text-earth-beige transition-colors"
                >
                  Отзывы
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-earth-beige/80 hover:text-earth-beige transition-colors"
                >
                  Блог
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Связаться</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} />
                <span className="text-earth-beige/90">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} />
                <span className="text-earth-beige/90">info@vladeriya.ru</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={16} className="mt-1" />
                <span className="text-earth-beige/90">
                  Москва, ул. Мастеров, 12
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-earth-beige/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-earth-beige/70 text-sm">
            © 2024 Владерия. Все права защищены.
          </p>
          <div className="flex items-center space-x-2 text-sm text-earth-beige/70 mt-4 md:mt-0">
            <Icon name="Leaf" size={16} className="text-nature-sage" />
            <span>Изделия из экологически чистых материалов</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
