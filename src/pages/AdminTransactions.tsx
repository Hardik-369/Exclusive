import React, { useState } from 'react';
import { 
  Search,
  Bell,
  MoreVertical,
  ChevronRight,
  ChevronLeft,
  Filter,
  PlusCircle,
  CreditCard,
  Download,
  Calendar,
  Layers,
  ArrowUpDown,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '../utils/cn';
import AdminLayout from '../layouts/AdminLayout';

const StatMiniCard = ({ title, value, trend, isPositive, isNegative }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group hover:shadow-md transition-all">
    <div className="flex justify-between items-start mb-4">
      <p className="text-xs font-bold text-gray-500">{title}</p>
      <MoreHorizontal className="w-4 h-4 text-gray-400 opacity-50 hover:opacity-100 cursor-pointer" />
    </div>
    <div className="flex items-baseline gap-3">
      <h3 className="text-[28px] font-bold text-gray-900 tracking-tight">{value}</h3>
      <span className={cn(
        "text-[10px] font-bold px-2 py-0.5 rounded-full",
        isPositive ? "bg-green-50 text-green-600" : isNegative ? "bg-red-50 text-red-500" : "bg-blue-50 text-blue-500"
      )}>
        {trend}
      </span>
    </div>
    <p className="text-[10px] font-bold text-gray-400 mt-1">Last 7 days</p>
  </div>
);

const StatusDot = ({ status }: { status: string }) => {
  const configs: any = {
    'Complete': { color: 'text-green-500', dot: 'bg-green-500' },
    'Pending': { color: 'text-yellow-500', dot: 'bg-yellow-500' },
    'Canceled': { color: 'text-red-500', dot: 'bg-red-500' },
  };
  const config = configs[status] || configs['Pending'];
  return (
    <div className="flex items-center gap-2">
      <div className={cn("w-1.5 h-1.5 rounded-full", config.dot)}></div>
      <span className={cn("text-xs font-semibold", config.color)}>{status}</span>
    </div>
  );
};

const transactionsData = [
  { customerId: '#CUST001', name: 'John Doe', date: '01-01-2025', total: '$2,904', method: 'CC', status: 'Complete' },
  { customerId: '#CUST001', name: 'John Doe', date: '01-01-2025', total: '$2,904', method: 'PayPal', status: 'Complete' },
  { customerId: '#CUST001', name: 'John Doe', date: '01-01-2025', total: '$2,904', method: 'CC', status: 'Complete' },
  { customerId: '#CUST001', name: 'John Doe', date: '01-01-2025', total: '$2,904', method: 'Bank', status: 'Complete' },
  { customerId: '#CUST001', name: 'Jane Smith', date: '01-01-2025', total: '$2,904', method: 'CC', status: 'Canceled' },
  { customerId: '#CUST001', name: 'Emily Davis', date: '01-01-2025', total: '$2,904', method: 'PayPal', status: 'Pending' },
  { customerId: '#CUST001', name: 'Jane Smith', date: '01-01-2025', total: '$2,904', method: 'Bank', status: 'Canceled' },
  { customerId: '#CUST001', name: 'John Doe', date: '01-01-2025', total: '$2,904', method: 'CC', status: 'Complete' },
  { customerId: '#CUST001', name: 'Emily Davis', date: '01-01-2025', total: '$2,904', method: 'PayPal', status: 'Pending' },
  { customerId: '#CUST001', name: 'Jane Smith', date: '01-01-2025', total: '$2,904', method: 'Bank', status: 'Canceled' },
];

const AdminTransactions = () => {
  const [activeTab, setActiveTab] = useState('All order (240)');

  return (
    <AdminLayout>
      <div className="space-y-8 pb-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Transaction</h1>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <input 
                type="text" 
                placeholder="Search data, users, or reports" 
                className="w-full sm:w-80 md:w-96 bg-[#F8F9FB] border-none rounded-full py-2.5 pl-5 pr-11 text-sm font-medium focus:ring-1 focus:ring-gray-200 outline-none placeholder:text-gray-400"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <button className="relative p-2.5 bg-white transition-all hover:bg-gray-50 rounded-full group shrink-0">
              <Bell className="w-5 h-5 text-gray-400 group-hover:text-black" />
              <span className="absolute top-2.5 right-3 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
             <StatMiniCard title="Total Revenue" value="$15,045" trend="+ 14.4%" isPositive />
             <StatMiniCard title="Completed Transactions" value="3,150" trend="+ 20%" isPositive />
             <StatMiniCard title="Pending Transactions" value="150" trend="85%" />
             <StatMiniCard title="Failed Transactions" value="75" trend="15%" isNegative />
          </div>
          
          {/* Payment Method Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col group hover:shadow-md transition-all">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold text-gray-800">Payment Method</h3>
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                 <div className="relative w-full sm:w-1/2 aspect-[1.6/1] rounded-2xl overflow-hidden bg-gradient-to-br from-[#2E7D32] to-[#81C784] p-5 text-white shadow-lg">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex justify-between items-start mb-auto relative z-10">
                       <Layers className="w-8 h-8 opacity-80" />
                       <div className="w-8 h-6 bg-[#FFD700]/30 rounded-sm shadow-inner"></div>
                    </div>
                    {/* Add decorative waves as in screenshot */}
                    <svg className="absolute bottom-0 left-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 200 100" preserveAspectRatio="none">
                       <path d="M0,80 Q50,50 100,80 T200,80" stroke="white" fill="none" strokeWidth="1.5" />
                       <path d="M0,90 Q50,60 100,90 T200,90" stroke="white" fill="none" strokeWidth="1.5" />
                    </svg>
                 </div>
                 
                 <div className="flex-1 space-y-4">
                    <div className="space-y-1.5">
                      <p className="text-[11px] font-semibold text-gray-400">Status: <span className="text-green-500 font-bold ml-1">Active</span></p>
                      <p className="text-[11px] font-semibold text-gray-400">Transactions: <span className="text-gray-900 font-bold ml-1">1,250</span></p>
                      <p className="text-[11px] font-semibold text-gray-400">Revenue: <span className="text-gray-900 font-bold ml-1">$50,000</span></p>
                    </div>
                    <button className="text-xs font-bold text-brand-primary hover:opacity-80 transition-colors underline underline-offset-4 decoration-[#4CAF50]/30">
                      View Transactions
                    </button>
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                 <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
                    <PlusCircle className="w-3.5 h-3.5 text-gray-400" />
                    Add Card
                 </button>
                 <button className="px-4 py-2.5 bg-white border border-red-50 rounded-xl text-xs font-bold text-red-500 hover:bg-red-50/50 transition-all">
                    Deactivate
                 </button>
              </div>
          </div>
        </div>

        {/* Transactions Table Section */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 flex flex-col xl:flex-row xl:items-center justify-between gap-6 border-b border-gray-50">
            <div className="flex items-center gap-0.5 p-1 bg-[#F8F9FB] rounded-xl overflow-x-auto no-scrollbar w-full xl:w-auto">
              {['All order (240)', 'Completed', 'Pending', 'Canceled'].map((tab) => (
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

            <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
              <div className="relative flex-1 min-w-[200px]">
                <input 
                  type="text" 
                  placeholder="Search payment history" 
                  className="w-full pl-4 pr-10 py-2.5 bg-[#F8F9FB] rounded-lg text-xs font-semibold outline-none border-none focus:ring-1 focus:ring-gray-200"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              </div>
              <button className="p-2.5 border border-gray-100 rounded-lg hover:bg-gray-50 text-gray-400 shrink-0"><Filter className="w-4 h-4" /></button>
              <button className="p-2.5 border border-gray-100 rounded-lg hover:bg-gray-50 text-gray-400 shrink-0"><ArrowUpDown className="w-4 h-4" /></button>
              <button className="p-2.5 border border-gray-100 rounded-lg hover:bg-gray-50 text-gray-400 shrink-0"><MoreHorizontal className="w-4 h-4" /></button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[900px]">
              <thead className="bg-[#fafffb] border-b border-gray-100">
                <tr className="text-[11px] font-bold text-[#6B8E6B] uppercase tracking-wider">
                  <th className="px-8 py-5">Customer Id</th>
                  <th className="px-8 py-5">Name</th>
                  <th className="px-8 py-5">Date</th>
                  <th className="px-8 py-5">Total</th>
                  <th className="px-8 py-5">Method</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50/80">
                {transactionsData.map((trx, idx) => (
                  <tr key={idx} className="hover:bg-[#fcfdfc] transition-all group">
                    <td className="px-8 py-5 text-sm font-medium text-gray-800">{trx.customerId}</td>
                    <td className="px-8 py-5 text-sm font-medium text-gray-800">{trx.name}</td>
                    <td className="px-8 py-5 text-sm font-medium text-gray-400">{trx.date}</td>
                    <td className="px-8 py-5 text-sm font-medium text-gray-800">{trx.total}</td>
                    <td className="px-8 py-5 text-sm font-medium text-gray-800">{trx.method}</td>
                    <td className="px-8 py-5">
                       <StatusDot status={trx.status} />
                    </td>
                    <td className="px-8 py-5 text-center">
                       <button className="text-[11px] font-bold text-[#4CAF50] hover:opacity-80 transition-all underline underline-offset-4 decoration-[#4CAF50]/10">
                         View Details
                       </button>
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

export default AdminTransactions;
