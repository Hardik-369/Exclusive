import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { cn } from '../utils/cn';

const Navbar: React.FC = () => {
  const cartCount = useStore((state) => state.cart.length);
  const wishlistCount = useStore((state) => state.wishlist.length);
  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-black tracking-tight shrink-0">
            Exclusive
          </Link>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => `text-base font-medium transition-colors hover:text-brand-primary ${isActive ? 'border-b-2 border-brand-primary' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `text-base font-medium transition-colors hover:text-brand-primary ${isActive ? 'border-b-2 border-brand-primary' : ''}`}>
              Contact
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `text-base font-medium transition-colors hover:text-brand-primary ${isActive ? 'border-b-2 border-brand-primary' : ''}`}>
              About
            </NavLink>
            {!user && (
              <NavLink to="/auth" className={({ isActive }) => `text-base font-medium transition-colors hover:text-brand-primary ${isActive ? 'border-b-2 border-brand-primary' : ''}`}>
                Sign Up
              </NavLink>
            )}
          </div>

          {/* Search and Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden sm:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-48 lg:w-64">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none"
              />
              <Search className="w-5 h-5 text-gray-500" />
            </div>
            
            {user && (
              <>
                <Link to="/wishlist" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                  {wishlistCount > 0 && (
                    <span className="absolute top-0 right-0 bg-error text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </Link>

                <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-error text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </>
            )}

            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className={cn(
                    "p-2 rounded-full transition-colors flex items-center justify-center",
                    showUserMenu ? "bg-error text-white shadow-lg shadow-error/20" : "bg-error text-white hover:bg-opacity-90"
                  )}
                >
                  <User className="w-5 h-5" />
                </button>

                {showUserMenu && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setShowUserMenu(false)}
                    />
                    <div className="absolute right-0 mt-2 w-56 bg-black rounded-md shadow-2xl py-4 z-50 text-white border border-white/10">
                      <div className="px-4 space-y-4">
                        {user.role === 'admin' && (
                          <Link to="/admin" onClick={() => setShowUserMenu(false)} className="flex items-center gap-3 hover:text-brand-primary transition-colors group">
                            <div className="w-5 h-5 flex items-center justify-center border border-white rounded-full text-[10px] group-hover:scale-110 transition-transform">⚙️</div>
                            <span className="text-sm">Admin Dashboard</span>
                          </Link>
                        )}
                        <Link to="/profile" onClick={() => setShowUserMenu(false)} className="flex items-center gap-3 hover:text-brand-primary transition-colors group">
                          <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          <span className="text-sm">Manage My Account</span>
                        </Link>
                        <Link to="/orders" onClick={() => setShowUserMenu(false)} className="flex items-center gap-3 hover:text-brand-primary transition-colors group">
                          <div className="w-5 h-5 flex items-center justify-center border border-white rounded-full text-[10px] group-hover:scale-110 transition-transform">📦</div>
                          <span className="text-sm">My Order</span>
                        </Link>
                        <button 
                          onClick={() => {
                            logout();
                            setShowUserMenu(false);
                          }}
                          className="flex items-center gap-3 w-full hover:text-brand-primary transition-colors group text-left"
                        >
                          <div className="w-5 h-5 flex items-center justify-center border border-white rounded-full text-[10px] group-hover:scale-110 transition-transform">↩</div>
                          <span className="text-sm">Logout</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link to="/auth" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            )}

            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden border-t border-gray-100 bg-white absolute top-full left-0 w-full shadow-lg z-50">
          <div className="px-4 py-6 space-y-4">
            <NavLink to="/" onClick={() => setShowMobileMenu(false)} className="block text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Home</NavLink>
            <NavLink to="/contact" onClick={() => setShowMobileMenu(false)} className="block text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Contact</NavLink>
            <NavLink to="/about" onClick={() => setShowMobileMenu(false)} className="block text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">About</NavLink>
            {!user && (
              <NavLink to="/auth" onClick={() => setShowMobileMenu(false)} className="block text-lg font-medium p-2 hover:bg-gray-50 rounded-lg">Sign Up</NavLink>
            )}
            <div className="sm:hidden pt-4 border-t border-gray-100">
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-3">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none"
                />
                <Search className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};


export default Navbar;
