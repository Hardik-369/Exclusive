import React from 'react';
import { Send, Facebook, Twitter, Instagram, Linkedin, QrCode } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-footer text-white pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
        {/* Column 1 */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight">Exclusive</h2>
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Subscribe</h3>
            <p className="text-base opacity-90">Get 10% off your first order</p>
            <div className="flex items-center border-2 border-white/40 bg-[#215E3F] rounded-md px-4 py-3 w-full group focus-within:border-white transition-all">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none focus:ring-0 text-sm outline-none grow placeholder:text-white/60"
              />
              <Send className="w-5 h-5 cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold">Support</h3>
          <div className="space-y-6 text-base opacity-90 leading-relaxed">
            <p>111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</p>
            <p className="hover:underline cursor-pointer">exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold">Account</h3>
          <div className="flex flex-col space-y-4 text-base opacity-90">
            <a href="#" className="hover:underline">My Account</a>
            <a href="#" className="hover:underline">Login / Register</a>
            <a href="#" className="hover:underline">Cart</a>
            <a href="#" className="hover:underline">Wishlist</a>
            <a href="#" className="hover:underline">Shop</a>
          </div>
        </div>

        {/* Column 4 */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold">Quick Link</h3>
          <div className="flex flex-col space-y-4 text-base opacity-90">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms Of Use</a>
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>

        {/* Column 5 */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold">Download App</h3>
          <div className="space-y-6">
            <p className="text-sm opacity-80">Save $3 with App New User Only</p>
            <div className="flex gap-4">
              <div className="bg-white p-2 rounded-sm shrink-0">
                <QrCode className="w-16 h-16 text-black" />
              </div>
              <div className="flex flex-col justify-between gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-9 cursor-pointer hover:opacity-80 transition-opacity" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-9 cursor-pointer hover:opacity-80 transition-opacity" />
              </div>
            </div>
            <div className="flex gap-8 pt-4">
              <Facebook className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              <Twitter className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              <Instagram className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              <Linkedin className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center opacity-50 text-base py-8 border-t border-white/10">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
