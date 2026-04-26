import React, { useEffect, useRef } from 'react';
import { 
  PlusCircle, 
  Upload, 
  Image as ImageIcon,
  ChevronLeft,
  Search,
  Bell
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import gsap from 'gsap';

const AdminAddProduct = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from('.stagger-field', {
      opacity: 0,
      x: -20,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    });
  }, []);

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 stagger-field">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="p-2.5 bg-white border border-gray-100 rounded-full shadow-sm hover:bg-gray-50 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Add New Product</h1>
              <p className="text-sm text-gray-400 font-medium">Create a new product listing in your shop.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button className="px-6 py-3 bg-white border border-gray-100 rounded-2xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-all">
               Draft
             </button>
             <button className="px-6 py-3 bg-brand-primary text-white rounded-2xl text-sm font-bold shadow-xl shadow-green-100 hover:scale-[1.02] transition-all">
               Publish Product
             </button>
          </div>
        </header>

        <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm stagger-field">
              <h3 className="text-lg font-bold text-gray-900 mb-6">General Information</h3>
              <div className="space-y-6">
                 <div>
                   <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Product Name</label>
                   <input type="text" placeholder="e.g. Wireless Headphones" className="w-full px-5 py-3.5 bg-[#F8F9FB] rounded-2xl outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all border-none font-bold" />
                 </div>
                 <div>
                   <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Description</label>
                   <textarea rows={6} placeholder="Describe your product in detail..." className="w-full px-5 py-3.5 bg-[#F8F9FB] rounded-2xl outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all border-none font-bold resize-none"></textarea>
                 </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm stagger-field">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Pricing & Inventory</h3>
              <div className="grid grid-cols-2 gap-6">
                 <div>
                   <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Base Price</label>
                   <div className="relative">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                      <input type="number" placeholder="0.00" className="w-full pl-10 pr-5 py-3.5 bg-[#F8F9FB] rounded-2xl outline-none border-none font-bold" />
                   </div>
                 </div>
                 <div>
                   <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Stock Quantity</label>
                   <input type="number" placeholder="0" className="w-full px-5 py-3.5 bg-[#F8F9FB] rounded-2xl outline-none border-none font-bold" />
                 </div>
              </div>
            </section>
          </div>

          {/* Media & Category */}
          <div className="space-y-8">
            <section className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm stagger-field">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Product Media</h3>
              <div className="aspect-square bg-[#F8F9FB] rounded-[24px] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 group cursor-pointer hover:bg-gray-50 transition-all">
                 <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="w-6 h-6 text-brand-primary" />
                 </div>
                 <p className="text-sm font-bold text-gray-900">Upload Image</p>
                 <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-tight">Format: JPG, PNG, WEBP (Max 5MB)</p>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="aspect-square rounded-xl bg-[#F8F9FB] flex items-center justify-center border border-gray-100 text-gray-200">
                     <ImageIcon className="w-5 h-5" />
                   </div>
                 ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm stagger-field">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Category</h3>
              <select className="w-full px-5 py-3.5 bg-[#F8F9FB] rounded-2xl outline-none border-none font-bold appearance-none">
                 <option>Electronics</option>
                 <option>Fashion</option>
                 <option>Home & Lifestyle</option>
                 <option>Sports</option>
              </select>
            </section>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAddProduct;
