import { useState } from 'react';

export default function Hero() {
  const [query, setQuery] = useState('');

  return (
    <section className="relative pt-16">
      {/* Banner image */}
      <div className="relative h-[480px] sm:h-[540px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&auto=format&fit=crop&q=80"
          alt="Discover the world"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-lg">
            Discover &amp; book things to do
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-10 drop-shadow">
            Tickets, tours, activities and experiences worldwide
          </p>

          {/* Search bar */}
          <div className="w-full max-w-2xl">
            <div className="flex bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center flex-1 px-5 gap-3">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Where do you want to go?"
                  className="flex-1 py-5 text-gray-800 placeholder-gray-400 text-lg focus:outline-none bg-transparent"
                />
              </div>
              <button className="m-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg rounded-xl transition-all shadow-lg">
                Search
              </button>
            </div>

            {/* Popular quick-picks */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {['Paris', 'Tokyo', 'New York', 'Rome', 'Bali'].map((city) => (
                <button
                  key={city}
                  onClick={() => setQuery(city)}
                  className="px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/40 text-white text-sm rounded-full hover:bg-white/30 transition-all"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-gray-600">
            {[
              { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Free cancellation available' },
              { icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', label: 'Reserve now, pay later' },
              { icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', label: '70,000+ experiences' },
              { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', label: 'Secure payment' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
