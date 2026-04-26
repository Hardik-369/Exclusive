import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="bg-black text-white py-3 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex justify-center items-center gap-2 text-xs sm:text-sm">
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
          <a href="#" className="font-bold underline">ShopNow</a>
        </div>
        <div className="hidden sm:flex items-center gap-1 cursor-pointer">
          <span>English</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
