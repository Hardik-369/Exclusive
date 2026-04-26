import React, { useEffect } from 'react';
import { 
  Search,
  Bell,
  Edit,
  Share2,
  Copy,
  Plus,
  EyeOff,
  Calendar,
  Edit2,
  Wand2,
  ChevronDown
} from 'lucide-react';
import AdminLayout from '../layouts/AdminLayout';
import gsap from 'gsap';

const AdminRole = () => {
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
            <h1 className="text-[22px] font-bold text-[#0D3B29] tracking-tight">Admin role</h1>
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
          <h2 className="text-xl font-bold text-[#0D3B29]">About section</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            
            {/* Profile Card */}
            <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm stagger-field relative">
              <div className="absolute top-5 right-5 flex items-center gap-3">
                 <button className="text-gray-400 hover:text-gray-600 transition-colors"><Edit className="w-4 h-4" /></button>
                 <button className="text-gray-400 hover:text-gray-600 transition-colors"><Share2 className="w-4 h-4" /></button>
              </div>
              
              <div className="flex flex-col items-center mt-4 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-[3px] border-white shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80" alt="Wade Warren" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Wade Warren</h3>
                <div className="flex items-center gap-2">
                   <p className="text-[13px] font-medium text-gray-400">wade.warren@example.com</p>
                   <button className="text-blue-500 hover:text-blue-600 transition-colors"><Copy className="w-3.5 h-3.5" /></button>
                </div>
              </div>

              <div className="flex flex-col items-center border-t border-gray-50 pt-6">
                <p className="text-[11px] font-bold text-gray-400 mb-4">Linked with Social media</p>
                <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
                   <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                     {/* Google Logo SVG */}
                     <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                     <span className="text-[10px] font-bold text-blue-500 italic">Linked</span>
                   </button>
                   <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                     {/* Facebook Logo SVG */}
                     <svg className="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                     <span className="text-[10px] font-bold text-blue-500 italic">Linked</span>
                   </button>
                   <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                     {/* X Logo SVG */}
                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                     <span className="text-[10px] font-bold text-blue-500 italic">Linked</span>
                   </button>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                   <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center">
                      <Plus className="w-3 h-3 text-gray-500" />
                   </div>
                   <span className="text-xs font-bold text-gray-600">Social media</span>
                </button>
              </div>
            </section>

            {/* Change Password */}
            <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm stagger-field">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[15px] font-bold text-gray-900">Change Password</h3>
                <a href="#" className="text-xs font-medium text-blue-500 hover:text-blue-600 flex items-center gap-1">Need help <span className="w-3.5 h-3.5 rounded-full border border-blue-500 flex items-center justify-center text-[10px]">?</span></a>
              </div>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-[13px] font-medium text-[#0D3B29] mb-2">Current Password</label>
                  <div className="relative">
                    <input type="password" placeholder="Enter password" className="w-full px-4 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-medium text-gray-800 transition-all placeholder:font-normal" />
                    <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                  <a href="#" className="inline-block mt-2 text-[11px] font-medium text-blue-500 hover:text-blue-600">Forgot Current Password? Click here</a>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#0D3B29] mb-2">New Password</label>
                  <div className="relative">
                    <input type="password" placeholder="Enter password" className="w-full px-4 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-medium text-gray-800 transition-all placeholder:font-normal" />
                    <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#0D3B29] mb-2">Re-enter Password</label>
                  <div className="relative">
                    <input type="password" placeholder="Enter password" className="w-full px-4 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-medium text-gray-800 transition-all placeholder:font-normal" />
                    <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </div>
                
                <button className="w-full mt-2 py-3.5 bg-[#47B486] text-white rounded-lg text-sm font-bold hover:bg-[#3d9c74] transition-colors shadow-sm">
                   Save Change
                </button>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 xl:col-span-8">
             {/* Profile Update */}
             <section className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm stagger-field h-full">
               <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                 <div>
                   <h3 className="text-lg font-bold text-gray-900 mb-6">Profile Update</h3>
                   <div className="flex items-center gap-4">
                     <div className="w-14 h-14 rounded-full overflow-hidden border-[2px] border-white shadow-sm">
                       <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="Wade Warren" className="w-full h-full object-cover" />
                     </div>
                     <div className="flex items-center gap-3">
                       <button className="px-4 py-2 bg-[#47B486] text-white rounded-lg text-xs font-bold hover:bg-[#3d9c74] transition-colors shadow-sm">
                         Upload New
                       </button>
                       <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors shadow-sm">
                         Delete
                       </button>
                     </div>
                   </div>
                 </div>
                 <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2">
                   <Edit className="w-3.5 h-3.5" /> Edit
                 </button>
               </div>

               <div className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-[13px] font-medium text-[#0D3B29] mb-2">First Name</label>
                     <input type="text" defaultValue="Wade" className="w-full px-4 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-bold text-gray-800 transition-all" />
                   </div>
                   <div>
                     <label className="block text-[13px] font-medium text-[#0D3B29] mb-2">Last Name</label>
                     <input type="text" defaultValue="Warren" className="w-full px-4 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-bold text-gray-800 transition-all" />
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-[13px] font-medium text-[#0D3B29] mb-2">Password</label>
                     <div className="relative">
                       <input type="password" defaultValue="1234567890" className="w-full px-4 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-bold text-gray-800 transition-all" />
                       <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                     </div>
                   </div>
                   <div>
                     <label className="block text-[13px] font-medium text-[#0D3B29] mb-2">Phone Number</label>
                     <div className="relative">
                       <input type="text" defaultValue="(406) 555-0120" className="w-full pl-4 pr-24 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-bold text-gray-800 transition-all" />
                       <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-white border border-gray-200 px-2 py-1 rounded-md cursor-pointer shadow-sm">
                         <span className="text-base leading-none">🇺🇸</span>
                         <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-[13px] font-medium text-[#0D3B29] mb-2">E-mail</label>
                     <input type="email" defaultValue="wade.warren@example.com" className="w-full px-4 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-bold text-gray-800 transition-all" />
                   </div>
                   <div>
                     <label className="block text-[13px] font-medium text-[#0D3B29] mb-2">Date of Birth</label>
                     <div className="relative">
                       <input type="text" defaultValue="12- January- 1999" className="w-full pl-4 pr-10 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-bold text-gray-800 transition-all" />
                       <Calendar className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                     </div>
                   </div>
                 </div>

                 <div>
                   <label className="block text-[13px] font-medium text-[#0D3B29] mb-2">Location</label>
                   <input type="text" defaultValue="2972 Westheimer Rd. Santa Ana, Illinois 85486" className="w-full px-4 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-bold text-gray-800 transition-all" />
                 </div>

                 <div>
                   <label className="block text-[13px] font-medium text-[#0D3B29] mb-2">Credit Card</label>
                   <div className="relative">
                     <div className="absolute left-4 top-1/2 -translate-y-1/2 flex">
                       {/* Simple Mastercard logo */}
                       <div className="w-5 h-5 rounded-full bg-[#EB001B] opacity-90 relative z-10"></div>
                       <div className="w-5 h-5 rounded-full bg-[#F79E1B] opacity-90 -ml-2 relative z-0 mix-blend-multiply"></div>
                     </div>
                     <input type="text" defaultValue="843-4359-4444" className="w-full pl-14 pr-10 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-bold text-gray-800 transition-all" />
                     <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                   </div>
                 </div>

                 <div>
                   <label className="block text-[13px] font-medium text-[#0D3B29] mb-2">Biography</label>
                   <div className="relative">
                     <textarea 
                       rows={4} 
                       placeholder="Enter a biography about you" 
                       className="w-full px-4 py-3 bg-[#F8F9FB] rounded-lg outline-none border border-transparent focus:border-gray-200 text-sm font-medium text-gray-800 transition-all resize-none leading-relaxed placeholder:font-normal placeholder:text-gray-500"
                     ></textarea>
                     <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                       <button className="p-1.5 text-gray-400 hover:text-gray-600 bg-white rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-gray-100"><Edit2 className="w-4 h-4" /></button>
                       <button className="p-1.5 text-gray-400 hover:text-gray-600 bg-white rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-gray-100"><Wand2 className="w-4 h-4" /></button>
                     </div>
                   </div>
                 </div>
               </div>

             </section>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminRole;
