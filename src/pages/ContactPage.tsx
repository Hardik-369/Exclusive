import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-10 flex gap-2 text-sm opacity-60">
        <a href="/" className="hover:text-black transition-colors">Home</a>
        <span>/</span>
        <span className="text-black font-semibold">Contact</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Info */}
        <div className="w-full lg:w-[340px] shadow-sm border border-gray-100 rounded-md p-10 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center">
                 <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold">Call To Us</h3>
            </div>
            <div className="space-y-4 text-sm">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center">
                 <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold">Write To Us</h3>
            </div>
            <div className="space-y-4 text-sm">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 shadow-sm border border-gray-100 rounded-md p-10">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input 
                type="text" 
                placeholder="Your Name *" 
                required
                className="bg-[#F5F5F5] rounded-md px-4 py-3 focus:ring-0 outline-none w-full"
              />
              <input 
                type="email" 
                placeholder="Your Email *" 
                required
                className="bg-[#F5F5F5] rounded-md px-4 py-3 focus:ring-0 outline-none w-full"
              />
              <input 
                type="tel" 
                placeholder="Your Phone *" 
                required
                className="bg-[#F5F5F5] rounded-md px-4 py-3 focus:ring-0 outline-none w-full"
              />
            </div>
            <textarea 
              rows={8} 
              placeholder="Your Message" 
              className="bg-[#F5F5F5] rounded-md px-4 py-3 focus:ring-0 outline-none w-full resize-none"
            />
            <div className="flex justify-end">
              <button 
                type="submit"
                className="bg-brand-primary text-white px-12 py-4 rounded-md font-medium hover:bg-opacity-90 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
