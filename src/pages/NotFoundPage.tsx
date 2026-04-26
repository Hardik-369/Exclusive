import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-center">
      {/* Breadcrumbs */}
      <div className="self-start mb-20 text-sm flex gap-2 text-gray-400">
        <Link to="/" className="hover:text-black">Home</Link>
        <span>/</span>
        <span className="text-black">404 Error</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center space-y-10 py-20">
        <h1 className="text-[110px] font-medium tracking-widest leading-none">404 Not Found</h1>
        <p className="text-base text-black">Your visited page not found. You may go home page.</p>
        
        <Link 
          to="/" 
          className="bg-brand-primary text-white px-12 py-4 rounded-[4px] font-medium hover:bg-opacity-90 transition-all mt-10"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
