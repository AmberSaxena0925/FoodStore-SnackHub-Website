import { ShoppingBag, Menu, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar({ onCartClick }: { onCartClick: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold text-orange-600">SnackHub</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-500 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-orange-500 transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-500 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-orange-500 transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-500 transition-colors">
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
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
            <div className="hidden md:flex gap-3">
              <a href="/login" className="px-4 py-2 text-orange-600 hover:text-orange-700 font-medium transition-colors">
                Login
              </a>
              <a href="/signup" className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium transition-colors">
                Sign Up
              </a>
            </div>
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-500 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-orange-500 transition-colors text-left">
                Products
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-500 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-orange-500 transition-colors text-left">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-500 transition-colors text-left">
                Contact
              </button>
              <div className="flex gap-2 pt-2 border-t">
                <a href="/login" className="flex-1 px-4 py-2 text-orange-600 hover:text-orange-700 font-medium transition-colors text-center">
                  Login
                </a>
                <a href="/signup" className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium transition-colors text-center">
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
