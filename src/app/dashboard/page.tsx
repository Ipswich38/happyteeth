'use client';

import { useState, useEffect } from 'react';

interface Submission {
  id: string;
  type: 'contact' | 'appointment';
  name: string;
  email?: string;
  phone?: string;
  cellphone?: string;
  message?: string;
  service?: string;
  date?: string;
  timestamp: string;
  read: boolean;
}

export default function Dashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'contact' | 'appointment'>('all');

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/dashboard');
      const data = await response.json();
      setSubmissions(data.submissions || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (submissionId: string) => {
    try {
      await fetch('/api/dashboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          submissionId,
          action: 'markAsRead',
        }),
      });

      // Update local state
      setSubmissions(prev =>
        prev.map(sub =>
          sub.id === submissionId ? { ...sub, read: true } : sub
        )
      );
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const filteredSubmissions = submissions.filter(submission => {
    if (filter === 'all') return true;
    return submission.type === filter;
  });

  const unreadCount = submissions.filter(sub => !sub.read).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Happy Teeth Dashboard
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  Manage your contact form submissions and appointment requests
                </p>
              </div>
              <div className="flex items-center space-x-4">
                {unreadCount > 0 && (
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {unreadCount} unread
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { key: 'all', label: 'All', count: submissions.length },
                { key: 'contact', label: 'Contact Forms', count: submissions.filter(s => s.type === 'contact').length },
                { key: 'appointment', label: 'Appointments', count: submissions.filter(s => s.type === 'appointment').length }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key as any)}
                  className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                    filter === tab.key
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2.5 rounded-full text-xs">
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Submissions List */}
        {filteredSubmissions.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📋</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions yet</h3>
            <p className="text-gray-500">
              {filter === 'all'
                ? 'When customers submit contact forms or appointment requests, they will appear here.'
                : `No ${filter} submissions found.`
              }
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSubmissions.map((submission) => (
              <div
                key={submission.id}
                className={`bg-white overflow-hidden shadow rounded-lg border-l-4 ${
                  submission.type === 'appointment'
                    ? 'border-l-pink-500'
                    : 'border-l-blue-500'
                } ${
                  !submission.read ? 'bg-blue-50' : ''
                }`}
              >
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${
                        submission.type === 'appointment'
                          ? 'bg-pink-100 text-pink-600'
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {submission.type === 'appointment' ? '🦷' : '📧'}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {submission.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {submission.type === 'appointment' ? 'Appointment Request' : 'Contact Form'}
                          {' • '}
                          {new Date(submission.timestamp).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {!submission.read && (
                        <button
                          onClick={() => markAsRead(submission.id)}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full hover:bg-blue-200"
                        >
                          Mark as read
                        </button>
                      )}
                      {!submission.read && (
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {submission.type === 'contact' ? (
                      <>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Email</dt>
                          <dd className="mt-1 text-sm text-gray-900">{submission.email}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Phone</dt>
                          <dd className="mt-1 text-sm text-gray-900">{submission.phone || 'Not provided'}</dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">Message</dt>
                          <dd className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{submission.message}</dd>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Cellphone</dt>
                          <dd className="mt-1 text-sm text-gray-900">{submission.cellphone}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Service</dt>
                          <dd className="mt-1 text-sm text-gray-900">{submission.service}</dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">Preferred Date</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {new Date(submission.date!).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </dd>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="mt-4 flex items-center space-x-4 text-sm">
                    <a
                      href={submission.type === 'contact' ? `mailto:${submission.email}` : `tel:${submission.cellphone}`}
                      className="text-pink-600 hover:text-pink-500 font-medium"
                    >
                      {submission.type === 'contact' ? 'Send Email' : 'Call Patient'}
                    </a>
                    {submission.type === 'contact' && submission.phone && (
                      <a
                        href={`tel:${submission.phone}`}
                        className="text-pink-600 hover:text-pink-500 font-medium"
                      >
                        Call Phone
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}