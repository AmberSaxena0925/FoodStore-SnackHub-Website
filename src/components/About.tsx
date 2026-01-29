import { Heart, Award, Leaf, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-500">SnackHub</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Founded with a passion for bringing joy through taste, SnackHub has been serving delicious,
              high-quality snacks to families across the nation since 2015.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We believe that snacking should be a delightful experience. That's why we source the finest
              ingredients and use traditional recipes combined with modern techniques to create snacks
              that burst with authentic flavors.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              From crispy chips made with real spices to sweet treats crafted with love, every product
              from SnackHub carries our commitment to quality, hygiene, and customer satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Made with Love</h4>
                  <p className="text-sm text-gray-600">Every batch crafted with care</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Certified</h4>
                  <p className="text-sm text-gray-600">ISO & FSSAI approved</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fresh Ingredients</h4>
                  <p className="text-sm text-gray-600">No artificial preservatives</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Family Recipes</h4>
                  <p className="text-sm text-gray-600">Traditional & authentic</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-red-400 rounded-full w-80 h-80 mx-auto blur-3xl opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Promise</h3>
                  <p className="text-gray-600">Delivering happiness in every bite</p>
                </div>
                <div className="border-t-2 border-orange-100 pt-6 space-y-4">
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Fresh Daily</span>
                    <span className="text-2xl">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Hygienic Process</span>
                    <span className="text-2xl">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Quality Tested</span>
                    <span className="text-2xl">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Best Price</span>
                    <span className="text-2xl">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
