'use client';

import { useState, useEffect } from 'react';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const addToast = (event: Event) => {
      const customEvent = event as CustomEvent;
      const { message, type = 'info' } = customEvent.detail;
      const id = Math.random().toString(36).substr(2, 9);
      const newToast = { id, message, type };

      setToasts(prev => [...prev, newToast]);

      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, 5000);
    };

    window.addEventListener('show-toast', addToast);
    return () => window.removeEventListener('show-toast', addToast);
  }, []);

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const getToastStyles = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  const getToastIcon = (type: string) => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      default:
        return 'ℹ';
    }
  };

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center justify-between p-4 rounded-lg shadow-lg min-w-[300px] animate-in slide-in-from-right-full ${getToastStyles(toast.type)}`}
        >
          <div className="flex items-center">
            <span className="mr-2 text-lg">{getToastIcon(toast.type)}</span>
            <span>{toast.message}</span>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="ml-4 text-lg hover:opacity-70"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

// Helper function to show toasts
export const toast = {
  success: (message: string) => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message, type: 'success' } }));
  },
  error: (message: string) => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message, type: 'error' } }));
  },
  info: (message: string) => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message, type: 'info' } }));
  },
  warning: (message: string) => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message, type: 'warning' } }));
  }
};