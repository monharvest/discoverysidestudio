const cities = [
  { name: 'Amsterdam', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&auto=format&fit=crop' },
  { name: 'Rome', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&auto=format&fit=crop' },
  { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&auto=format&fit=crop' },
  { name: 'Tokyo', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&auto=format&fit=crop' },
  { name: 'Barcelona', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&auto=format&fit=crop' },
  { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&auto=format&fit=crop' },
  { name: 'New York', image: 'https://images.unsplash.com/photo-1546436836-07a91091f160?w=400&auto=format&fit=crop' },
  { name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&auto=format&fit=crop' },
  { name: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop' },
  { name: 'Sydney', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&auto=format&fit=crop' },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-12 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Things to do wherever you're going
          </h2>
          <a href="#" className="text-amber-500 hover:text-amber-600 font-semibold text-sm whitespace-nowrap hidden sm:block">See all →</a>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-3 -mx-4 px-4 sm:-mx-6 sm:px-6" style={{ scrollbarWidth: 'none' }}>
          {cities.map((city) => (
            <a key={city.name} href="#" className="flex flex-col items-center gap-2 group shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-transparent group-hover:border-amber-400 transition-all shadow-md">
                <img src={city.image} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-sm font-semibold text-gray-800 group-hover:text-amber-500 transition-colors text-center">{city.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
