import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center
                 bg-gradient-to-br from-white via-orange-50 to-white"
    >
      <img
        src="https://img.freepik.com/premium-photo/modern-fast-food-restaurant-interior_1354831-1586.jpg?semt=ais_hybrid&w=1600&q=80"
        alt="Snacks background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
        style={{ filter: 'blur(8px)' }}
      />
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Crunch Into
              <span className="text-orange-500"> Happiness</span>
            </h1>

            <p className="text-xl text-gray-600">
              Discover a world of delicious snacks from spicy chips to sweet treats.
              Fresh, hygienic, and bursting with flavor in every bite!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold
                           hover:bg-orange-600 transition-all transform hover:scale-105
                           flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection('products')}
                className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold
                           hover:bg-gray-50 transition-all border-2 border-orange-500
                           flex items-center justify-center"
              >
                View Menu
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-orange-500">500+</p>
                <p className="text-gray-600">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-500">50k+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-500">4.8</p>
                <p className="text-gray-600">Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="bg-gradient-to-br from-orange-400 to-red-400
                         rounded-full w-96 h-96 mx-auto blur-3xl opacity-20
                         absolute top-1/2 left-1/2 transform
                         -translate-x-1/2 -translate-y-1/2"
            ></div>

            <div className="relative grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
                <div className="w-full h-32 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-xl mb-3 flex items-center justify-center text-4xl">
                  🍿
                </div>
                <h3 className="font-semibold text-gray-800">Spicy Chips</h3>
                <p className="text-sm text-gray-600">Crispy & Tasty</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform mt-8">
                <div className="w-full h-32 bg-gradient-to-br from-red-200 to-orange-300 rounded-xl mb-3 flex items-center justify-center text-4xl">
                  🍪
                </div>
                <h3 className="font-semibold text-gray-800">Sweet Biscuits</h3>
                <p className="text-sm text-gray-600">Delicious Treats</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
                <div className="w-full h-32 bg-gradient-to-br from-orange-200 to-yellow-300 rounded-xl mb-3 flex items-center justify-center text-4xl">
                  🥜
                </div>
                <h3 className="font-semibold text-gray-800">Namkeen</h3>
                <p className="text-sm text-gray-600">Traditional Taste</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform mt-8">
                <div className="w-full h-32 bg-gradient-to-br from-green-200 to-lime-300 rounded-xl mb-3 flex items-center justify-center text-4xl">
                  🥗
                </div>
                <h3 className="font-semibold text-gray-800">Healthy Snacks</h3>
                <p className="text-sm text-gray-600">Guilt-free</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
