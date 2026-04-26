import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import TopBanner from './TopBanner';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
