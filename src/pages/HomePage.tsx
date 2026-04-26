import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowLeft, ArrowRight, Truck, Headphones as HeadphonesIcon, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import ProductCard from '../components/ui/ProductCard';
import CategoryCard from '../components/ui/CategoryCard';
import { CATEGORIES, PRODUCTS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

const COUNTDOWN_INITIAL = { days: 3, hours: 23, minutes: 19, seconds: 56 };

export default function HomePage() {
  const [countdown, setCountdown] = useState(COUNTDOWN_INITIAL);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      title: 'iPhone 14 Series',
      subtitle: 'Up to 10% off Voucher',
      image: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=1200&auto=format&fit=crop',
      logo: 'Apple',
    },
    {
      title: 'Gaming Gear Pro',
      subtitle: 'Level Up Your Experience',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
      logo: 'Razer',
    }
  ];

  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 lg:grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block border-r border-gray-200 py-10 pr-8">
          <ul className="space-y-4">
            {["Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"].map((cat) => (
              <li key={cat} className="flex justify-between items-center group cursor-pointer">
                <span className="text-base group-hover:text-brand-primary transition-colors">{cat}</span>
                {["Woman's Fashion", "Men's Fashion"].includes(cat) && <ChevronRight className="w-4 h-4" />}
              </li>
            ))}
          </ul>
        </aside>

        {/* Hero Slider */}
        <div className="lg:col-span-3 py-6 lg:py-10">
          <div className="relative bg-black h-[300px] sm:h-[450px] overflow-hidden rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute inset-0 flex items-center p-8 sm:p-12 lg:p-20"
              >
                <div className="z-10 text-white space-y-4 sm:space-y-6 max-w-xs md:max-w-md">
                  <div className="flex items-center gap-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="apple" className="w-6 h-6 sm:w-8 sm:h-8 invert" />
                    <span className="text-xs sm:text-base">{heroSlides[activeSlide].title}</span>
                  </div>
                  <h2 className="text-2xl sm:text-5xl font-bold leading-tight">{heroSlides[activeSlide].subtitle}</h2>
                  <button className="flex items-center gap-2 border-b-2 border-white pb-1 font-bold group text-sm sm:text-base">
                    Shop Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-2" />
                  </button>
                </div>
                <img 
                  src={heroSlides[activeSlide].image} 
                  alt="hero" 
                  className="absolute right-0 top-0 h-full w-full sm:w-2/3 object-cover opacity-60 sm:opacity-80"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Slider Dots */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={cn(
                    "w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-gray-400 transition-all",
                    activeSlide === i ? "bg-error border-error scale-125" : "bg-transparent"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sales Section */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Flash Sales" subtitle="Today's">
          <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-20">
            <div className="flex items-center gap-4 sm:gap-6">
              {[
                { label: 'Days', value: countdown.days },
                { label: 'Hours', value: countdown.hours },
                { label: 'Minutes', value: countdown.minutes },
                { label: 'Seconds', value: countdown.seconds }
              ].map((item, idx) => (
                <React.Fragment key={item.label}>
                  <div className="flex flex-col">
                    <span className="text-[10px] sm:text-xs font-bold">{item.label}</span>
                    <span className="text-xl sm:text-3xl font-black">{String(item.value).padStart(2, '0')}</span>
                  </div>
                  {idx < 3 && <span className="text-error text-xl sm:text-3xl font-black">:</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="hidden sm:flex gap-2">
              <button className="p-3 bg-[#F5F5F5] rounded-full hover:bg-gray-200 transition-all"><ArrowLeft className="w-6 h-6" /></button>
              <button className="p-3 bg-[#F5F5F5] rounded-full hover:bg-gray-200 transition-all"><ArrowRight className="w-6 h-6" /></button>
            </div>
          </div>
        </SectionHeader>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 sm:mt-16 text-center">
          <button className="bg-brand-primary text-white px-12 py-4 rounded-md font-medium hover:bg-opacity-90 transition-all w-full sm:w-auto">
            View All Products
          </button>
        </div>
        <hr className="mt-16 sm:mt-20 border-gray-100" />
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Browse By Category" subtitle="Categories">
          <div className="hidden sm:flex gap-2">
            <button className="p-3 bg-[#F5F5F5] rounded-full hover:bg-gray-200 transition-all"><ArrowLeft className="w-6 h-6" /></button>
            <button className="p-3 bg-[#F5F5F5] rounded-full hover:bg-gray-200 transition-all"><ArrowRight className="w-6 h-6" /></button>
          </div>
        </SectionHeader>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} isActive={cat.name === 'Camera'} />
          ))}
        </div>
        <hr className="mt-16 sm:mt-20 border-gray-100" />
      </section>

      {/* Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Best Selling Products" subtitle="This Month">
          <button className="bg-brand-primary text-white px-8 sm:px-10 py-3 rounded-sm font-medium hover:bg-opacity-90 transition-all">
            View All
          </button>
        </SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PRODUCTS.slice(4, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-black text-white p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10 overflow-hidden relative group rounded-sm">
          <div className="flex-1 space-y-6 sm:space-y-8 z-10 text-center lg:text-left">
            <span className="text-brand-primary font-bold">Categories</span>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">Enhance Your Music Experience</h2>
            <div className="flex justify-center lg:justify-start gap-4">
              {['23 Hours', '05 Days', '59 Minutes', '35 Seconds'].map((t) => (
                <div key={t} className="w-12 h-12 sm:w-16 sm:h-16 bg-white text-black rounded-full flex flex-col items-center justify-center">
                  <span className="text-[10px] sm:text-xs font-bold leading-tight">{t.split(' ')[0]}</span>
                  <span className="text-[8px] sm:text-[10px] uppercase font-medium">{t.split(' ')[1]}</span>
                </div>
              ))}
            </div>
            <button className="bg-brand-primary text-white px-10 py-4 rounded-md font-medium hover:bg-opacity-90 transition-all w-full sm:w-auto">
              Buy Now!
            </button>
          </div>
          <div className="flex-1 relative z-10 flex justify-center">
            <div className="relative">
               <div className="absolute inset-0 bg-gray-500 rounded-full blur-[60px] sm:blur-[100px] opacity-20" />
               <img src="https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop" alt="speaker" className="w-[300px] sm:w-[450px] relative drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Explore Our Products" subtitle="Our Products">
          <div className="hidden sm:flex gap-2">
            <button className="p-3 bg-[#F5F5F5] rounded-full hover:bg-gray-200 transition-all"><ArrowLeft className="w-6 h-6" /></button>
            <button className="p-3 bg-[#F5F5F5] rounded-full hover:bg-gray-200 transition-all"><ArrowRight className="w-6 h-6" /></button>
          </div>
        </SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 gap-x-6 sm:gap-x-8">
          {PRODUCTS.slice(8, 16).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 sm:mt-16 text-center">
          <button className="bg-brand-primary text-white px-12 py-4 rounded-md font-medium hover:bg-opacity-90 transition-all w-full sm:w-auto">
            View All Products
          </button>
        </div>
      </section>

      {/* New Arrival Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <SectionHeader title="New Arrival" subtitle="Featured" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:h-[600px]">
          {/* Big Item */}
          <div className="bg-black relative overflow-hidden rounded-md group h-[300px] lg:h-full">
            <img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="ps5" />
            <div className="absolute shadow-inner bottom-0 left-0 p-6 sm:p-8 text-white space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">PlayStation 5</h3>
              <p className="text-xs sm:text-sm opacity-80 max-w-xs">Black and White version of the PS5 coming out on sale.</p>
              <button className="border-b border-white pb-1 font-bold text-sm sm:text-base">Shop Now</button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-rows-1 lg:grid-rows-2 gap-4 sm:gap-8">
            <div className="bg-black relative overflow-hidden rounded-md group h-[300px] lg:h-auto">
               <img src="https://images.unsplash.com/photo-1563170351-be82bc888bb4?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="women" />
               <div className="absolute shadow-inner bottom-0 left-0 p-6 sm:p-8 text-white space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">Women's Collections</h3>
                <p className="text-xs sm:text-sm opacity-80 max-w-xs">Featured woman collections that give you another vibe.</p>
                <button className="border-b border-white pb-1 font-bold text-sm sm:text-base">Shop Now</button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
               <div className="bg-black relative overflow-hidden rounded-md group h-[200px] lg:h-auto">
                  <img src="https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="speakers" />
                  <div className="absolute shadow-inner bottom-0 left-0 p-4 sm:p-6 text-white space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold">Speakers</h3>
                    <p className="text-[10px] sm:text-xs opacity-80">Amazon wireless speakers</p>
                    <button className="border-b border-white pb-1 text-xs sm:text-sm font-bold">Shop Now</button>
                  </div>
               </div>
               <div className="bg-black relative overflow-hidden rounded-md group h-[200px] lg:h-auto">
                  <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="perfume" />
                  <div className="absolute shadow-inner bottom-0 left-0 p-4 sm:p-6 text-white space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold">Perfume</h3>
                    <p className="text-[10px] sm:text-xs opacity-80">GUCCI INTENSE OUD EDP</p>
                    <button className="border-b border-white pb-1 text-xs sm:text-sm font-bold">Shop Now</button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Info */}
      <section className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {[
          { icon: Truck, title: 'FREE AND FAST DELIVERY', desc: 'Free delivery for all orders over $140' },
          { icon: HeadphonesIcon, title: '24/7 CUSTOMER SERVICE', desc: 'Friendly 24/7 customer support' },
          { icon: ShieldCheck, title: 'MONEY BACK GUARANTEE', desc: 'We return money within 30 days' }
        ].map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#2F2E30] border-4 sm:border-8 border-gray-300 rounded-full flex items-center justify-center text-white">
              <item.icon className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-lg sm:text-xl font-black">{item.title}</h3>
            <p className="text-xs sm:text-sm opacity-80">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 p-3 bg-[#F5F5F5] rounded-full hover:bg-gray-200 transition-all z-50 shadow-lg"
      >
        <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 rotate-90" />
      </button>

    </div>
  );
}
