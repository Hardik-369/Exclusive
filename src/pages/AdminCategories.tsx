import React, { useState, useEffect, useRef } from 'react';
import { 
  Search,
  Bell,
  MoreVertical,
  ChevronRight,
  Filter,
  PlusCircle,
  Edit2,
  Trash2,
  ChevronLeft,
  LayoutGrid,
  Plus
} from 'lucide-react';
import { cn } from '../utils/cn';
import AdminLayout from '../layouts/AdminLayout';
import gsap from 'gsap';

const categories = [
  { id: 1, name: 'Electronics', images: ['https://images.unsplash.com/photo-1498049794561-7780e7231661?w=60&q=80', 'https://images.unsplash.com/photo-1526733158133-583329a493b3?w=60&q=80', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=60&q=80', 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=60&q=80'] },
  { id: 2, name: 'Fashion', images: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=60&q=80', 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=60&q=80', 'https://images.unsplash.com/photo-1539109132314-34759616b40c?w=60&q=80', 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=60&q=80'] },
  { id: 3, name: 'Electronics', images: ['https://images.unsplash.com/photo-1583394838336-acd977736f90?w=60&q=80', 'https://images.unsplash.com/photo-1544244015-0cd4b3ff6f70?w=60&q=80', 'https://images.unsplash.com/photo-1461151304267-38535e770f75?w=60&q=80', 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=60&q=80'] },
  { id: 4, name: 'Home & Lifestyle', images: ['https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=60&q=80', 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=60&q=80', 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=60&q=80', 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=60&q=80'] },
  { id: 5, name: 'Sports & Outdoors', images: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?w=60&q=80', 'https://images.unsplash.com/photo-1551854838-212c50b4c184?w=60&q=80', 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=60&q=80', 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=60&q=80'] },
  { id: 6, name: 'Baby’s & Toys', images: ['https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=60&q=80', 'https://images.unsplash.com/photo-1535572290543-960a8046f5af?w=60&q=80', 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=60&q=80', 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=60&q=80'] },
  { id: 7, name: 'Health & Fitness', images: ['https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=60&q=80', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=60&q=80', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=60&q=80', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&q=80'] },
  { id: 8, name: 'Books', images: ['https://images.unsplash.com/photo-1512820790803-83ca734da794?w=60&q=80', 'https://images.unsplash.com/photo-1524578271613-d550eebad4b3?w=60&q=80', 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=60&q=80', 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=60&q=80'] },
];

const productsData = [
  { id: 1, no: 1, name: 'Wireless Bluetooth Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80', date: '01-01-2025', orders: 25 },
  { id: 2, no: 1, name: 'Men\'s T-Shirt', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=100&q=80', date: '01-01-2025', orders: 20 },
  { id: 3, no: 1, name: 'Men\'s Leather Wallet', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=100&q=80', date: '01-01-2025', orders: 35 },
  { id: 4, no: 1, name: 'Memory Foam Pillow', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=100&q=80', date: '01-01-2025', orders: 40 },
  { id: 5, no: 1, name: 'Coffee Maker', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=100&q=80', date: '01-01-2025', orders: 45 },
  { id: 6, no: 1, name: 'Casual Baseball Cap', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=100&q=80', date: '01-01-2025', orders: 55 },
  { id: 7, no: 1, name: 'Full HD Webcam', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&q=80', date: '01-01-2025', orders: 20 },
  { id: 8, no: 1, name: 'Smart LED Color Bulb', image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=100&q=80', date: '01-01-2025', orders: 16 },
  { id: 9, no: 1, name: 'Men\'s T-Shirt', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=100&q=80', date: '01-01-2025', orders: 10 },
  { id: 10, no: 1, name: 'Men\'s Leather Wallet', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=100&q=80', date: '01-01-2025', orders: 35 },
];

const AdminCategories = () => {
  const [activeTab, setActiveTab] = useState('All Product (145)');
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stagger-fade', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      });
      
      gsap.from('.stagger-card', {
        scale: 0.95,
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <AdminLayout>
      <div ref={containerRef} className="space-y-8 animate-in fade-in duration-700">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 stagger-fade">
          <h1 className="text-2xl font-bold text-gray-800">Categories</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search data, users, or reports" 
                className="w-full sm:w-80 md:w-96 bg-[#F8F9FB] border-none rounded-full py-2.5 pl-5 pr-11 text-sm font-medium focus:ring-1 focus:ring-gray-200 outline-none placeholder:text-gray-400"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <button className="relative p-2.5 bg-white transition-all hover:bg-gray-50 rounded-full group">
              <Bell className="w-5 h-5 text-gray-400 group-hover:text-black" />
            </button>
          </div>
        </header>

        {/* Discover Section */}
        <section className="space-y-6 stagger-fade">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Discover</h2>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#4CAF50] text-white rounded-lg text-sm font-semibold shadow-sm hover:bg-[#43a047] transition-all">
                <PlusCircle className="w-4 h-4" />
                Add Product
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all">
                More Action
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="relative group/scroll">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, i) => (
                <div key={i} className="stagger-card flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group/card cursor-pointer">
                  <div className="grid grid-cols-2 gap-1.5 w-[70px] h-[70px] shrink-0 border border-gray-100 p-1.5 rounded-lg bg-[#F8F9FB]">
                     {cat.images.slice(0, 4).map((img, i) => (
                       <div key={i} className="aspect-square rounded-sm overflow-hidden flex items-center justify-center">
                         <img src={img} className="w-full h-full object-contain mix-blend-multiply" />
                       </div>
                     ))}
                  </div>
                  <p className="font-bold text-gray-700 text-sm">{cat.name}</p>
                </div>
              ))}
            </div>
            {/* Horizontal scroll button simulated as in screenshot */}
            <button className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center opacity-0 group-hover/scroll:opacity-100 transition-all z-10 hover:bg-gray-50">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </section>

        {/* Product Table Section */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden stagger-fade">
          <div className="p-6 flex flex-col xl:flex-row xl:items-center justify-between gap-6 border-b border-gray-50">
            <div className="flex items-center gap-0.5 p-1 bg-[#F8F9FB] rounded-xl overflow-x-auto no-scrollbar">
              {['All Product (145)', 'Featured Products', 'On Sale', 'Out of Stock'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "whitespace-nowrap px-5 py-2 text-xs font-bold rounded-lg transition-all",
                    activeTab === tab ? "bg-white text-gray-800 shadow-sm" : "text-gray-400 hover:text-gray-600"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[200px]">
                <input 
                  type="text" 
                  placeholder="Search your product" 
                  className="w-full pl-4 pr-10 py-2.5 bg-[#F8F9FB] rounded-lg text-xs font-semibold outline-none border-none focus:ring-1 focus:ring-gray-200"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              </div>
              <button className="p-2.5 border border-gray-100 rounded-lg hover:bg-gray-50 text-gray-400"><Filter className="w-4 h-4" /></button>
              <button className="p-2.5 border border-gray-100 rounded-lg hover:bg-gray-50 text-gray-400"><Plus className="w-4 h-4" /></button>
              <button className="p-2.5 border border-gray-100 rounded-lg hover:bg-gray-50 text-gray-400"><MoreVertical className="w-4 h-4" /></button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[900px]">
              <thead className="bg-[#fafffb] border-b border-gray-100">
                <tr className="text-[11px] font-bold text-[#6B8E6B] uppercase tracking-wider">
                  <th className="px-8 py-5">No.</th>
                  <th className="px-8 py-5">Product</th>
                  <th className="px-8 py-5">Created Date</th>
                  <th className="px-8 py-5">Order</th>
                  <th className="px-8 py-5 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50/80">
                {productsData.map((prod, idx) => (
                  <tr key={idx} className="hover:bg-[#fcfdfc] transition-all group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-200 accent-[#4CAF50] transition-all cursor-pointer" />
                        <span className="text-sm font-medium text-gray-400">{prod.no}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1 border border-gray-50 shrink-0 shadow-sm">
                          <img src={prod.image} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">{prod.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-sm font-medium text-gray-500">{prod.date}</td>
                    <td className="px-8 py-5 text-sm font-medium text-gray-800">{prod.orders}</td>
                    <td className="px-8 py-5">
                      <div className="flex items-center justify-center gap-4">
                        <button className="text-gray-300 hover:text-gray-700 transition-all transform hover:scale-110"><Edit2 className="w-4 h-4" /></button>
                        <button className="text-gray-300 hover:text-red-400 transition-all transform hover:scale-110"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-6 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
            <button className="flex items-center gap-2 px-5 py-2 border border-gray-100 rounded-lg text-sm font-bold hover:bg-gray-50 transition-all group">
               <ChevronLeft className="w-4 h-4 text-gray-400" />
               Previous
            </button>

            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2">
               {[1, 2, 3, 4, 5, '...', 24].map((p, i) => (
                 <button 
                  key={i}
                  className={cn(
                    "min-w-[40px] h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-all",
                    p === 1 ? "bg-brand-primary text-white" : "text-gray-400 hover:bg-gray-50"
                  )}
                 >
                   {p}
                 </button>
               ))}
            </div>

            <button className="flex items-center gap-2 px-5 py-2 border border-gray-100 rounded-lg text-sm font-bold hover:bg-gray-50 transition-all group">
               Next
               <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default AdminCategories;
