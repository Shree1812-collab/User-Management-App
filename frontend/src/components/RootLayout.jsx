import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 selection:bg-blue-100">
      <Header />

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
        <div className="bg-white min-h-[60vh] rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;