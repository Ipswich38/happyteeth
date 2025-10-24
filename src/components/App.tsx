'use client';

import { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Chatbot } from './Chatbot';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { GalleryPage } from './pages/GalleryPage';
import { Toaster } from './ui/sonner';
import { useAutoUpdate } from '../hooks/useAutoUpdate';
import { HalloweenEffect } from './HalloweenEffect';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const { updateAvailable, applyUpdate } = useAutoUpdate(30000); // Check every 30 seconds

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'About':
        return <AboutPage />;
      case 'Team':
        return <TeamPage />;
      case 'Gallery':
        return <GalleryPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HalloweenEffect />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      <Chatbot />
      <Toaster />

      {/* Auto-update notification */}
      {updateAvailable && (
        <div className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 animate-pulse border border-green-400">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
            <span className="text-sm font-medium">Updating site...</span>
          </div>
        </div>
      )}
    </div>
  );
}