const attractions = [
  {
    id: 1,
    name: 'Colosseum',
    city: 'Rome',
    activities: 480,
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Eiffel Tower',
    city: 'Paris',
    activities: 612,
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Sagrada Fàmilia',
    city: 'Barcelona',
    activities: 287,
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Rijksmuseum',
    city: 'Amsterdam',
    activities: 112,
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Burj Khalifa',
    city: 'Dubai',
    activities: 198,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Tower of London',
    city: 'London',
    activities: 312,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop',
  },
];

export default function Stories() {
  return (
    <section id="stories" className="py-12 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Attractions you can't miss
          </h2>
          <a href="#" className="text-amber-500 hover:text-amber-600 font-semibold text-sm whitespace-nowrap hidden sm:block">See all →</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {attractions.map((attr) => (
            <a
              key={attr.id}
              href="#"
              className="group flex flex-col gap-2"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all">
                <img
                  src={attr.image}
                  alt={attr.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <div className="font-semibold text-sm text-gray-900 group-hover:text-amber-500 transition-colors">{attr.name}</div>
                <div className="text-xs text-gray-500">{attr.activities} activities</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
