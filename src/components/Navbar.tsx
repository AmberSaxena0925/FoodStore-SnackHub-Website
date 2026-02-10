import { ShoppingBag, ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // temporary cart logic (replace with context/store later)
  const getTotalItems = () => 0;
  const onCartClick = () => {
    console.log('Cart clicked');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold text-orange-600">
              SnackHub
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {['home', 'products', 'about', 'reviews', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            
            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative text-gray-700 hover:text-orange-500 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Auth buttons (desktop) */}
            <div className="hidden md:flex gap-3">
              <a
                href="/login"
                className="px-4 py-2 text-orange-600 hover:text-orange-700 font-medium"
              >
                Login
              </a>
              <a
                href="/signup"
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium"
              >
                Sign Up
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {['home', 'products', 'about', 'reviews', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-gray-700 hover:text-orange-500"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}

              <div className="flex gap-2 pt-2 border-t">
                <a
                  href="/login"
                  className="flex-1 px-4 py-2 text-orange-600 text-center"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg text-center"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
