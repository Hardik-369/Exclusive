import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { Link, Navigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  const { cart, user } = useStore();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: '',
    saveInfo: true
  });

  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'cod'>('cod');

  const InputField = ({ label, name, required = false, type = "text" }: { label: string, name: string, required?: boolean, type?: string }) => (
    <div className="space-y-2">
      <label className="text-gray-400 font-normal">
        {label}{required && <span className="text-error">*</span>}
      </label>
      <input 
        type={type}
        name={name}
        className="w-full bg-[#F5F5F5] h-12 px-4 rounded-[4px] outline-none focus:ring-1 focus:ring-brand-primary transition-all"
        onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
      />
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Breadcrumbs */}
      <div className="mb-20 flex gap-2 text-sm text-gray-400">
        <Link to="/profile" className="hover:text-black">Account</Link>
        <span>/</span>
        <Link to="/profile" className="hover:text-black">My Account</Link>
        <span>/</span>
        <Link to="/product" className="hover:text-black">Product</Link>
        <span>/</span>
        <Link to="/cart" className="hover:text-black">View Cart</Link>
        <span>/</span>
        <span className="text-black">CheckOut</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-medium mb-12">Billing Details</h1>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Form Section */}
        <div className="flex-1 space-y-6 sm:space-y-8">
          <InputField label="First Name" name="firstName" required />
          <InputField label="Company Name" name="companyName" />
          <InputField label="Street Address" name="streetAddress" required />
          <InputField label="Apartment, floor, etc. (optional)" name="apartment" />
          <InputField label="Town/City" name="townCity" required />
          <InputField label="Phone Number" name="phoneNumber" required type="tel" />
          <InputField label="Email Address" name="emailAddress" required type="email" />

          <div className="flex items-start gap-3 pt-2">
            <input 
              type="checkbox" 
              id="saveInfo" 
              checked={formData.saveInfo}
              onChange={(e) => setFormData({ ...formData, saveInfo: e.target.checked })}
              className="w-5 h-5 accent-brand-primary cursor-pointer shrink-0 mt-1"
            />
            <label htmlFor="saveInfo" className="cursor-pointer font-normal text-sm sm:text-base">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="w-full lg:w-[450px] xl:w-[500px] space-y-8 pt-8">
          {/* Cart Items List */}
          <div className="space-y-6 sm:space-y-8">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-50 rounded-sm shrink-0">
                    <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <span className="text-sm sm:text-base truncate">{item.name}</span>
                </div>
                <span className="text-sm sm:text-base font-normal shrink-0">${item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          {/* Calculations */}
          <div className="space-y-4 border-b border-gray-300 pb-4">
            <div className="flex justify-between">
              <span className="text-sm sm:text-base">Subtotal:</span>
              <span className="text-sm sm:text-base">${subtotal}</span>
            </div>
            <div className="flex justify-between border-t border-gray-300 pt-4 pb-2">
              <span className="text-sm sm:text-base">Shipping:</span>
              <span className="text-sm sm:text-base">Free</span>
            </div>
          </div>
          <div className="flex justify-between text-base font-normal">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>

          {/* Payment Methods */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div 
                  className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${paymentMethod === 'bank' ? 'border-black' : 'border-gray-400'}`}
                  onClick={() => setPaymentMethod('bank')}
                >
                  {paymentMethod === 'bank' && <div className="w-3 h-3 bg-black rounded-full" />}
                </div>
                <span className="cursor-pointer text-sm sm:text-base" onClick={() => setPaymentMethod('bank')}>Bank</span>
              </div>
              <div className="flex gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="bkash" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="visa" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="mastercard" className="h-4" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div 
                className={`w-6 h-6 rounded-full border-2 cursor-pointer flex items-center justify-center ${paymentMethod === 'cod' ? 'border-black' : 'border-gray-400'}`}
                onClick={() => setPaymentMethod('cod')}
              >
                {paymentMethod === 'cod' && <div className="w-3 h-3 bg-black rounded-full" />}
              </div>
              <span className="cursor-pointer text-sm sm:text-base" onClick={() => setPaymentMethod('cod')}>Cash on delivery</span>
            </div>
          </div>

          {/* Coupon */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              placeholder="Coupon Code" 
              className="border border-black px-6 py-4 rounded-[4px] text-base w-full focus:ring-0 outline-none h-14"
            />
            <button className="bg-brand-primary text-white px-8 py-4 rounded-[4px] font-medium hover:bg-opacity-90 transition-all h-14 whitespace-nowrap shrink-0">
              Apply Coupon
            </button>
          </div>

          <button className="bg-brand-primary text-white px-12 py-4 rounded-[4px] font-medium hover:bg-opacity-90 transition-all w-full">
            Place Order
          </button>
        </div>
      </div>

    </div>
  );
};

export default CheckoutPage;
