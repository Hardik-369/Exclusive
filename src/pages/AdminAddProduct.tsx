import React, { useEffect, useRef } from 'react';
import { 
  Search,
  Bell,
  Upload, 
  Image as ImageIcon,
  X,
  Calendar,
  Save,
  Plus,
  Edit2,
  Wand2,
  RefreshCw,
  ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import gsap from 'gsap';

const AdminAddProduct = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.stagger-field', 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <AdminLayout>
      <div className="max-w-[1200px] mx-auto space-y-6 pb-12">
        {/* Topbar */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 stagger-field">
          <div className="flex items-center">
            <h1 className="text-[22px] font-bold text-gray-900 tracking-tight">Add Product</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search data, users, or reports" 
                className="w-full sm:w-[280px] bg-[#F8F9FB] border border-transparent rounded-full py-2.5 pl-10 pr-4 text-xs font-medium focus:ring-2 focus:ring-green-500/20 transition-all outline-none placeholder:text-gray-400"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors group shrink-0">
              <Bell className="w-5 h-5 group-hover:text-black" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
        </header>

        {/* Action Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 stagger-field">
          <h2 className="text-xl font-bold text-[#0D3B29]">Add New Product</h2>
          <div className="flex items-center gap-3 flex-wrap">
             <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search product for add" 
                  className="w-[200px] sm:w-[240px] pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-lg text-sm outline-none placeholder:text-gray-400 shadow-sm focus:border-gray-300" 
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
             </div>
             <button className="px-5 py-2.5 bg-[#47B486] text-white rounded-lg text-sm font-bold hover:bg-[#3d9c74] transition-colors shadow-sm">
               Publish Product
             </button>
             <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 flex items-center gap-2 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm">
               <Save className="w-4 h-4" /> Save to draft
             </button>
             <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm shrink-0">
                <Plus className="w-5 h-5 text-gray-500" />
             </button>
          </div>
        </div>

        <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Basic Details */}
            <section className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm stagger-field">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Basic Details</h3>
              <div className="space-y-5">
                 <div>
                   <label className="block text-[13px] font-bold text-gray-700 mb-2">Product Name</label>
                   <input type="text" defaultValue="iPhone 15" className="w-full px-4 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-medium text-gray-800 transition-all" />
                 </div>
                 <div>
                   <label className="block text-[13px] font-bold text-gray-700 mb-2">Product Description</label>
                   <div className="relative">
                     <textarea 
                       rows={4} 
                       defaultValue="The iPhone 15 delivers cutting-edge performance with the A16 Bionic chip, an immersive Super Retina XDR display, advanced dual-camera system, and exceptional battery life, all encased in stunning aerospace-grade aluminum." 
                       className="w-full px-4 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-medium text-gray-700 transition-all resize-none leading-relaxed"
                     ></textarea>
                     <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                       <button className="p-1.5 text-gray-400 hover:text-gray-600 bg-white rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-gray-100"><Edit2 className="w-4 h-4" /></button>
                       <button className="p-1.5 text-gray-400 hover:text-gray-600 bg-white rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-gray-100"><Wand2 className="w-4 h-4" /></button>
                     </div>
                   </div>
                 </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm stagger-field">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Pricing</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-2">Product Price</label>
                  <div className="relative">
                    <input type="text" defaultValue="$999.89" className="w-full pl-4 pr-24 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-bold text-gray-800 transition-all" />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-white border border-gray-200 px-2.5 py-1.5 rounded-md cursor-pointer shadow-sm">
                      <span className="text-base leading-none">🇺🇸</span>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">Discounted Price <span className="text-gray-400 font-medium">(Optional)</span></label>
                    <div className="flex items-center bg-[#F8F9FB] rounded-lg p-1 border border-transparent focus-within:border-gray-200 transition-all">
                      <div className="bg-[#EAF5EB] px-3.5 py-2 rounded-md flex items-center justify-center">
                        <span className="text-[#47B486] font-bold text-sm">$</span>
                      </div>
                      <input type="text" defaultValue="99" className="w-16 px-3 py-2 bg-transparent outline-none text-sm font-bold text-gray-800" />
                      <div className="flex-1 text-right pr-4">
                        <span className="text-xs font-bold text-gray-500">Sale= $900.89</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2">Tax Included</label>
                    <div className="flex items-center gap-6 mt-4">
                      <label className="flex items-center gap-2.5 cursor-pointer group">
                        <div className="w-4 h-4 rounded-full border-[4px] border-[#3B82F6] bg-white ring-2 ring-transparent group-hover:ring-[#3B82F6]/20 transition-all shadow-[0_0_0_1px_rgba(59,130,246,0.3)]"></div>
                        <span className="text-[13px] font-bold text-[#0D3B29]">Yes</span>
                      </label>
                      <label className="flex items-center gap-2.5 cursor-pointer group">
                        <div className="w-4 h-4 rounded-full border border-gray-300 bg-white group-hover:border-gray-400 transition-all"></div>
                        <span className="text-[13px] font-medium text-gray-500">No</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-2">Expiration</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <input type="text" placeholder="Start" className="w-full pl-4 pr-10 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-medium text-gray-600 transition-all" />
                      <Calendar className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                    <div className="relative">
                      <input type="text" placeholder="End" className="w-full pl-4 pr-10 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-medium text-gray-600 transition-all" />
                      <Calendar className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Inventory */}
            <section className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm stagger-field">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Inventory</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-2">Stock Quantity</label>
                  <input type="text" defaultValue="Unlimited" className="w-full px-4 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-medium text-gray-800 transition-all" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-2">Stock Status</label>
                  <div className="relative">
                    <select className="w-full pl-4 pr-10 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-bold text-gray-800 appearance-none transition-all cursor-pointer">
                      <option>In Stock</option>
                      <option>Out of Stock</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-5 mb-10">
                <label className="flex items-center gap-3 cursor-pointer group w-max">
                  <div className="w-10 h-5 bg-[#47B486] rounded-full relative transition-colors shadow-inner">
                    <div className="w-[14px] h-[14px] bg-white rounded-full absolute right-[3px] top-[3px] shadow-sm"></div>
                  </div>
                  <span className="text-[13px] font-medium text-gray-700 group-hover:text-gray-900">Unlimited</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group w-max">
                  <div className="w-[18px] h-[18px] rounded flex items-center justify-center bg-[#47B486] shadow-sm">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[13px] font-medium text-gray-500 group-hover:text-gray-700">Highlight this product in a featured section.</span>
                </label>
              </div>

              <div className="flex justify-end gap-4 pt-6 border-t border-gray-50">
                 <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 flex items-center gap-2 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm">
                   <Save className="w-4 h-4" /> Save to draft
                 </button>
                 <button className="px-5 py-2.5 bg-[#47B486] text-white rounded-lg text-sm font-bold hover:bg-[#3d9c74] transition-colors shadow-sm">
                   Publish Product
                 </button>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            
            {/* Upload Product Image */}
            <section className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm stagger-field">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Upload Product Image</h3>
              <p className="text-[13px] font-bold text-gray-700 mb-3">Product Image</p>
              
              <div className="bg-[#F8F9FB] rounded-xl border border-gray-100 p-6 flex flex-col items-center justify-center relative mb-5 h-[280px]">
                <img 
                  src="https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400&q=80" 
                  alt="iPhone 15" 
                  className="h-full w-full object-contain mix-blend-multiply pb-6" 
                />
                <div className="absolute bottom-4 left-4">
                  <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-bold text-gray-600 flex items-center gap-1.5 shadow-sm hover:bg-gray-50 transition-colors">
                    <ImageIcon className="w-3.5 h-3.5" /> Browse
                  </button>
                </div>
                <div className="absolute bottom-4 right-4">
                  <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-bold text-gray-600 flex items-center gap-1.5 shadow-sm hover:bg-gray-50 transition-colors">
                    <RefreshCw className="w-3.5 h-3.5" /> Replace
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="relative w-20 h-24 bg-white rounded-lg border border-gray-100 p-2 shrink-0 flex items-center justify-center shadow-sm">
                   <img src="https://images.unsplash.com/photo-1696446701796-da61225697cc?w=100&q=80" alt="Front" className="h-full object-contain mix-blend-multiply" />
                   <button className="absolute -top-2 -right-2 w-5 h-5 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-red-500 transition-colors">
                     <X className="w-3 h-3" />
                   </button>
                 </div>
                 <div className="relative w-20 h-24 bg-white rounded-lg border border-gray-100 p-2 shrink-0 flex items-center justify-center shadow-sm">
                   <img src="https://images.unsplash.com/photo-1696446702756-788fa7bdf756?w=100&q=80" alt="Back" className="h-full object-contain mix-blend-multiply" />
                   <button className="absolute -top-2 -right-2 w-5 h-5 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-red-500 transition-colors">
                     <X className="w-3 h-3" />
                   </button>
                 </div>
                 <div className="flex-1 h-24 rounded-lg border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 cursor-pointer transition-colors group">
                   <div className="w-6 h-6 bg-[#EAF5EB] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                     <Plus className="w-3.5 h-3.5 text-[#47B486]" />
                   </div>
                   <span className="text-[11px] font-bold text-[#47B486]">Add Image</span>
                 </div>
              </div>
            </section>

            {/* Categories */}
            <section className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm stagger-field">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Categories</h3>
              
              <div className="space-y-5 mb-8">
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-2">Product Categories</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg outline-none text-sm font-medium text-gray-600 appearance-none shadow-sm focus:border-gray-300 transition-all cursor-pointer">
                      <option>Select your product</option>
                      <option>Smartphones</option>
                      <option>Accessories</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-2">Product Tag</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg outline-none text-sm font-medium text-gray-600 appearance-none shadow-sm focus:border-gray-300 transition-all cursor-pointer">
                      <option>Select your product</option>
                      <option>Apple</option>
                      <option>Electronics</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-3">Select your color</label>
                <div className="flex gap-3">
                   <div className="w-10 h-10 rounded-lg bg-[#DDE9D5] cursor-pointer hover:scale-105 transition-transform shadow-[0_2px_4px_rgba(0,0,0,0.05)]"></div>
                   <div className="w-10 h-10 rounded-lg bg-[#EBD2D6] cursor-pointer hover:scale-105 transition-transform shadow-[0_2px_4px_rgba(0,0,0,0.05)]"></div>
                   <div className="w-10 h-10 rounded-lg bg-[#D2DAE2] cursor-pointer hover:scale-105 transition-transform shadow-[0_2px_4px_rgba(0,0,0,0.05)]"></div>
                   <div className="w-10 h-10 rounded-lg bg-[#EAE3CC] cursor-pointer hover:scale-105 transition-transform shadow-[0_2px_4px_rgba(0,0,0,0.05)]"></div>
                   <div className="w-10 h-10 rounded-lg bg-[#42444B] cursor-pointer hover:scale-105 transition-transform shadow-[0_2px_4px_rgba(0,0,0,0.05)]"></div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAddProduct;
