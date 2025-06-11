import Icon from "@/components/ui/icon";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  woodType: string;
  isNew?: boolean;
}

const ProductCard = ({
  image,
  title,
  price,
  woodType,
  isNew = false,
}: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-xl wood-shadow hover:shadow-2xl transition-all duration-300 overflow-hidden hover-scale">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {isNew && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-nature-green text-white text-sm font-montserrat font-semibold rounded-full">
            Новинка
          </span>
        )}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white rounded-full shadow-lg hover:bg-earth-beige transition-colors">
            <Icon name="Heart" size={16} className="text-wood-dark" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-wood-medium font-medium bg-earth-beige px-3 py-1 rounded-full">
            {woodType}
          </span>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Icon
                key={star}
                name="Star"
                size={12}
                className="text-yellow-400 fill-current"
              />
            ))}
          </div>
        </div>

        <h3 className="text-lg font-montserrat font-semibold text-wood-dark mb-2 group-hover:text-wood-medium transition-colors">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-montserrat font-bold text-wood-dark">
            {price.toLocaleString("ru-RU")} ₽
          </div>
          <button className="px-4 py-2 bg-wood-dark text-earth-beige rounded-lg font-medium hover:bg-wood-medium transition-all duration-300 flex items-center space-x-2">
            <Icon name="ShoppingCart" size={16} />
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
