export default function Community() {
  return (
    <section id="community" className="py-16 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* App download banner */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
            <div className="flex-1 text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Take your adventures everywhere
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Download the DiscoverySide app and book experiences on the go. Access your tickets offline and get real-time updates.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.35.2.76.21 1.15.04l12.23-6.89-2.65-2.65-10.73 9.5zm16.31-10.26L16.76 12l2.73-1.5-2.72-2.73L14 9.24l2.83 2.83-2.83 2.83 2.83 2.83 2.65 2.65c.01-.02.01-.04.01-.06l-.01-3.82zM2.14.22C1.84.53 1.67.98 1.67 1.57v20.86c0 .59.17 1.04.47 1.35l.07.07L13.5 12.07v-.15L2.21.15l-.07.07zm11.35 11.85L2.14 1.5l10.4 9.29.95.95-2.65 2.65-.95-.32z" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-300">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            {/* Stats pills */}
            <div className="flex flex-col gap-4 shrink-0">
              {[
                { value: '70K+', label: 'Activities worldwide' },
                { value: '50K+', label: 'Happy explorers' },
                { value: '4.8★', label: 'App store rating' },
              ].map((s, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 text-white text-center">
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-sm text-white/80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
