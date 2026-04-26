import React from 'react';
import { useStore } from '../store/useStore';
import { 
  PlusCircle, 
  Search,
  Bell,
  MoreVertical,
  ChevronRight,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  ShoppingBag,
  Clock,
  LayoutDashboard
} from 'lucide-react';
import { cn } from '../utils/cn';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar
} from 'recharts';
import AdminLayout from '../layouts/AdminLayout';

const chartData = [
  { name: 'Sun', value: 20 },
  { name: 'Mon', value: 22 },
  { name: 'Tue', value: 28 },
  { name: 'Wed', value: 24 },
  { name: 'Thu', value: 45 },
  { name: 'Fri', value: 42 },
  { name: 'Sat', value: 35 },
];

const barData = Array.from({ length: 20 }, (_, i) => ({
  name: i,
  value: Math.floor(Math.random() * 50) + 20
}));

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <DashboardContent />
    </AdminLayout>
  );
};

const DashboardContent = () => (
  <>
    {/* Topbar */}
    <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-6">
      <div className="flex items-center gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto">
        <div className="relative flex-1 sm:flex-none">
          <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full sm:w-48 md:w-64 lg:w-96 bg-white border border-gray-100 rounded-full py-2 sm:py-2.5 pl-9 sm:pl-11 pr-4 sm:pr-5 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-green-500 transition-all shadow-sm outline-none placeholder:text-gray-400"
          />
        </div>
        <button className="relative p-2.5 sm:p-3 bg-white rounded-xl border border-gray-100 hover:bg-gray-50 shadow-sm transition-all group shrink-0">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-black" />
          <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
      </div>
    </header>

    {/* Stats Row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
      <StatCard 
        title="Total Sales" 
        value="$350K" 
        subValue="Sales" 
        percentage="+ 10.4%" 
        period="Last 7 days" 
        comparison="$235"
        trend="up"
      />
      <StatCard 
        title="Total Orders" 
        value="10.7K" 
        subValue="order" 
        percentage="+ 14.4%" 
        period="Last 7 days" 
        comparison="7.6k"
        trend="up"
      />
      <div className="sm:col-span-2 lg:col-span-1">
        <StatCard 
          title="Pending & Canceled" 
          period="Last 7 days" 
          isSplit
          pending={{ value: 509, label: 'user 204' }}
          canceled={{ value: 94, label: '14.4%', trend: 'down' }}
        />
      </div>
    </div>

    {/* Row 2: Sales Graph & Country Stats */}
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
      {/* Sales Analytics */}
      <div className="xl:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">Sales Analytics</h3>
            <p className="text-xs text-gray-400 font-medium">Statistics for this year</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex bg-[#F8F9FB] p-1 rounded-xl">
               <button className="px-4 py-1.5 text-xs font-bold bg-white text-green-500 rounded-lg shadow-sm">Monthly</button>
               <button className="px-4 py-1.5 text-xs font-bold text-gray-400">Weekly</button>
             </div>
             <button className="p-2 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
               <Filter className="w-4 h-4 text-gray-500" />
             </button>
          </div>
        </div>

        <div className="h-64 sm:h-72 mt-4 relative">
          <div className="absolute top-0 left-0 flex items-center gap-6 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-sm shadow-green-200"></span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">Sales</span>
            </div>
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-gray-200"></span>
               <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">Orders</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 20, right: 30, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#4CAF50" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fontSize: 10, fill: '#A0A0A0', fontWeight: 'bold'}}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fontSize: 10, fill: '#A0A0A0', fontWeight: 'bold'}}
                tickFormatter={(value) => `$${value}k`}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px', fontWeight: 'bold' }}
                cursor={{ stroke: '#4CAF50', strokeWidth: 2, strokeDasharray: '5 5' }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#4CAF50" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorValue)" 
                dot={{ fill: '#4CAF50', stroke: '#fff', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#fff', strokeWidth: 3 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Countries */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-bold text-gray-900 text-lg">Top Countries</h3>
          <button className="p-1 hover:bg-gray-50 rounded-lg"><MoreVertical className="w-5 h-5 text-gray-300" /></button>
        </div>
        <div className="space-y-6">
          <CountryRow flag="🇺🇸" country="United States" value="25.5K" percentage="14.4%" trend="up" progress={85} />
          <CountryRow flag="🇧🇷" country="Brazil" value="15.2K" percentage="10.2%" trend="up" progress={65} />
          <CountryRow flag="🇮🇳" country="India" value="12.8K" percentage="12.5%" trend="down" progress={55} />
          <CountryRow flag="🇨🇳" country="China" value="10.4K" percentage="8.4%" trend="up" progress={45} />
          <CountryRow flag="🇩🇪" country="Germany" value="8.9K" percentage="5.5%" trend="up" progress={35} />
        </div>
        <button className="w-full mt-8 py-3 border border-gray-100 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors uppercase tracking-widest">See all countries</button>
      </div>
    </div>

    {/* Row 3: Product Orders & Quick Management */}
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* Product Orders */}
      <div className="xl:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-50">
          <h3 className="font-bold text-gray-900 text-lg">Product Orders</h3>
          <div className="flex gap-2 w-full sm:w-auto justify-start sm:justify-end">
            <button className="p-2 border border-gray-100 rounded-lg hover:bg-gray-50"><Search className="w-4 h-4 text-gray-500" /></button>
            <button className="p-2 border border-gray-100 rounded-lg hover:bg-gray-50"><Filter className="w-4 h-4 text-gray-500" /></button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead className="bg-[#EAF5EB] text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <tr>
                <th className="px-8 py-4">No.</th>
                <th className="px-8 py-4">Product</th>
                <th className="px-8 py-4">Category</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4">Price</th>
                <th className="px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <TableRow 
                no="01" 
                product="Wireless Bluetooth Headphones" 
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80"
                category="Electronics" 
                date="24-01-2025" 
                price="49.99" 
                status="Paid" 
              />
              <TableRow 
                no="02" 
                product="Men's Cotton Polo T-Shirt" 
                image="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=100&q=80"
                category="Fashion" 
                date="22-01-2025" 
                price="19.99" 
                status="Unpaid" 
              />
              <TableRow 
                no="03" 
                product="Memory Foam Sleeping Pillow" 
                image="https://images.unsplash.com/photo-1541643600914-78b084683601?w=100&q=80"
                category="Home Decor" 
                date="20-01-2025" 
                price="29.99" 
                status="Paid" 
              />
              <TableRow 
                no="04" 
                product="Gourmet Ground Coffee" 
                image="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=100&q=80"
                category="Grocery" 
                date="18-01-2025" 
                price="14.99" 
                status="Paid" 
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Add/Edit */}
      <div className="space-y-6">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-6">Quick Manage</h3>
          <div className="space-y-4">
             <QuickProduct name="iPhone 15 Pro Max" price="1199.00" stock={25} image="https://images.unsplash.com/photo-1696446701796-da61225697cc?w=100&q=80" />
             <QuickProduct name="MacBook Air M2" price="999.00" stock={15} image="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=100&q=80" />
             <QuickProduct name="Sony WH-1000XM5" price="349.00" stock={40} image="https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=100&q=80" />
          </div>
          <button className="w-full mt-8 py-4 bg-brand-primary text-white rounded-2xl text-sm font-bold uppercase tracking-widest shadow-xl shadow-green-100 hover:scale-[1.02] transition-all">Add New Product</button>
        </div>

        <div className="bg-[#1C1F26] p-8 rounded-3xl text-white relative overflow-hidden group">
          <div className="relative z-10">
            <h4 className="text-xl font-bold mb-2">Inventory Alert</h4>
            <p className="text-gray-400 text-xs mb-6 max-w-[200px]">12 products are currently running low on stock.</p>
            <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold transition-all border border-white/10">Manage Stock</button>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-brand-primary rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
        </div>
      </div>
    </div>
  </>
);

const StatCard = ({ title, value, subValue, percentage, period, comparison, trend, isSplit, pending, canceled }: any) => (
  <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm group hover:shadow-md transition-all relative overflow-hidden h-full">
    {isSplit ? (
      <div className="flex flex-col h-full justify-between">
        <div className="flex justify-between items-center mb-6">
          <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">{title}</p>
          <button className="p-1 hover:bg-gray-50 rounded-lg"><MoreVertical className="w-4 h-4 text-gray-300" /></button>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <div>
             <h4 className="text-2xl font-black text-gray-900 mb-1">{pending.value}</h4>
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">{pending.label}</p>
           </div>
           <div className="text-right">
             <h4 className="text-2xl font-black text-red-500 mb-1">{canceled.value}</h4>
             <div className="flex items-center justify-end gap-1">
               <span className="text-[10px] font-bold text-red-500">{canceled.trend === 'down' ? '↓' : '↑'} {canceled.label}</span>
             </div>
           </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-50">
           <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{period}</p>
        </div>
      </div>
    ) : (
      <>
        <div className="flex justify-between items-center mb-8">
          <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">{title}</p>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-500 rounded-full">
            <span className="text-[10px] font-black">{percentage}</span>
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </div>
        <div className="flex items-baseline gap-3 mb-2">
          <h3 className="text-3xl font-black text-gray-900 tracking-tight">{value}</h3>
          <span className="text-xs font-bold text-gray-400">{subValue}</span>
        </div>
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-50">
           <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center">
             <LayoutDashboard className="w-3 h-3 text-gray-400" />
           </div>
           <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Prev: <span className="text-gray-900">{comparison}</span></p>
        </div>
      </>
    )}
  </div>
);

const CountryRow = ({ flag, country, value, percentage, trend, progress }: any) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-xl filter drop-shadow-sm">{flag}</span>
        <div>
          <p className="text-[13px] font-black text-gray-900 leading-none mb-1">{country}</p>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">{percentage} conversion</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[13px] font-black text-gray-900 leading-none mb-1">{value}</p>
        <span className={cn("text-[10px] font-bold flex items-center justify-end gap-1", trend === 'up' ? "text-green-500" : "text-red-500")}>
           {trend === 'up' ? '↑' : '↓'} {percentage}
        </span>
      </div>
    </div>
    <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
      <div 
        className={cn("h-full rounded-full transition-all duration-1000", trend === 'up' ? "bg-green-500 shadow-[0_0_8px_rgba(76,175,80,0.3)]" : "bg-red-500 shadow-[0_0_8px_rgba(244,67,54,0.3)]")} 
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

const TableRow = ({ no, product, image, category, date, price, status }: any) => (
  <tr className="hover:bg-gray-50 transition-all border-b border-gray-50 group">
    <td className="px-8 py-5 text-sm font-black text-gray-900">{no}</td>
    <td className="px-8 py-5">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#F8F9FB] rounded-xl flex items-center justify-center p-2 border border-gray-50 group-hover:scale-110 transition-transform">
          <img src={image} className="w-full h-full object-contain mix-blend-multiply" alt={product} />
        </div>
        <span className="font-bold text-gray-700 text-sm">{product}</span>
      </div>
    </td>
    <td className="px-8 py-5 font-bold text-gray-400 text-xs scale-90 origin-left uppercase tracking-widest">{category}</td>
    <td className="px-8 py-5 font-bold text-gray-400 text-sm">{date}</td>
    <td className="px-8 py-5 font-black text-gray-900 text-sm">${price}</td>
    <td className="px-8 py-5">
       <span className={cn(
         "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm",
         status === 'Paid' ? "bg-green-50 text-green-500" : "bg-red-50 text-red-500"
       )}>{status}</span>
    </td>
  </tr>
);

const QuickProduct = ({ name, price, stock, image }: any) => (
  <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-white hover:shadow-lg hover:shadow-gray-100 hover:scale-[1.02] transition-all rounded-2xl border border-transparent hover:border-gray-100 cursor-pointer group">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 group-hover:rotate-6 transition-transform">
        <img src={image} className="w-full h-full object-contain mix-blend-multiply" alt={name} />
      </div>
      <div>
        <p className="font-bold text-gray-900 text-sm leading-tight mb-1">{name}</p>
        <p className="text-[10px] font-bold text-gray-400 uppercase">Stock: <span className="text-gray-900">{stock}</span></p>
      </div>
    </div>
    <div className="text-right">
      <p className="font-black text-gray-900 text-sm mb-1">${price}</p>
      <button className="text-[10px] font-bold text-brand-primary uppercase tracking-tight flex items-center gap-1 ml-auto">
        Edit <ChevronRight className="w-3 h-3" />
      </button>
    </div>
  </div>
);

const StatusBadge = ({ status }: { status: string }) => {
  const styles: any = {
    'Delivered': 'bg-green-50 text-green-500',
    'Pending': 'bg-orange-50 text-orange-500',
    'Shipped': 'bg-blue-50 text-blue-500',
    'Cancelled': 'bg-red-50 text-red-500',
    'Paid': 'bg-green-50 text-green-500',
    'Unpaid': 'bg-red-50 text-red-500'
  };
  
  return (
    <div className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-tight", styles[status])}>
      {status}
    </div>
  );
};

export default AdminDashboard;
