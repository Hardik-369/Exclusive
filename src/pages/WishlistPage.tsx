import React from 'react';
import { useStore } from '../store/useStore';
import ProductCard from '../components/ui/ProductCard';
import { PRODUCTS } from '../constants';
import { Link, Navigate } from 'react-router-dom';

export default function WishlistPage() {
  const { wishlist, moveAllToCart, user } = useStore();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const handleMoveAllToCart = () => {
    moveAllToCart();
  };

  // Recommendations subset matching the image
  const recommendations = [
    PRODUCTS.find(p => p.id === '11')!, // ASUS FHD Gaming Laptop
    PRODUCTS.find(p => p.id === '3')!,  // IPS LCD Gaming Monitor
    PRODUCTS.find(p => p.id === '1')!,  // HAVIT HV-G92 Gamepad
    PRODUCTS.find(p => p.id === '2')!,  // AK-900 Wired Keyboard
  ].filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-20">
      {/* Wishlist Header */}
      <div className="space-y-16">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-normal">Wishlist ({wishlist.length})</h2>
          <button 
            onClick={handleMoveAllToCart}
            className="border border-gray-300 px-12 py-4 rounded-md font-medium hover:bg-black hover:text-white transition-all"
          >
            Move All To Bag
          </button>
        </div>

        {/* Wishlist Items */}
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} variant="wishlist" />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-lg">
            <p className="opacity-60 mb-6">Your wishlist is empty.</p>
            <Link to="/" className="inline-block bg-brand-primary text-white px-8 py-3 rounded-md">
              Go Shopping
            </Link>
          </div>
        )}
      </div>

      {/* Recommendations */}
      <div className="space-y-10 pt-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-brand-primary rounded-sm" />
            <h2 className="text-xl font-normal">Just For You</h2>
          </div>
          <button className="border border-gray-300 px-12 py-4 rounded-sm font-medium hover:bg-black hover:text-white transition-all">
            See All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendations.map((product) => (
            <ProductCard key={product.id} product={product} variant="recommendation" />
          ))}
        </div>
      </div>
    </div>
  );
}
