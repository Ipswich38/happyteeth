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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-light text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Patient inquiries and appointments</p>
            </div>
            {unreadCount > 0 && (
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Filter Pills */}
        <div className="flex space-x-1 mb-8">
          {[
            { key: 'all' as const, label: 'All', count: submissions.length },
            { key: 'contact' as const, label: 'Contact', count: submissions.filter(s => s.type === 'contact').length },
            { key: 'appointment' as const, label: 'Appointments', count: submissions.filter(s => s.type === 'appointment').length }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                filter === tab.key
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label} {tab.count > 0 && `(${tab.count})`}
            </button>
          ))}
        </div>

        {/* Submissions */}
        {filteredSubmissions.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-4xl mb-2">○</div>
            <p className="text-gray-500 text-sm">No submissions yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredSubmissions.map((submission) => (
              <div
                key={submission.id}
                className={`border border-gray-100 rounded-lg p-6 transition-colors ${
                  !submission.read ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      submission.type === 'appointment' ? 'bg-pink-400' : 'bg-blue-400'
                    }`}></div>
                    <div>
                      <h3 className="font-medium text-gray-900">{submission.name}</h3>
                      <p className="text-xs text-gray-500">
                        {new Date(submission.timestamp).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {!submission.read && (
                      <button
                        onClick={() => markAsRead(submission.id)}
                        className="text-xs text-gray-400 hover:text-gray-600"
                      >
                        Mark read
                      </button>
                    )}
                    {!submission.read && (
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                </div>

                {submission.type === 'contact' ? (
                  <div className="space-y-3">
                    <div className="flex space-x-6 text-sm">
                      <div>
                        <span className="text-gray-500">Email:</span>
                        <span className="ml-2 text-gray-900">{submission.email}</span>
                      </div>
                      {submission.phone && (
                        <div>
                          <span className="text-gray-500">Phone:</span>
                          <span className="ml-2 text-gray-900">{submission.phone}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-900 whitespace-pre-wrap">{submission.message}</p>
                    </div>
                    <div className="flex space-x-4 pt-2">
                      <a
                        href={`mailto:${submission.email}`}
                        className="text-sm text-gray-600 hover:text-gray-900 underline"
                      >
                        Email
                      </a>
                      {submission.phone && (
                        <a
                          href={`tel:${submission.phone}`}
                          className="text-sm text-gray-600 hover:text-gray-900 underline"
                        >
                          Call
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex space-x-6 text-sm">
                      <div>
                        <span className="text-gray-500">Phone:</span>
                        <span className="ml-2 text-gray-900">{submission.cellphone}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Service:</span>
                        <span className="ml-2 text-gray-900">{submission.service}</span>
                      </div>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">Preferred date:</span>
                      <span className="ml-2 text-gray-900">
                        {new Date(submission.date!).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="pt-2">
                      <a
                        href={`tel:${submission.cellphone}`}
                        className="text-sm text-gray-600 hover:text-gray-900 underline"
                      >
                        Call patient
                      </a>
                    </div>
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