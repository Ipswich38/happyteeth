'use client';

import { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Chatbot } from './Chatbot';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TeamPage } from './pages/TeamPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { AppointmentPage } from './pages/AppointmentPage';
import { Toaster } from './ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'About':
        return <AboutPage />;
      case 'Services':
        return <ServicesPage onNavigate={setCurrentPage} />;
      case 'Team':
        return <TeamPage />;
      case 'Gallery':
        return <GalleryPage />;
      case 'Blog':
        return <BlogPage />;
      case 'Contact':
        return <ContactPage />;
      case 'Appointment':
        return <AppointmentPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      <Chatbot />
      <Toaster />
    </div>
  );
}