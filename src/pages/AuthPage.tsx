import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '../store/useStore';

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { login, register, user } = useStore();

  React.useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        window.location.href = '/admin';
      } else {
        window.location.href = '/';
      }
    }
  }, [user]);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      const result = login(formData.email, formData.password);
      if (!result.success) setError(result.error || 'Login failed');
      // Redirect handled by useEffect
    } else {
      if (!formData.name || !formData.email || !formData.password) {
        setError('Please fill in all fields');
        return;
      }
      const result = register(formData.name, formData.email, formData.password);
      if (!result.success) setError(result.error || 'Registration failed');
      // Redirect handled by useEffect
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center pt-10 pb-20 lg:pt-0">
      {/* Left Image Section */}
      <div className="w-full lg:w-[60%] bg-[#C1E6BA] flex items-center justify-end overflow-hidden h-[600px] lg:h-[781px]">
        <img 
          src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=1200&auto=format&fit=crop" 
          alt="Shopping illustration" 
          className="w-full h-full object-cover mix-blend-multiply opacity-90"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-[40%] px-10 lg:pl-32 lg:pr-20 py-20 flex flex-col justify-center">
        <div className="max-w-[370px] w-full space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-medium tracking-tight text-black">
              {isLogin ? 'Log in to Exclusive' : 'Create an account'}
            </h1>
            <p className="text-base font-normal">Enter your details below</p>
          </div>
          
          <div className="space-y-10">
            <form className="space-y-10" onSubmit={handleAuth}>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="relative"
                  >
                    <input 
                      type="text" 
                      placeholder="Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-b border-black/30 py-2 focus:border-black outline-none transition-colors placeholder:text-black/50"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Email or Phone Number" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-black/30 py-2 focus:border-black outline-none transition-colors placeholder:text-black/50 text-base"
                />
              </div>
              
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full border-b border-black/30 py-2 focus:border-black outline-none transition-colors placeholder:text-black/50 text-base"
                />
              </div>

              <div className="space-y-4 pt-4">
                <div className={cn("flex items-center justify-between", isLogin ? "flex-row" : "flex-col space-y-4")}>
                  <button 
                    type="submit"
                    className={cn(
                      "bg-[#4EA674] text-white py-4 rounded-sm font-medium hover:bg-opacity-90 transition-all text-base",
                      isLogin ? "px-12" : "w-full"
                    )}
                  >
                    {isLogin ? 'Log In' : 'Create Account'}
                  </button>
                  
                  {isLogin && (
                    <button type="button" className="text-[#4EA674] font-medium hover:underline text-base">
                      Forget Password?
                    </button>
                  )}
                  
                  {!isLogin && (
                    <button 
                      type="button"
                      className="w-full border border-black/30 py-4 rounded-sm font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition-all text-base"
                    >
                      <img src="https://www.google.com/favicon.ico" alt="google" className="w-5 h-5" />
                      Sign up with Google
                    </button>
                  )}
                </div>
              </div>
            </form>

            <div className="flex items-center justify-center gap-4 text-black/70">
              <span className="text-base">{isLogin ? "Don't have an account?" : "Already have account?"}</span>
              <button 
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                }}
                className="font-medium text-black border-b border-black/50 pb-0.5 hover:text-brand-primary hover:border-brand-primary transition-all text-base"
              >
                {isLogin ? 'Sign Up' : 'Log in'}
              </button>
            </div>
            
            {isLogin && (
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Admin Demo Credentials:</p>
                <p className="text-sm text-gray-600">Email: <span className="font-mono bg-gray-100 px-1">admin@exclusive.com</span></p>
                <p className="text-sm text-gray-600">Pass: <span className="font-mono bg-gray-100 px-1">admin123</span></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
