import Image from 'next/image';

const MenuSection = ({ title, subtitle, items, exploreText }) => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="text-gray-500 mt-2">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <div className="mb-4 w-80 h-80 relative">
              <Image
                src={item.image}
                alt={item.name}
                layout='fill'
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-black">{item.name}</h3>
            <p className="text-gray-500">{item.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-black">{item.price}</span>
              <span className="flex items-center text-black">
                <svg
                  className="w-5 h-5 text-yellow-500 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2l2.09 6.26L21 9.27l-4.91 4.1L17.27 21 12 17.27 6.73 21l1.18-7.63L3 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                {item.rating}
              </span>
            </div>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="#" className="text-green-500 hover:underline">
          {exploreText} →
        </a>
      </div>
    </div>
  </section>
);

export default function MenuPage() {
  const meals = [
    {
      name: 'Flavor Fusion',
      image: '/flavor-fusion.png',
      description: 'Experience the bold flavors...',
      price: '$15.90',
      rating: '4.5',
      buttonText: 'Add to Cart',
    },
    {
      name: 'Gourmet Grove',
      image: '/gourmet-grove.png',
      description: 'Gourmet meals crafted...',
      price: '$15.90',
      rating: '4.5',
      buttonText: 'Add to Cart',
    },
    {
      name: 'Savory Spice',
      image: '/savory-spice.png',
      description: 'A perfect balance of...',
      price: '$15.90',
      rating: '4.6',
      buttonText: 'Add to Cart',
    },
    {
      name: 'Plate Palate',
      image: '/plate-palate.png',
      description: 'Healthy and delicious...',
      price: '$15.90',
      rating: '4.5',
      buttonText: 'Add to Cart',
    },
  ];

  const groceries = [
    {
      name: 'Brown Bread',
      image: '/brown-bread.png',
      description: 'Wholesome and nutritious...',
      price: '$7.80',
      rating: '4.5',
      buttonText: 'Add to Cart',
    },
    {
      name: 'Cream Cheese',
      image: '/cream-cheese.png',
      description: 'Rich and creamy...',
      price: '$7.90',
      rating: '4.6',
      buttonText: 'Add to Cart',
    },
    {
      name: 'Granola',
      image: '/granola.png',
      description: 'Crunchy and full of flavor...',
      price: '$7.80',
      rating: '4.6',
      buttonText: 'Add to Cart',
    },
    {
      name: 'Energy Drinks',
      image: '/energy-drinks.png',
      description: 'Boost your energy...',
      price: '$7.90',
      rating: '4.6',
      buttonText: 'Add to Cart',
    },
  ];

  const distributionServices = [
    {
      name: 'Spicy Miso Ramen Bowl',
      image: '/spicy-miso-ramen.png',
      description: 'A flavorful ramen dish...',
      price: '$7.90',
      rating: '4.6',
      buttonText: 'Add to Cart',
    },
    {
      name: 'Grilled Steak Fajitas',
      image: '/grilled-steak-fajitas.png',
      description: 'Juicy and flavorful...',
      price: '$7.90',
      rating: '4.6',
      buttonText: 'Add to Cart',
    },
    {
      name: 'Tuna Nicoise Salad',
      image: '/tuna-nicoise-salad.png', 
      description: 'Healthy and delicious...',
      price: '$7.90',
      rating: '4.5',
      buttonText: 'Add to Cart',
    },
    {
      name: 'Beef Bowl',
      image: '/beef-bowl.png',
      description: 'Satisfying and hearty...',
      price: '$7.90',
      rating: '4.5',
      buttonText: 'Add to Cart',
    },
  ];

  return (
    <div>
      <MenuSection
        title="Our Most Delicious Meal"
        subtitle="Fully loaded meals designed to make your day better."
        items={meals}
        exploreText="Explore our list"
      />
      <MenuSection
        title="Groceries To Your Door"
        subtitle="Shop for fresh groceries delivered to your door."
        items={groceries}
        exploreText="Explore our service"
      />
      <MenuSection
        title="The Best Distribution Service"
        subtitle="Get meals delivered quickly and safely."
        items={distributionServices}
        exploreText="Explore our distribution"
      />
    </div>
  );
}
