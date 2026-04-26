import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { Link, Navigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { user } = useStore();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const [formData, setFormData] = useState({
    firstName: user.name.split(' ')[0] || 'Md',
    lastName: user.name.split(' ')[1] || 'Rimel',
    email: user.email || 'rimel1111@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Breadcrumbs and Welcome */}
      <div className="flex justify-between items-center mb-20">
        <div className="flex gap-2 text-sm text-gray-400">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span className="text-black">My Account</span>
        </div>
        <div className="text-sm">
          Welcome! <span className="text-brand-primary">{user.name}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-20">
        {/* Sidebar */}
        <aside className="w-full md:w-64 space-y-8">
          <div className="space-y-4">
            <h3 className="font-medium text-base">Manage My Account</h3>
            <ul className="pl-8 space-y-2 text-sm text-gray-500">
              <li><Link to="/profile" className="text-brand-primary">My Profile</Link></li>
              <li><Link to="#" className="hover:text-brand-primary">Address Book</Link></li>
              <li><Link to="#" className="hover:text-brand-primary">My Payment Options</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-base">My Orders</h3>
            <ul className="pl-8 space-y-2 text-sm text-gray-500">
              <li><Link to="#" className="hover:text-brand-primary">My Returns</Link></li>
              <li><Link to="#" className="hover:text-brand-primary">My Cancellations</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-base">
              <Link to="/wishlist" className="hover:text-brand-primary">My WishList</Link>
            </h3>
          </div>
        </aside>

        {/* Main Content - Edit Profile */}
        <main className="flex-1 bg-white shadow-[0_1px_13px_rgba(0,0,0,0.05)] p-10 rounded-[4px]">
          <h2 className="text-xl font-medium text-brand-primary mb-8">Edit Your Profile</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-2">
                <label className="text-base">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] h-12 px-4 rounded-[4px] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-base">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] h-12 px-4 rounded-[4px] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-base">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] h-12 px-4 rounded-[4px] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-base">Address</label>
                <input 
                  type="text" 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] h-12 px-4 rounded-[4px] outline-none"
                />
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-base font-normal">Password Changes</h3>
              <div className="space-y-4">
                <input 
                  type="password" 
                  name="currentPassword"
                  placeholder="Current Passwod"
                  className="w-full bg-[#F5F5F5] h-12 px-4 rounded-[4px] outline-none"
                />
                <input 
                  type="password" 
                  name="newPassword"
                  placeholder="New Passwod"
                  className="w-full bg-[#F5F5F5] h-12 px-4 rounded-[4px] outline-none"
                />
                <input 
                  type="password" 
                  name="confirmPassword"
                  placeholder="Confirm New Passwod"
                  className="w-full bg-[#F5F5F5] h-12 px-4 rounded-[4px] outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-8 pt-6">
              <button type="button" className="text-black hover:underline px-4 order-2 sm:order-1">
                Cancel
              </button>
              <button 
                type="submit" 
                className="bg-brand-primary text-white px-12 py-4 rounded-[4px] font-medium hover:bg-opacity-90 transition-all w-full sm:w-auto order-1 sm:order-2"
              >
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
