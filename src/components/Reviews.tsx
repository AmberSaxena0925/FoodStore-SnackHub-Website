import { Star, Quote, Send, X } from 'lucide-react';
import { useState } from 'react';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    comment: 'Absolutely love the variety and taste! The masala chips are my favorite. Fresh packaging and quick delivery. Highly recommend!',
    avatar: '👩'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    comment: 'Best quality snacks at affordable prices. The namkeen reminds me of my childhood. Great job SnackHub!',
    avatar: '👨'
  },
  {
    id: 3,
    name: 'Anita Patel',
    location: 'Ahmedabad',
    rating: 4,
    comment: 'Excellent taste and hygiene standards. My kids love the sweet biscuits. Will definitely order again!',
    avatar: '👩'
  }
];

export default function Reviews() {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer <span className="text-orange-500">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say!
          </p>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-orange-200" />

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-2xl">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= review.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>

        {/* WRITE REVIEW SECTION */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center transition-all">

          {!showForm ? (
            <>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Share Your Experience!
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We'd love to hear from you. Your feedback helps us serve you better.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold
                           hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Write a Review
              </button>
            </>
          ) : (
            /* ✍️ REVIEW FORM */
            <div className="max-w-xl mx-auto text-left animate-fadeIn">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Write Your Review
                </h3>
                <button onClick={() => setShowForm(false)}>
                  <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
                </button>
              </div>

              {/* STAR RATING */}
              <div className="flex gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    onClick={() => setRating(star)}
                    className={`w-7 h-7 cursor-pointer ${
                      star <= rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* MESSAGE BOX */}
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                placeholder="Write your honest review..."
                className="w-full border border-gray-300 rounded-xl p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              {/* ACTIONS */}
              <div className="flex gap-4">
                <button
                  className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold
                             hover:bg-orange-600 flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit
                </button>

                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
