import { Sparkles, Shield, IndianRupee, Truck, Clock, ThumbsUp } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Sparkles,
      title: 'Fresh Ingredients',
      description: 'We use only the freshest, premium-quality ingredients sourced from trusted suppliers',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Shield,
      title: 'Hygienic Preparation',
      description: 'State-of-the-art facilities with strict quality control and food safety standards',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: IndianRupee,
      title: 'Affordable Pricing',
      description: 'Premium quality at prices that fit your budget. Great taste without breaking the bank',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery service ensuring your snacks reach you fresh and on time',
      color: 'from-red-400 to-pink-400'
    },
    {
      icon: Clock,
      title: 'Always Fresh',
      description: 'Made in small batches daily to guarantee maximum freshness in every pack',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: ThumbsUp,
      title: 'Customer Satisfaction',
      description: '100% satisfaction guarantee with hassle-free returns and responsive customer support',
      color: 'from-orange-400 to-red-400'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-orange-500">SnackHub</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We go the extra mile to ensure every snacking experience is memorable and delightful
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Snack-Loving Community!
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Over 50,000 happy customers trust us for their daily snacking needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6">
              <p className="text-4xl font-bold">500+</p>
              <p className="text-sm opacity-90">Products</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6">
              <p className="text-4xl font-bold">50k+</p>
              <p className="text-sm opacity-90">Customers</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6">
              <p className="text-4xl font-bold">100+</p>
              <p className="text-sm opacity-90">Cities</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6">
              <p className="text-4xl font-bold">4.8/5</p>
              <p className="text-sm opacity-90">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
