import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
      title: "Обеденный стол из дуба",
      price: 85000,
      woodType: "Дуб",
      isNew: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop",
      title: "Кухонная доска из бука",
      price: 3500,
      woodType: "Бук",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      title: "Книжная полка из сосны",
      price: 15000,
      woodType: "Сосна",
    },
    {
      image:
        "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop",
      title: "Декоративная ваза из берёзы",
      price: 7200,
      woodType: "Берёза",
      isNew: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop",
      title: "Журнальный столик из ореха",
      price: 42000,
      woodType: "Орех",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571898995719-b4d3c7c2e20b?w=400&h=300&fit=crop",
      title: "Набор деревянной посуды",
      price: 5800,
      woodType: "Липа",
    },
  ];

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-wood-dark mb-4">
            Наши изделия
          </h2>
          <p className="text-xl text-wood-medium max-w-2xl mx-auto">
            От мебели до мелкого декора — всё сделано с душой из натурального
            дерева
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              woodType={product.woodType}
              isNew={product.isNew}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-wood-dark text-wood-dark rounded-lg font-montserrat font-semibold hover:bg-wood-dark hover:text-earth-beige transition-all duration-300">
            Смотреть весь каталог
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
