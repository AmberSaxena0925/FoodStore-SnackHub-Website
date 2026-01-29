import { ShoppingBag, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">SnackHub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for delicious, fresh, and affordable snacks.
            </p>
            <p className="text-sm text-gray-500">
              ISO 22000 | FSSAI Certified
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-orange-500 transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Spicy Chips</li>
              <li className="text-gray-400">Sweet Biscuits</li>
              <li className="text-gray-400">Traditional Namkeen</li>
              <li className="text-gray-400">Healthy Snacks</li>
              <li className="text-gray-400">Combo Packs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Track Order</li>
              <li className="text-gray-400">Shipping Policy</li>
              <li className="text-gray-400">Return Policy</li>
              <li className="text-gray-400">Privacy Policy</li>
              <li className="text-gray-400">Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 SnackHub. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> for snack lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
