import React from 'react';
import { Heart, Code, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Main greeting card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-12 mb-8 transform hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="w-16 h-16 text-blue-500 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
            Hello, World!
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Welcome to your beautiful React application. 
            <br />
            Built with modern tools and ready for production.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Code className="w-4 h-4" />
              React + TypeScript
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Tailwind CSS
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              <Heart className="w-4 h-4" />
              Beautiful Design
            </span>
          </div>
        </div>
        
        {/* Footer message */}
        <div className="text-slate-500 text-sm">
          <p className="mb-2">Ready to build something amazing?</p>
          <div className="flex justify-center items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Development server is running</span>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}

export default App;