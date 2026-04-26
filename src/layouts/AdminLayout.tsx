import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  CreditCard, 
  Layers, 
  PlusCircle, 
  UserCircle,
  LogOut,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import { cn } from '../utils/cn';
import { Navigate, Link, useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { user, logout } = useStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  if (!user || user.role !== 'admin') {
    return <Navigate to="/auth" replace />;
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const menuGroups = [
    {
      title: 'Main menu',
      items: [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
        { name: 'Order Management', icon: ShoppingBag, path: '/admin/orders' },
        { name: 'Customers', icon: Users, path: '/admin/customers' },
        { name: 'Transaction', icon: CreditCard, path: '/admin/transactions' },
        { name: 'Categories', icon: Layers, path: '/admin/categories' },
      ]
    },
    {
      title: 'Product',
      items: [
        { name: 'Add Products', icon: PlusCircle, path: '/admin/products/add' },
      ]
    },
    {
      title: 'Admin',
      items: [
        { name: 'Admin role', icon: UserCircle, path: '/admin/role' },
      ]
    }
  ];

  const isActive = (path: string) => {
    if (path === '/admin') return location.pathname === '/admin';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex min-h-screen bg-[#FDFDFD] font-sans relative overflow-x-hidden">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "w-[280px] bg-white border-r border-gray-100 flex flex-col fixed inset-y-0 left-0 z-50 transition-transform duration-500 transform lg:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-8 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/admin')}>
             <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
             </div>
             <h2 className="text-xl font-bold tracking-tight text-gray-900 italic">Admin.</h2>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden p-2 text-gray-400 hover:text-black">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-8 overflow-y-auto no-scrollbar py-2">
          {menuGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              <p className="text-[10px] uppercase font-bold text-gray-300 px-4 tracking-[0.2em]">{group.title}</p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.path}>
                    <button
                      onClick={() => { navigate(item.path); setIsSidebarOpen(false); }}
                      className={cn(
                        "w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-bold transition-all text-left",
                        isActive(item.path) 
                          ? "bg-[#4CAF50] text-white shadow-lg shadow-green-100/50" 
                          : "text-gray-400 hover:bg-gray-50 hover:text-gray-900"
                      )}
                    >
                      <item.icon className={cn("w-5 h-5", isActive(item.path) ? "text-white" : "text-gray-400 group-hover:text-gray-900")} />
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer Area */}
        <div className="p-4 mt-auto border-t border-gray-50 flex flex-col gap-3">
          <div className="flex items-center gap-3 p-3 bg-white rounded-2xl hover:bg-gray-50 transition-all cursor-pointer">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" 
                className="w-10 h-10 rounded-full object-cover"
                alt="Avatar" 
              />
            </div>
            <div className="flex-1 min-w-0">
               <p className="text-sm font-bold text-gray-900 truncate">Dealport</p>
               <p className="text-[10px] font-bold text-gray-400 truncate tracking-tight">Mark@thedesigner...</p>
            </div>
            <button onClick={logout} className="p-2 text-gray-200 hover:text-red-500 transition-colors">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
          
          <Link to="/" className="flex items-center justify-between px-4 py-3.5 bg-[#F8F9FB] rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100 transition-all border border-gray-100/50">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4 text-gray-400" />
              <span>Your Shop</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-gray-300" />
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 w-full lg:ml-[280px] p-4 md:p-6 lg:p-14 min-h-screen max-w-[100vw]">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden mb-6 p-2.5 bg-white border border-gray-100 rounded-xl shadow-sm text-gray-400"
        >
          <Menu className="w-6 h-6" />
        </button>
        {children}
      </main>
    </div>
  );
};

const SidebarItem = ({ active, onClick, icon: Icon, name }: any) => (
  <li>
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-bold transition-all text-left uppercase tracking-tight",
        active 
          ? "bg-[#4CAF50] text-white shadow-xl shadow-green-100 scale-[1.02]" 
          : "text-gray-500 hover:bg-gray-50 hover:text-black"
      )}
    >
      <Icon className={cn("w-5 h-5", active ? "text-white" : "text-gray-400")} />
      {name}
    </button>
  </li>
);

export default AdminLayout;
