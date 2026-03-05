import { useState, useEffect, useRef } from 'react';
import { cn } from '../utils/cn';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'register'>('signin');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { user, signOut } = useAuth();

  // Close user dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const [showSearch, setShowSearch] = useState(false);

  // Show navbar search after hero scrolls out of view
  useEffect(() => {
    const onScroll = () => setShowSearch(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openSignIn = () => { setAuthMode('signin'); setAuthOpen(true); setIsOpen(false); };
  const openRegister = () => { setAuthMode('register'); setAuthOpen(true); setIsOpen(false); };

  // User initials for avatar
  const initials = user?.email ? user.email[0].toUpperCase() : '?';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <span className="text-lg font-bold text-gray-900 hidden sm:block">Discovery<span className="text-amber-500">Side</span></span>
          </a>

          {/* Search bar — visible only after hero search scrolls away */}
          <div className={cn(
            'flex-1 max-w-2xl hidden md:flex items-center transition-all duration-300',
            showSearch ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}>
            <div className="flex w-full items-center border border-gray-300 rounded-full overflow-hidden focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-100 transition-all bg-gray-50">
              <svg className="w-5 h-5 text-gray-400 ml-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Places, activities, experiences…"
                className="flex-1 px-4 py-2.5 bg-transparent text-gray-800 placeholder-gray-400 text-sm focus:outline-none"
              />
              <button className="m-1 px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-sm font-semibold rounded-full transition-all">
                Search
              </button>
            </div>
          </div>

          {/* Right actions */}
          <div className="ml-auto flex items-center gap-1">
            <a href="#" className="hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
              List your activity
            </a>

            {user ? (
              /* Logged-in: avatar + dropdown */
              <div className="relative hidden md:block" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white font-bold text-sm flex items-center justify-center hover:ring-2 hover:ring-amber-300 transition-all"
                >
                  {initials}
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs text-gray-400">Signed in as</p>
                      <p className="text-sm font-medium text-gray-800 truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={async () => { setUserMenuOpen(false); await signOut(); }}
                      className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Guest: sign in + register buttons */
              <>
                <button
                  onClick={openSignIn}
                  className="hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                >
                  Sign in
                </button>
                <button
                  onClick={openRegister}
                  className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full transition-all hidden md:block"
                >
                  Register
                </button>
              </>
            )}

            {/* Wishlist */}
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            {/* Mobile menu toggle */}
            <button className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={cn('md:hidden overflow-hidden transition-all duration-300', isOpen ? 'max-h-80 pb-4' : 'max-h-0')}>
          {showSearch && (
          <div className="flex items-center border border-gray-300 rounded-full overflow-hidden mb-4 bg-gray-50">
            <svg className="w-5 h-5 text-gray-400 ml-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0" />
            </svg>
            <input
              type="text"
              placeholder="Places, activities, experiences…"
              className="flex-1 px-4 py-2.5 bg-transparent text-gray-800 placeholder-gray-400 text-sm focus:outline-none"
            />
          </div>
          )}
          <div className="flex flex-col gap-1">
            {['Destinations', 'Experiences', 'Attractions', 'Community'].map((item, i) => (
              <a key={i} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="px-3 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-medium">{item}</a>
            ))}
            {user ? (
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-50">
                <span className="text-sm text-gray-700 truncate">{user.email}</span>
                <button onClick={async () => { setIsOpen(false); await signOut(); }} className="text-sm text-red-500 font-medium ml-2">Sign out</button>
              </div>
            ) : (
              <div className="flex gap-2 pt-2">
                <button onClick={openSignIn} className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50">Sign in</button>
                <button onClick={openRegister} className="flex-1 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-semibold">Register</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <AuthModal isOpen={authOpen} initialMode={authMode} onClose={() => setAuthOpen(false)} />
    </nav>
  );
}
