import React from 'react';
import { Heart, Eye, Star, ShoppingCart, Trash2 } from 'lucide-react';
import { Product } from '../../types';
import { cn } from '../../utils/cn';
import { useStore } from '../../store/useStore';
import { motion } from 'motion/react';

import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'wishlist' | 'recommendation';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'default' }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const isWishlisted = isInWishlist(product.id);

  const showRating = variant !== 'wishlist';
  const showColors = variant === 'default';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white"
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-[#F5F5F5] rounded-[4px] overflow-hidden flex items-center justify-center p-8 group/img">
        <Link to={`/product/${product.id}`} className="absolute inset-0 z-0">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-8"
          />
        </Link>
        
        {product.discount && (
          <div className="absolute top-3 left-3 bg-error text-white text-[10px] md:text-xs px-3 py-1 rounded-[4px]">
            -{product.discount}%
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-brand-primary text-white text-[10px] md:text-xs px-3 py-1 rounded-[4px]">
            NEW
          </div>
        )}

        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
          {variant === 'default' || variant === 'recommendation' ? (
            <>
              <button 
                onClick={() => toggleWishlist(product)}
                className={cn(
                  "p-2 bg-white rounded-full hover:bg-brand-primary hover:text-white transition-all shadow-sm",
                  isWishlisted && "bg-brand-primary text-white"
                )}
              >
                <Heart className="w-5 h-5 md:w-6 md:h-6" fill={isWishlisted ? "currentColor" : "none"} />
              </button>
              <Link to={`/product/${product.id}`} className="p-2 bg-white rounded-full hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                <Eye className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </>
          ) : (
            <button 
              onClick={() => toggleWishlist(product)}
              className="p-2 bg-white rounded-full hover:bg-brand-primary hover:text-white transition-all shadow-sm"
            >
              <Trash2 className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          )}
        </div>

        {/* Add to Cart Overlay */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center font-medium transition-transform transform translate-y-full group-hover/img:translate-y-0 flex justify-center items-center gap-2",
            variant === 'wishlist' ? "translate-y-0" : ""
          )}
        >
          <ShoppingCart className="w-4 h-4" /> Add To Cart
        </button>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-2">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-semibold text-base truncate hover:text-brand-primary transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-error font-medium">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through font-medium opacity-50">${product.originalPrice}</span>
          )}
        </div>
        
        {showRating && (
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "w-4 h-4", 
                    i < Math.floor(product.rating) ? "text-[#FFAD33] fill-[#FFAD33]" : "text-gray-300"
                  )} 
                />
              ))}
            </div>
            <span className="text-gray-400 text-sm font-semibold opacity-50">({product.reviews})</span>
          </div>
        )}

        {showColors && product.colors && (
          <div className="flex gap-2 pt-1">
            {product.colors.map((color) => (
              <div 
                key={color}
                className="w-5 h-5 rounded-full border-2 border-white ring-1 ring-gray-400 cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
