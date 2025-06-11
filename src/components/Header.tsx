import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-earth-beige/90 backdrop-blur-sm border-b border-wood-light/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-wood-dark rounded-full flex items-center justify-center">
              <Icon name="TreePine" size={24} className="text-earth-beige" />
            </div>
            <div>
              <h1 className="text-2xl font-montserrat font-bold text-wood-dark">
                Владерия
              </h1>
              <p className="text-xs text-wood-medium">
                мастерская изделий из дерева
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#catalog"
              className="text-wood-dark hover:text-wood-medium transition-colors font-medium"
            >
              Каталог
            </a>
            <a
              href="#about"
              className="text-wood-dark hover:text-wood-medium transition-colors font-medium"
            >
              О мастерской
            </a>
            <a
              href="#delivery"
              className="text-wood-dark hover:text-wood-medium transition-colors font-medium"
            >
              Доставка и оплата
            </a>
            <a
              href="#reviews"
              className="text-wood-dark hover:text-wood-medium transition-colors font-medium"
            >
              Отзывы
            </a>
            <a
              href="#blog"
              className="text-wood-dark hover:text-wood-medium transition-colors font-medium"
            >
              Блог
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-wood-dark hover:text-wood-medium transition-colors">
              <Icon name="Search" size={20} />
            </button>
            <button className="p-2 text-wood-dark hover:text-wood-medium transition-colors relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-nature-green text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button className="md:hidden p-2 text-wood-dark hover:text-wood-medium transition-colors">
              <Icon name="Menu" size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
