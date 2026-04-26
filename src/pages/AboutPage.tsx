import React from 'react';
import { Link } from 'react-router-dom';
import { Store, DollarSign, ShoppingBag, Briefcase, Twitter, Instagram, Linkedin, Truck, Headphones, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
  const stats = [
    { icon: <Store />, value: '10.5k', label: 'Sellers active our site', active: false },
    { icon: <DollarSign />, value: '33k', label: 'Monthly Product Sale', active: true },
    { icon: <ShoppingBag />, value: '45.5k', label: 'Customer active in our site', active: false },
    { icon: <Briefcase />, value: '25k', label: 'Anual gross sale in our site', active: false },
  ];

  const team = [
    { name: 'Tom Cruise', role: 'Founder & Chairman', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
    { name: 'Emma Watson', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
    { name: 'Will Smith', role: 'Product Designer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="pb-20 overflow-hidden">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-sm">
        <div className="flex items-center gap-2 text-gray-400">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span className="text-black">About</span>
        </div>
      </div>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 space-y-10">
          <h1 className="text-6xl font-medium tracking-tight">Our Story</h1>
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.
            </p>
          </div>
        </div>
        <div className="flex-1 lg:-mr-40 bg-pink-500 rounded-l-md overflow-hidden min-h-[600px] flex items-end">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop" 
            alt="Two women with shopping bags" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className={`border rounded-md p-10 flex flex-col items-center text-center gap-4 transition-all duration-300 ${
              stat.active ? 'bg-brand-primary border-brand-primary text-white' : 'border-gray-200 hover:bg-brand-primary hover:border-brand-primary hover:text-white group'
            }`}
          >
            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-2 ${
              stat.active ? 'bg-white/30 border-8 border-white/20' : 'bg-gray-200 border-8 border-gray-100 group-hover:bg-white/30 group-hover:border-white/20'
            }`}>
              <div className={`p-3 rounded-full ${stat.active ? 'bg-white text-brand-primary' : 'bg-black text-white group-hover:bg-white group-hover:text-brand-primary'}`}>
                {React.cloneElement(stat.icon as React.ReactElement, { size: 40 })}
              </div>
            </div>
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="space-y-6 group">
              <div className="bg-[#F5F5F5] rounded-md aspect-[3/4] overflow-hidden flex items-end">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-medium tracking-tight">{member.name}</h3>
                <p className="opacity-60 text-sm">{member.role}</p>
                <div className="flex gap-4 pt-2">
                   <Twitter className="w-5 h-5 cursor-pointer hover:text-brand-primary" />
                   <Instagram className="w-5 h-5 cursor-pointer hover:text-brand-primary" />
                   <Linkedin className="w-5 h-5 cursor-pointer hover:text-brand-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-12">
            {[1, 2, 3, 4, 5].map((s) => (
              <div 
                key={s} 
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  s === 3 ? 'bg-error border-2 border-gray-300' : 'bg-gray-300 hover:bg-error'
                }`} 
              />
            ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { icon: <Truck />, title: 'FREE AND FAST DELIVERY', desc: 'Free delivery for all orders over $140' },
          { icon: <Headphones />, title: '24/7 CUSTOMER SERVICE', desc: 'Friendly 24/7 customer support' },
          { icon: <ShieldCheck />, title: 'MONEY BACK GUARANTEE', desc: 'We return money within 30 days' }
        ].map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 bg-gray-200 border-8 border-gray-100 rounded-full flex items-center justify-center p-4">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-white p-3">
                {React.cloneElement(item.icon as React.ReactElement, { size: 40 })}
              </div>
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm opacity-80">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

