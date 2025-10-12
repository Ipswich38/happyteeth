'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

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
  const [editingId, setEditingId] = useState<string | null>(null);
  const router = useRouter();

  const fetchSubmissions = useCallback(async () => {
    try {
      const response = await fetch('/api/dashboard');

      if (response.status === 401) {
        router.push('/login');
        return;
      }

      const data = await response.json();
      setSubmissions(data.submissions || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth', { method: 'DELETE' });
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
      router.push('/login');
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

      setSubmissions(prev =>
        prev.map(sub =>
          sub.id === submissionId ? { ...sub, read: true } : sub
        )
      );
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const deleteSubmission = async (submissionId: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) {
      return;
    }

    try {
      await fetch('/api/dashboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          submissionId,
          action: 'delete',
        }),
      });

      setSubmissions(prev =>
        prev.filter(sub => sub.id !== submissionId)
      );
    } catch (error) {
      console.error('Error deleting submission:', error);
    }
  };

  const filteredSubmissions = submissions.filter(submission => {
    if (filter === 'all') return true;
    return submission.type === filter;
  });

  const unreadCount = submissions.filter(sub => !sub.read).length;
  const todaySubmissions = submissions.filter(sub =>
    new Date(sub.timestamp).toDateString() === new Date().toDateString()
  ).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-200 border-t-pink-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🦷</span>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Welcome to Happy Teeth</h1>
                <p className="text-sm text-gray-500">Patient appointments & inquiries dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {unreadCount > 0 && (
                <div className="flex items-center space-x-2 bg-red-50 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-red-700 font-medium">{unreadCount} new</span>
                </div>
              )}
              <button
                onClick={handleLogout}
                className="text-sm text-gray-500 hover:text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Messages</p>
                <p className="text-2xl font-semibold text-gray-900">{submissions.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <span className="text-blue-600 text-xl">📧</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today&apos;s Submissions</p>
                <p className="text-2xl font-semibold text-gray-900">{todaySubmissions}</p>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <span className="text-green-600 text-xl">📅</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Unread</p>
                <p className="text-2xl font-semibold text-gray-900">{unreadCount}</p>
              </div>
              <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center">
                <span className="text-pink-600 text-xl">🔔</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex space-x-2 mb-6">
          {[
            { key: 'all' as const, label: 'All Messages', count: submissions.length },
            { key: 'contact' as const, label: 'Inquiries', count: submissions.filter(s => s.type === 'contact').length },
            { key: 'appointment' as const, label: 'Appointments', count: submissions.filter(s => s.type === 'appointment').length }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                filter === tab.key
                  ? 'bg-pink-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab.label}
              {tab.count > 0 && (
                <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                  filter === tab.key
                    ? 'bg-pink-500 text-pink-100'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Submissions */}
        {filteredSubmissions.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-400 text-2xl">📭</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
            <p className="text-gray-500 text-sm">
              {filter === 'all'
                ? 'Patient submissions will appear here when they contact you.'
                : `No ${filter} messages found.`
              }
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSubmissions.map((submission) => (
              <div
                key={submission.id}
                className={`bg-white rounded-2xl border border-gray-100 p-6 shadow-sm transition-all hover:shadow-md ${
                  !submission.read ? 'ring-2 ring-blue-50 bg-blue-50/30' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      submission.type === 'appointment'
                        ? 'bg-pink-100 text-pink-600'
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {submission.type === 'appointment' ? '🦷' : '📧'}
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold text-gray-900">{submission.name}</h3>
                        {!submission.read && (
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                          submission.type === 'appointment'
                            ? 'bg-pink-100 text-pink-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {submission.type === 'appointment' ? 'Appointment' : 'Inquiry'}
                        </span>
                        <span className="flex items-center space-x-1">
                          <span>📅</span>
                          <span>
                            {new Date(submission.timestamp).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {!submission.read && (
                      <button
                        onClick={() => markAsRead(submission.id)}
                        className="px-3 py-1.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                      >
                        Mark read
                      </button>
                    )}
                    <button
                      onClick={() => setEditingId(editingId === submission.id ? null : submission.id)}
                      className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      {editingId === submission.id ? 'Hide' : 'View'}
                    </button>
                    <button
                      onClick={() => deleteSubmission(submission.id)}
                      className="px-3 py-1.5 text-xs font-medium bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {editingId === submission.id ? (
                  <div className="bg-gray-50 rounded-xl p-4 mt-4">
                    <h4 className="font-medium text-gray-900 mb-3">Full Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Name:</span>
                        <span className="ml-2 text-gray-900 font-medium">{submission.name}</span>
                      </div>
                      {submission.email && (
                        <div>
                          <span className="text-gray-500">Email:</span>
                          <span className="ml-2 text-gray-900">{submission.email}</span>
                        </div>
                      )}
                      {submission.phone && (
                        <div>
                          <span className="text-gray-500">Phone:</span>
                          <span className="ml-2 text-gray-900">{submission.phone}</span>
                        </div>
                      )}
                      {submission.cellphone && (
                        <div>
                          <span className="text-gray-500">Cellphone:</span>
                          <span className="ml-2 text-gray-900">{submission.cellphone}</span>
                        </div>
                      )}
                      {submission.service && (
                        <div>
                          <span className="text-gray-500">Service:</span>
                          <span className="ml-2 text-gray-900">{submission.service}</span>
                        </div>
                      )}
                      {submission.date && (
                        <div>
                          <span className="text-gray-500">Preferred Date:</span>
                          <span className="ml-2 text-gray-900">
                            {new Date(submission.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      )}
                      {submission.message && (
                        <div className="md:col-span-2">
                          <span className="text-gray-500">Message:</span>
                          <p className="mt-1 text-gray-900 whitespace-pre-wrap">{submission.message}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {submission.type === 'contact' ? (
                      <div>
                        <div className="flex flex-wrap gap-4 text-sm mb-3">
                          <span className="flex items-center space-x-1 text-gray-600">
                            <span>📧</span>
                            <span>{submission.email}</span>
                          </span>
                          {submission.phone && (
                            <span className="flex items-center space-x-1 text-gray-600">
                              <span>📞</span>
                              <span>{submission.phone}</span>
                            </span>
                          )}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{submission.message}</p>
                        <div className="flex space-x-3 mt-4">
                          <a
                            href={`mailto:${submission.email}`}
                            className="flex items-center space-x-1 text-sm text-pink-600 hover:text-pink-700 font-medium"
                          >
                            <span>📧</span>
                            <span>Reply via Email</span>
                          </a>
                          {submission.phone && (
                            <a
                              href={`tel:${submission.phone}`}
                              className="flex items-center space-x-1 text-sm text-pink-600 hover:text-pink-700 font-medium"
                            >
                              <span>📞</span>
                              <span>Call</span>
                            </a>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex flex-wrap gap-4 text-sm mb-3">
                          <span className="flex items-center space-x-1 text-gray-600">
                            <span>📞</span>
                            <span>{submission.cellphone}</span>
                          </span>
                          <span className="flex items-center space-x-1 text-gray-600">
                            <span>🦷</span>
                            <span>{submission.service}</span>
                          </span>
                          <span className="flex items-center space-x-1 text-gray-600">
                            <span>📅</span>
                            <span>
                              {new Date(submission.date!).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </span>
                        </div>
                        <div className="mt-4">
                          <a
                            href={`tel:${submission.cellphone}`}
                            className="flex items-center space-x-1 text-sm text-pink-600 hover:text-pink-700 font-medium"
                          >
                            <span>📞</span>
                            <span>Call to Confirm Appointment</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}