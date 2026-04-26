import React, { useState } from 'react';
import { 
  Users, 
  Search,
  Bell,
  MoreVertical,
  ChevronRight,
  Filter,
  MessageSquare,
  Trash2,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Copy,
  Clock,
  Menu,
  XCircle,
  ShoppingBag
} from 'lucide-react';
import { cn } from '../utils/cn';
import AdminLayout from '../layouts/AdminLayout';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const chartData = [
  { name: 'Sun', value: 20 },
  { name: 'Mon', value: 22 },
  { name: 'Tue', value: 28 },
  { name: 'Wed', value: 24 },
  { name: 'Thu', value: 45 },
  { name: 'Fri', value: 42 },
  { name: 'Sat', value: 35 },
];

const AdminCustomers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  const customers = [
    { id: "#CUST001", name: "John Doe", email: "john.doe@example.com", phone: "+1234567890", orders: "25", spend: "3,450.00", status: "Active" },
    { id: "#CUST002", name: "Jane Smith", email: "jane.smith@example.com", phone: "+1234567890", orders: "5", spend: "250.00", status: "Inactive" },
    { id: "#CUST003", name: "Emily Davis", email: "emily.davis@example.com", phone: "+1234567890", orders: "30", spend: "4,600.00", status: "VIP" },
    { id: "#CUST004", name: "John Doe", email: "john.doe@example.com", phone: "+1234567890", orders: "25", spend: "3,450.00", status: "Active" },
    { id: "#CUST005", name: "Jane Smith", email: "jane.smith@example.com", phone: "+1234567890", orders: "5", spend: "250.00", status: "Inactive" },
    { id: "#CUST006", name: "Emily Davis", email: "emily.davis@example.com", phone: "+1234567890", orders: "30", spend: "4,600.00", status: "VIP" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-500">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Customers</h1>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search customers..." 
                className="w-full sm:w-48 md:w-64 lg:w-96 bg-white border border-gray-100 rounded-full py-2 sm:py-2.5 pl-9 sm:pl-11 pr-4 sm:pr-5 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-brand-primary transition-all shadow-sm outline-none"
              />
            </div>
            <button className="relative p-2 sm:p-2.5 bg-white rounded-full border border-gray-100 shadow-sm transition-all group shrink-0">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-black" />
              <span className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-brand-primary rounded-full border border-white"></span>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6">
            <SimpleStatCard title="Total Customers" value="11,040" percentage="+ 14.4%" trend="up" subtitle="Last 7 days" />
            <SimpleStatCard title="New Customers" value="2,370" percentage="+ 20%" trend="up" subtitle="Last 7 days" />
            <div className="sm:col-span-2 md:col-span-1">
              <SimpleStatCard title="Visitor" value="250k" percentage="+ 20%" trend="up" subtitle="Last 7 days" />
            </div>
          </div>

          <div className="md:col-span-2 bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-10 gap-4">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Customer Overview</h3>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex bg-[#F8F9FB] p-1 rounded-lg sm:rounded-xl">
                   <button className="px-3 sm:px-4 py-1 sm:py-1.5 text-[9px] sm:text-[10px] font-bold bg-white text-green-500 rounded-md sm:rounded-lg shadow-sm">This week</button>
                   <button className="px-3 sm:px-4 py-1 sm:py-1.5 text-[9px] sm:text-[10px] font-bold text-gray-400">Last week</button>
                </div>
                <button className="p-1 hover:bg-gray-50 rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
              <StatMini value="25k" label="Active Users" active />
              <StatMini value="5.6k" label="Repeaters" />
              <StatMini value="250k" label="Visitors" />
              <StatMini value="5.5%" label="Conv. Rate" />
            </div>

            <div className="h-48 sm:h-64 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="customerGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#4CAF50" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 9, fill: '#A0A0A0', fontWeight: 'bold'}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 9, fill: '#A0A0A0', fontWeight: 'bold'}} tickFormatter={(value) => `${value}k`} />
                  <Tooltip 
                    content={({ active, payload }: any) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-[#4CAF50] text-white px-3 py-2 rounded-xl shadow-xl text-[10px] font-bold flex flex-col items-center">
                            <p>{payload[0].payload.name}</p>
                            <p className="text-sm font-extrabold">{payload[0].value},409</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#4CAF50" 
                    strokeWidth={2} 
                    fillOpacity={1} 
                    fill="url(#customerGradient)" 
                    dot={{ fill: '#4CAF50', stroke: '#fff', strokeWidth: 1.5, r: 3 }}
                    activeDot={{ r: 5, stroke: '#fff', strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4 sm:mb-6">
           <h2 className="text-lg sm:text-xl font-bold text-gray-900">Customer List</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 relative">
          <div className={cn(
            "bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500",
            selectedCustomer ? "lg:w-2/3" : "w-full"
          )}>
            <div className="overflow-x-auto text-[11px] sm:text-[13px]">
              <table className="w-full text-left min-w-[800px] sm:min-w-[1000px]">
                <thead className="bg-[#EAF5EB] text-[9px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  <tr>
                    <th className="px-4 sm:px-6 py-4">Customer Id</th>
                    <th className="px-4 sm:px-6 py-4">Name</th>
                    <th className="px-4 sm:px-6 py-4">Phone</th>
                    <th className="px-4 sm:px-6 py-4 text-center">Orders</th>
                    <th className="px-4 sm:px-6 py-4">Total Spend</th>
                    <th className="px-4 sm:px-6 py-4">Status</th>
                    <th className="px-4 sm:px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {customers.map((customer, index) => (
                    <CustomerRow 
                      key={index}
                      {...customer} 
                      isSelected={selectedCustomer?.id === customer.id}
                      onSelect={() => setSelectedCustomer(customer)}
                    />
                  ))}
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

          {selectedCustomer && (
            <div className="w-full lg:w-1/3 animate-in slide-in-from-bottom sm:slide-in-from-right duration-500">
              <CustomerDetailsCard customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} />
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

const CustomerDetailsCard = ({ customer, onClose }: { customer: any, onClose: () => void }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative sticky top-24">
    <button onClick={onClose} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black transition-colors">
      <XCircle className="w-6 h-6" />
    </button>
    
    <div className="flex flex-col items-center mb-8">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-50 shadow-sm">
        <img src={`https://i.pravatar.cc/150?u=${customer.id}`} alt={customer.name} className="w-full h-full object-cover" />
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-xl font-bold text-gray-900">{customer.name}</h3>
          <button className="text-gray-300 hover:text-brand-primary transition-colors"><Copy className="w-4 h-4" /></button>
        </div>
        <p className="text-xs font-bold text-gray-400">{customer.email}</p>
      </div>
    </div>

    <div className="space-y-8">
      <div>
        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Customer Info</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-xl border border-gray-50">
            <Phone className="w-4 h-4 text-brand-primary" />
            <span className="text-[12px] font-bold text-gray-700">{customer.phone}</span>
          </div>
          <div className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-xl border border-gray-50">
            <MapPin className="w-4 h-4 text-brand-primary" />
            <span className="text-[12px] font-bold text-gray-700">123 Main St, NY</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Social Media</h4>
        <div className="flex gap-4">
           {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
             <button key={i} className="p-2.5 bg-[#F0F2F5] rounded-full hover:bg-brand-primary hover:text-white transition-all text-gray-500">
               <Icon className="w-4 h-4" />
             </button>
           ))}
        </div>
      </div>

      <div>
        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Activity</h4>
        <div className="space-y-3">
          <div className="p-3 bg-gray-50/50 rounded-xl border border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-white flex items-center justify-center border border-gray-100 shadow-sm">
                <Clock className="w-4 h-4 text-gray-400" />
              </div>
              <span className="text-[10px] font-bold text-gray-400">Registration</span>
            </div>
            <span className="text-[11px] font-bold text-gray-700">15.01.2025</span>
          </div>
          <div className="p-3 bg-gray-50/50 rounded-xl border border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-white flex items-center justify-center border border-gray-100 shadow-sm">
                <ShoppingBag className="w-4 h-4 text-gray-400" />
              </div>
              <span className="text-[10px] font-bold text-gray-400">Last purchase</span>
            </div>
            <span className="text-[11px] font-bold text-gray-700">10.01.2025</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Order overview</h4>
        <div className="grid grid-cols-3 gap-2">
          <DetailStat value="150" label="Total order" />
          <DetailStat value="140" label="Completed" color="green" />
          <DetailStat value="10" label="Canceled" color="red" />
        </div>
      </div>
    </div>
  </div>
);

const DetailStat = ({ value, label, color }: { value: string, label: string, color?: string }) => (
  <div className="p-3 bg-[#F8F9FB] rounded-xl text-center border border-gray-100">
    <p className={cn(
      "text-lg font-black",
      color === 'green' ? "text-green-500" : color === 'red' ? "text-red-500" : "text-gray-900"
    )}>{value}</p>
    <p className="text-[9px] font-bold text-gray-400 uppercase">{label}</p>
  </div>
);

const StatMini = ({ value, label, active = false }: { value: string, label: string, active?: boolean }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
       <div className={cn("h-8 w-[2px] rounded-full", active ? "bg-green-500" : "bg-gray-200")} />
       <p className="text-xl font-extrabold text-gray-900">{value}</p>
    </div>
    <p className="text-[10px] text-gray-400 font-bold tracking-tight">{label}</p>
  </div>
);

const CustomerRow = ({ id, name, phone, orders, spend, status, isSelected, onSelect }: any) => (
  <tr 
    onClick={onSelect}
    className={cn(
      "hover:bg-gray-50 transition-all border-b border-gray-50 group cursor-pointer",
      isSelected && "bg-[#EAF5EB]/30"
    )}
  >
    <td className="px-6 py-4 text-xs font-extrabold text-gray-900">{id}</td>
    <td className="px-6 py-4 text-xs font-bold text-gray-900">{name}</td>
    <td className="px-6 py-4 text-xs font-bold text-gray-900">{phone}</td>
    <td className="px-6 py-4 text-xs font-bold text-gray-900 text-center">{orders}</td>
    <td className="px-6 py-4 text-xs font-bold text-gray-900">{spend}</td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-2">
         <span className={cn(
           "w-1.5 h-1.5 rounded-full",
           status === 'Active' ? "bg-green-500" : status === 'VIP' ? "bg-brand-primary" : "bg-red-500"
         )} />
         <span className={cn(
           "text-xs font-bold",
           status === 'Active' ? "text-green-500" : status === 'VIP' ? "text-brand-primary" : "text-red-500"
         )}>{status}</span>
      </div>
    </td>
    <td className="px-6 py-4">
       <div className="flex items-center justify-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-all" onClick={(e) => e.stopPropagation()}><MessageSquare className="w-4 h-4 text-gray-400" /></button>
          <button className="p-2 hover:bg-red-50 rounded-lg transition-all group/del" onClick={(e) => e.stopPropagation()}><Trash2 className="w-4 h-4 text-gray-400 group-hover/del:text-red-500" /></button>
       </div>
    </td>
  </tr>
);

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

export default AdminCustomers;
