const activities = [
  {
    id: 1,
    title: 'London: The Original Jack the Ripper Walking Tour',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&auto=format&fit=crop',
    rating: 4.6,
    reviews: 12847,
    duration: '2 hours',
    price: 16,
    badge: 'Bestseller',
  },
  {
    id: 2,
    title: 'Paris: Skip-the-Line Louvre Museum Guided Tour',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 9214,
    duration: '3 hours',
    price: 65,
    badge: 'Top Rated',
  },
  {
    id: 3,
    title: 'Barcelona: Sagrada Família Skip-the-Line Entry',
    location: 'Barcelona, Spain',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&auto=format&fit=crop',
    rating: 4.7,
    reviews: 7583,
    duration: '1.5 hours',
    price: 38,
    badge: null,
  },
  {
    id: 4,
    title: 'Tokyo: Mt. Fuji & Hakone Full-Day Bus Tour',
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&auto=format&fit=crop',
    rating: 4.5,
    reviews: 4102,
    duration: 'Full day',
    price: 89,
    badge: null,
  },
  {
    id: 5,
    title: 'Bali: Ubud Monkey Forest & Rice Terrace Tour',
    location: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop',
    rating: 4.7,
    reviews: 3866,
    duration: '8 hours',
    price: 42,
    badge: 'Bestseller',
  },
  {
    id: 6,
    title: 'Rome: Colosseum, Forum & Palatine Hill Guided Tour',
    location: 'Rome, Italy',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop',
    rating: 4.9,
    reviews: 15320,
    duration: '3 hours',
    price: 58,
    badge: 'Top Rated',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.floor(rating)
              ? 'text-amber-400 fill-amber-400'
              : star - 0.5 <= rating
              ? 'text-amber-400 fill-amber-200'
              : 'text-gray-300 fill-gray-200'
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Experiences() {
  return (
    <section id="experiences" className="py-12 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Unforgettable travel experiences
          </h2>
          <a href="#" className="text-amber-500 hover:text-amber-600 font-semibold text-sm whitespace-nowrap hidden sm:block">See all →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act) => (
            <a
              key={act.id}
              href="#"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {act.badge && (
                  <span className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-full ${
                    act.badge === 'Bestseller'
                      ? 'bg-amber-400 text-amber-900'
                      : 'bg-emerald-500 text-white'
                  }`}>
                    {act.badge}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {act.location}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors leading-snug">{act.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={act.rating} />
                  <span className="text-sm font-semibold text-gray-800">{act.rating}</span>
                  <span className="text-sm text-gray-500">({act.reviews.toLocaleString()})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {act.duration}
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500">From </span>
                    <span className="text-lg font-bold text-gray-900">${act.price}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
