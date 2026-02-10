import { ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import confetti from 'canvas-confetti';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  weight: string;
  rating: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Masala Magic Chips', category: 'Spicy', price: 30, weight: '50g', rating: 4.5, image: '🌶️' },
  { id: 2, name: 'Peri Peri Crunch', category: 'Spicy', price: 35, weight: '60g', rating: 4.7, image: '🔥' },
  { id: 3, name: 'BBQ Blast', category: 'Spicy', price: 40, weight: '75g', rating: 4.6, image: '🍖' },
  { id: 4, name: 'Butter Cookies', category: 'Sweet', price: 50, weight: '100g', rating: 4.8, image: '🍪' },
  { id: 5, name: 'Chocolate Biscuits', category: 'Sweet', price: 45, weight: '90g', rating: 4.9, image: '🍫' },
  { id: 6, name: 'Coconut Treats', category: 'Sweet', price: 55, weight: '100g', rating: 4.7, image: '🥥' },
  { id: 7, name: 'Mixed Namkeen', category: 'Traditional', price: 40, weight: '100g', rating: 4.6, image: '🥜' },
  { id: 8, name: 'Sev Mixture', category: 'Traditional', price: 35, weight: '80g', rating: 4.5, image: '🌾' },
  { id: 9, name: 'Protein Bars', category: 'Healthy', price: 60, weight: '40g', rating: 4.4, image: '💪' },
  { id: 10, name: 'Trail Mix', category: 'Healthy', price: 70, weight: '100g', rating: 4.8, image: '🥗' },
  { id: 11, name: 'Family Pack', category: 'Combo', price: 200, weight: '500g', rating: 4.9, image: '🎁' },
  { id: 12, name: 'Party Mix', category: 'Combo', price: 150, weight: '400g', rating: 4.7, image: '🎉' },
];

const categories = ['All', 'Spicy', 'Sweet', 'Traditional', 'Healthy', 'Combo'] as const;
type Category = typeof categories[number];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const { addItem } = useCart();

  /* 🎉 Confetti Effect */
  const popSprinkles = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#fb923c', '#f97316', '#facc15', '#22c55e', '#ef4444'],
    });
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Delicious <span className="text-orange-500">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of mouthwatering snacks, from crispy chips to sweet treats
          </p>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all
                ${selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border"
            >
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 h-48 flex items-center justify-center text-7xl">
                {product.image}
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {product.weight}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">
                    ₹{product.price}
                  </span>

                  <button
                    onClick={() => {
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        weight: product.weight,
                        quantity: 1,
                        image: product.image,
                      });
                      popSprinkles();
                    }}
                    className="bg-orange-500 text-white p-2 rounded-full
                               hover:bg-orange-600 transition-all hover:scale-110"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SPECIAL OFFER */}
        <div className="text-center mt-12">
          <div className="inline-block bg-orange-50 border-2 border-orange-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Special Offer!
            </h3>
            <p className="text-gray-600 mb-4">
              Get 20% off on orders above ₹500
            </p>

            <button
              onClick={popSprinkles}
              className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold
                         hover:bg-orange-600 active:scale-95 transition-all shadow-lg"
            >
              🎉 Use Code: SNACK20
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
