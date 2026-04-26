import React from 'react';
import { 
  ShoppingBag, 
  Search,
  Bell,
  MoreVertical,
  ChevronRight,
  Filter,
  PlusCircle,
  CreditCard,
  X
} from 'lucide-react';
import { cn } from '../utils/cn';
import AdminLayout from '../layouts/AdminLayout';

const AdminOrders = () => {
  return (
    <AdminLayout>
      <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-500">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Order Management</h1>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search orders..." 
                className="w-full sm:w-48 md:w-64 lg:w-96 bg-white border border-gray-100 rounded-full py-2 sm:py-2.5 pl-9 sm:pl-11 pr-4 sm:pr-5 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-brand-primary transition-all shadow-sm outline-none"
              />
            </div>
            <button className="relative p-2 sm:p-2.5 bg-white rounded-full border border-gray-100 shadow-sm transition-all group shrink-0">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-black" />
              <span className="absolute top-2.5 right-2.5 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-brand-primary rounded-full border border-white"></span>
            </button>
          </div>
        </header>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">Order List</h2>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-brand-primary text-white rounded-lg text-xs sm:text-sm font-bold shadow-lg shadow-green-100">
              <PlusCircle className="w-4 h-4" />
              Add Order
            </button>
            <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-white border border-gray-100 rounded-lg text-xs sm:text-sm font-bold shadow-sm hover:bg-gray-50">
              Action
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <SimpleStatCard title="Total Orders" value="1,240" percentage="+ 14.4%" trend="up" subtitle="Last 7 days" />
          <SimpleStatCard title="New Orders" value="240" percentage="+ 20%" trend="up" subtitle="Last 7 days" color="green" />
          <SimpleStatCard title="Completed" value="960" percentage="85%" trend="up" subtitle="Last 7 days" color="blue" />
          <SimpleStatCard title="Canceled" value="87" percentage="↓ 5%" trend="down" subtitle="Last 7 days" color="red" />
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 flex flex-col xl:flex-row xl:items-center justify-between gap-4 sm:gap-6 border-b border-gray-50">
            <div className="flex items-center p-1 bg-[#F8F9FB] rounded-lg sm:rounded-xl w-full xl:w-auto overflow-x-auto">
              {['All order (240)', 'Completed', 'Pending', 'Canceled'].map((tab, i) => (
                 <button key={tab} className={cn(
                   "whitespace-nowrap px-3 sm:px-4 py-2 text-xs font-bold rounded-lg transition-all",
                   i === 0 ? "bg-white text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"
                 )}>
                   {tab}
                 </button>
              ))}
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative flex-1 sm:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <input type="text" placeholder="Search orders..." className="w-full sm:w-48 pl-9 pr-4 py-2 bg-[#F8F9FB] border border-gray-100 rounded-lg text-[11px] sm:text-xs font-medium outline-none" />
              </div>
              <button className="p-2 border border-gray-100 rounded-lg hover:bg-gray-50"><Filter className="w-4 h-4 text-gray-500" /></button>
              <button className="p-2 border border-gray-100 rounded-lg hover:bg-gray-50 hidden sm:block"><CreditCard className="w-4 h-4 text-gray-500" /></button>
              <button className="p-2 border border-gray-100 rounded-lg hover:bg-gray-50"><MoreVertical className="w-4 h-4 text-gray-400" /></button>
            </div>
          </div>

          <div className="overflow-x-auto text-[11px] sm:text-[13px]">
            <table className="w-full text-left min-w-[800px] sm:min-w-[1000px]">
              <thead className="bg-[#EAF5EB] text-[9px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                <tr>
                  <th className="px-4 sm:px-6 py-4">No.</th>
                  <th className="px-4 sm:px-6 py-4">Order Id</th>
                  <th className="px-4 sm:px-6 py-4">Product</th>
                  <th className="px-4 sm:px-6 py-4 whitespace-nowrap">Date</th>
                  <th className="px-4 sm:px-6 py-4">Price</th>
                  <th className="px-4 sm:px-6 py-4">Payment</th>
                  <th className="px-4 sm:px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <OrderRow 
                  no={1} id="#ORD0001" date="01-01-2025" price="49.99" payment="Paid" status="Delivered"
                  product={{ name: "Wireless Bluetooth Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80" }}
                />
                <OrderRow 
                  no={2} id="#ORD0002" date="01-01-2025" price="14.99" payment="Unpaid" status="Pending"
                  product={{ name: "Men's T-Shirt", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=100&q=80" }}
                />
                <OrderRow 
                  no={3} id="#ORD0003" date="01-01-2025" price="49.99" payment="Paid" status="Delivered"
                  product={{ name: "Men's Leather Wallet", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=100&q=80" }}
                />
                 <OrderRow 
                  no={4} id="#ORD0004" date="01-01-2025" price="39.99" payment="Paid" status="Shipped"
                  product={{ name: "Memory Foam Pillow", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=100&q=80" }}
                />
              </tbody>
            </table>
          </div>

          <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-50">
            <button className="w-full sm:w-auto px-4 py-2 border border-gray-100 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-gray-50">
              <ChevronRight className="w-4 h-4 rotate-180" /> Previous
            </button>
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto max-w-full pb-2 sm:pb-0">
               {[1, 2, 3, 4, 5, '...', 24].map((p, i) => (
                 <button key={i} className={cn(
                   "min-w-[32px] h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-all",
                   p === 1 ? "bg-[#4CAF50] text-white shadow-lg shadow-green-100" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                 )}>
                   {p}
                 </button>
               ))}
            </div>
            <button className="w-full sm:w-auto px-4 py-2 border border-gray-100 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-gray-50">
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

const SimpleStatCard = ({ title, value, percentage, trend, subtitle }: any) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-all h-full">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <p className="text-[10px] sm:text-xs font-bold text-gray-900">{title}</p>
        <button className="p-1 hover:bg-gray-50 rounded-lg"><MoreVertical className="w-4 h-4 text-gray-300" /></button>
      </div>
      <div className="flex items-baseline gap-2 sm:gap-3 mb-1 sm:mb-2 flex-wrap">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">{value}</h3>
        <span className={cn("text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5", trend === 'up' ? "text-green-500 bg-green-50" : "text-red-500 bg-red-50")}>
           {trend === 'up' ? '↑' : '↓'} {percentage}
        </span>
      </div>
      <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-tight">{subtitle}</p>
    </div>
  );
};

const OrderRow = ({ no, id, product, date, price, payment, status }: any) => (
  <tr className="hover:bg-gray-50 transition-all border-b border-gray-50 group text-[11px] sm:text-sm">
    <td className="px-4 sm:px-6 py-4">
      <div className="flex items-center gap-2 sm:gap-3">
         <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-brand-primary cursor-pointer shrink-0" />
         <span className="font-bold text-gray-900">{no}</span>
      </div>
    </td>
    <td className="px-4 sm:px-6 py-4 font-bold text-gray-900">{id}</td>
    <td className="px-4 sm:px-6 py-4">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#F8F9FB] rounded-lg sm:rounded-xl flex items-center justify-center p-1 sm:p-1.5 border border-gray-50 shrink-0">
          <img src={product.image} className="w-full h-full object-contain mix-blend-multiply" />
        </div>
        <span className="font-bold text-gray-600 max-w-[120px] sm:max-w-[150px] leading-tight line-clamp-1 sm:line-clamp-2">{product.name}</span>
      </div>
    </td>
    <td className="px-4 sm:px-6 py-4 font-bold text-gray-400 whitespace-nowrap">{date}</td>
    <td className="px-4 sm:px-6 py-4 font-bold text-gray-900 whitespace-nowrap">${price}</td>
    <td className="px-4 sm:px-6 py-4">
       <div className="flex items-center gap-1.5 sm:gap-2">
         <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", payment === 'Paid' ? "bg-green-500" : "bg-red-500")} />
         <span className="font-bold text-gray-900">{payment}</span>
       </div>
    </td>
    <td className="px-4 sm:px-6 py-4">
       <StatusBadge status={status} />
    </td>
  </tr>
);

const StatusBadge = ({ status }: { status: string }) => {
  const styles: any = {
    'Delivered': 'bg-green-50 text-green-500',
    'Pending': 'bg-orange-50 text-orange-500',
    'Shipped': 'bg-blue-50 text-blue-500',
    'Cancelled': 'bg-red-50 text-red-500'
  };
  
  const icons: any = {
    'Delivered': ShoppingBag,
    'Pending': PlusCircle,
    'Shipped': ShoppingBag,
    'Cancelled': X
  };

  const Icon = icons[status] || ShoppingBag;

  return (
    <div className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-tight", styles[status])}>
      <Icon className="w-3.5 h-3.5" />
      {status}
    </div>
  );
};

export default AdminOrders;
