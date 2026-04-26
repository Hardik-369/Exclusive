import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { ChevronUp, ChevronDown, X } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, user } = useStore();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-6">
        <h2 className="text-3xl font-bold">Your cart is empty</h2>
        <p className="opacity-60">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="inline-block bg-brand-primary text-white px-12 py-4 rounded-md font-medium hover:bg-opacity-90 transition-all">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-20 flex gap-2 text-sm text-gray-400">
        <Link to="/" className="hover:text-black">Home</Link>
        <span>/</span>
        <span className="text-black">Cart</span>
      </div>

      {/* Cart Table Headers */}
      <div className="hidden md:grid grid-cols-4 bg-white shadow-[0_1px_13px_rgba(0,0,0,0.05)] p-6 mb-10 font-normal rounded-[4px] border border-transparent">
        <div className="pl-4">Product</div>
        <div className="text-center">Price</div>
        <div className="text-center">Quantity</div>
        <div className="text-right pr-4">Subtotal</div>
      </div>

      {/* Cart Items */}
      <div className="space-y-6 sm:space-y-10">
        {cart.map((item) => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 items-center bg-white shadow-[0_1px_13px_rgba(0,0,0,0.05)] p-6 rounded-[4px] relative group border border-transparent gap-6 md:gap-0">
            {/* Remove Button */}
            <button 
              onClick={() => removeFromCart(item.id)}
              className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-brand-primary text-white p-1 rounded-full z-10 transition-transform hover:scale-110"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            
            <div className="flex items-center gap-4 pl-4">
              <div className="w-14 h-14 flex items-center justify-center shrink-0">
                <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
              </div>
              <span className="text-base font-normal line-clamp-1">{item.name.replace('IPS ', '').replace('HAVIT HV-G92 ', 'H1 ')}</span>
            </div>
            <div className="text-center font-normal">
              <span className="md:hidden opacity-60 mr-2 text-sm">Price:</span>
              ${item.price}
            </div>
            <div className="flex justify-center flex-col items-center md:block">
              <div className="md:hidden opacity-60 mb-2 text-sm">Quantity:</div>
              <div className="relative w-20 h-11 border-[1.5px] border-gray-400 rounded-[4px] flex items-center px-3 mx-auto">
                <span className="text-base">{String(item.quantity).padStart(2, '0')}</span>
                <div className="absolute right-2 flex flex-col">
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="hover:text-black">
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  </button>
                  <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="hover:text-black">
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-right font-normal pr-4 flex justify-center md:block">
               <span className="md:hidden opacity-60 mr-2 text-sm">Subtotal:</span>
               <span className="md:block">${item.price * item.quantity}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">
        <Link to="/" className="border border-gray-400 px-12 py-4 rounded-[4px] font-medium hover:bg-black hover:text-white transition-all text-center">
          Return To Shop
        </Link>
        <button 
          className="border border-gray-400 px-12 py-4 rounded-[4px] font-medium hover:bg-black hover:text-white transition-all text-center"
        >
          Update Cart
        </button>
      </div>

      {/* Cart Summary Area */}
      <div className="mt-20 flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Coupon Code */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          <input 
            type="text" 
            placeholder="Coupon Code" 
            className="border border-black px-6 py-4 rounded-[4px] text-base w-full md:w-72 focus:ring-0 outline-none h-14"
          />
          <button className="bg-brand-primary text-white px-12 py-4 rounded-[4px] font-medium hover:bg-opacity-90 transition-all h-14 whitespace-nowrap w-full md:w-auto">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total Box */}
        <div className="w-full lg:w-[470px] border-[1.5px] border-black rounded-[4px] p-6 sm:p-8 space-y-6">
          <h3 className="text-xl font-medium">Cart Total</h3>
          <div className="space-y-4">
            <div className="flex justify-between pb-4 border-b border-gray-300">
              <span className="text-base font-normal">Subtotal:</span>
              <span className="text-base font-normal">${subtotal}</span>
            </div>
            <div className="flex justify-between pb-4 border-b border-gray-300">
              <span className="text-base font-normal">Shipping:</span>
              <span className="text-base font-normal">Free</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="text-base font-normal">Total:</span>
              <span className="text-base font-normal">${subtotal}</span>
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <Link 
              to="/checkout"
              className="bg-brand-primary text-white px-12 py-4 rounded-[4px] font-medium hover:bg-opacity-90 transition-all text-center w-full"
            >
              Procees to checkout
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

