import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { PRODUCTS } from '../constants';
import { Star, Heart, RefreshCw, Truck, Minus, Plus } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import SectionHeader from '../components/ui/SectionHeader';
import { cn } from '../utils/cn';

export default function ProductPage() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');

  const isWishlisted = isInWishlist(product.id);

  const images = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-20">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link to="/" className="hover:text-black">Account</Link>
        <span>/</span>
        <span className="hover:text-black">{product.category}</span>
        <span>/</span>
        <span className="text-black font-semibold">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
        {/* Images Selection */}
        <div className="flex flex-col md:flex-row gap-8 lg:w-[60%]">
          <div className="flex flex-row md:flex-col gap-4 order-2 md:order-1">
            {images.map((img, i) => (
              <div 
                key={i} 
                className="w-full h-[100px] md:w-[170px] md:h-[138px] bg-[#F5F5F5] rounded-[4px] p-4 flex items-center justify-center cursor-pointer hover:border border-brand-primary"
              >
                <img src={img} alt="" className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
          <div className="flex-1 bg-[#F5F5F5] rounded-[4px] p-8 md:p-12 flex items-center justify-center order-1 md:order-2">
            <img src={product.image} alt={product.name} className="max-h-[500px] w-full object-contain" />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold tracking-tight">{product.name}</h1>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "w-4 h-4", 
                      i < Math.floor(product.rating) ? "text-[#FFAD33] fill-[#FFAD33]" : "text-gray-300"
                    )} 
                  />
                ))}
                <span className="ml-2 text-gray-400">({product.reviews} Reviews)</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="text-[#00FF66] font-medium">In Stock</span>
            </div>

            <div className="text-2xl font-medium">${product.price}.00</div>
            
            <p className="text-sm leading-relaxed text-black border-b border-gray-300 pb-6 font-medium">
              {product.description || "High quality product built with premium materials to ensure durability and style. Perfect for daily Use and professional settings."}
            </p>
          </div>

          <div className="space-y-6 pt-2">
            {/* Colors Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="flex items-center gap-6">
                <span className="text-xl font-medium">Colours:</span>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button 
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      style={{ backgroundColor: color }}
                      className={cn(
                        "w-5 h-5 rounded-full border-2",
                        selectedColor === color ? "ring-2 ring-black ring-offset-2" : "border-transparent"
                      )}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="flex items-center gap-6">
                <span className="text-xl font-medium">Size:</span>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "w-8 h-8 md:w-10 md:h-10 border border-gray-300 rounded-[4px] font-medium text-sm transition-all",
                        selectedSize === size ? "bg-brand-primary text-white border-brand-primary" : "hover:border-black"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions: Quantity and Buttons */}
            <div className="flex flex-wrap gap-4 items-center pt-2">
              <div className="flex items-center border border-black rounded-[4px] overflow-hidden">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-black hover:text-white transition-colors border-r border-black"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <div className="w-16 text-center font-medium text-xl flex items-center justify-center">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 bg-brand-primary text-white hover:bg-opacity-90 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <button 
                onClick={() => addToCart(product, quantity)}
                className="bg-brand-primary text-white px-12 py-3 rounded-[4px] font-medium hover:bg-opacity-90 transition-all grow md:grow-0"
              >
                Buy Now
              </button>

              <button 
                onClick={() => toggleWishlist(product)}
                className={cn(
                  "p-2 border border-gray-400 rounded-[4px] transition-all",
                  isWishlisted ? "bg-brand-primary text-white border-brand-primary" : "hover:border-black"
                )}
              >
                <Heart className="w-6 h-6" fill={isWishlisted ? "currentColor" : "none"} />
              </button>
            </div>
          </div>

          {/* Delivery & Returns Info */}
          <div className="border border-gray-400 rounded-[4px] overflow-hidden">
            <div className="p-4 flex items-center gap-4 border-b border-gray-400">
              <Truck className="w-10 h-10" />
              <div className="space-y-1">
                <h4 className="font-semibold text-base">Free Delivery</h4>
                <p className="text-xs underline cursor-pointer font-medium">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="p-4 flex items-center gap-4">
              <RefreshCw className="w-10 h-10" />
              <div className="space-y-1">
                <h4 className="font-semibold text-base">Return Delivery</h4>
                <p className="text-xs font-medium">Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items Section */}
      <section className="space-y-10 pt-20">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-brand-primary rounded-[4px]"></div>
          <h2 className="text-xl font-semibold text-brand-primary">Related Item</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
