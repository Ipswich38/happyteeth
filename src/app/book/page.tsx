'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BookAppointment() {
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    cellphone: '',
    service: '',
    date: '',
    time: '',
    customTime: ''
  });

  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCustomTime, setShowCustomTime] = useState(false);

  const services = [
    'General Consultation',
    'Dental Cleaning',
    'Tooth Filling',
    'Tooth Extraction',
    'Root Canal Treatment',
    'Dental Crown',
    'Teeth Whitening',
    'Orthodontic Consultation',
    'Pediatric Dental Care',
    'TMJ Treatment',
    'Emergency Dental Care'
  ];

  // Generate time slots every 30 minutes from 8:00 AM to 5:00 PM, excluding 12:00-1:00 PM break
  const generateTimeSlots = () => {
    const slots = [];
    const startTime = 8; // 8:00 AM
    const endTime = 17; // 5:00 PM
    const breakStart = 12; // 12:00 PM
    const breakEnd = 13; // 1:00 PM

    for (let hour = startTime; hour < endTime; hour++) {
      // Skip break time
      if (hour >= breakStart && hour < breakEnd) {
        continue;
      }

      // Add :00 and :30 slots for each hour
      const hour12 = hour > 12 ? hour - 12 : hour;
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour12 === 0 ? 12 : hour12;

      slots.push({
        value: `${hour.toString().padStart(2, '0')}:00`,
        label: `${displayHour}:00 ${ampm}`
      });

      slots.push({
        value: `${hour.toString().padStart(2, '0')}:30`,
        label: `${displayHour}:30 ${ampm}`
      });
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Handle time selection
    if (name === 'time') {
      if (value === 'custom') {
        setShowCustomTime(true);
        setAppointmentForm({
          ...appointmentForm,
          [name]: value,
          customTime: ''
        });
      } else {
        setShowCustomTime(false);
        setAppointmentForm({
          ...appointmentForm,
          [name]: value,
          customTime: ''
        });
      }
    } else {
      setAppointmentForm({
        ...appointmentForm,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...appointmentForm,
          // Use custom time if selected, otherwise use regular time
          finalTime: appointmentForm.time === 'custom' ? appointmentForm.customTime : appointmentForm.time,
          appointmentDateTime: `${appointmentForm.date} ${appointmentForm.time === 'custom' ? appointmentForm.customTime : appointmentForm.time}`
        }),
      });

      if (response.ok) {
        setShowConfirmation(true);
        setAppointmentForm({ name: '', cellphone: '', service: '', date: '', time: '', customTime: '' });
        setShowBookingModal(false);
        setShowCustomTime(false);
      } else {
        alert('Failed to send appointment request. Please try again.');
      }
    } catch (error) {
      console.error('Error sending appointment request:', error);
      alert('Failed to send appointment request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  const openBookingModal = () => {
    setShowBookingModal(true);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-cyan-50">
      {/* Mobile-optimized header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 flex-shrink-0">
              <Image
                src="/happyteethtransparent.png"
                alt="Happy Teeth Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-900">Happy Teeth</h1>
              <p className="text-sm text-gray-600">Your Trusted Family Dental Clinic</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Welcome message */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🦷</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Happy Teeth!</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Your smile is our priority. Book your appointment today for quality dental care in a comfortable environment.
          </p>

          {/* Book Appointment Button */}
          <button
            onClick={openBookingModal}
            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <span>📅</span>
            <span>Book Your Appointment</span>
          </button>
        </div>

        {/* Contact info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">Contact Information</h3>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-green-600">📞</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Call us directly</p>
              <a
                href="tel:+639486867966"
                className="text-pink-600 font-semibold text-lg hover:text-pink-700"
              >
                09486867966
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600">📍</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <p className="text-gray-900 font-medium text-sm leading-tight">
                2nd Floor, EB Town Center<br />
                Brgy. Graceville, San Jose del Monte
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600">🕒</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Clinic Hours</p>
              <p className="text-gray-900 font-medium text-sm">
                Monday - Sunday: 8:00 AM - 5:00 PM<br />
                <span className="text-red-600 text-xs">Break: 12:00 PM - 1:00 PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Emergency info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            For emergency cases, please call us immediately at{' '}
            <a href="tel:+639486867966" className="text-pink-600 font-semibold">
              09486867966
            </a>
          </p>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white rounded-t-3xl border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8">
                  <Image
                    src="/happyteethtransparent.png"
                    alt="Happy Teeth Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Book Appointment</h3>
              </div>
              <button
                onClick={closeBookingModal}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-gray-500 text-lg">×</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    required
                    value={appointmentForm.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="modal-cellphone" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="modal-cellphone"
                    name="cellphone"
                    required
                    value={appointmentForm.cellphone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-base"
                    placeholder="09XXXXXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="modal-service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="modal-service"
                    name="service"
                    required
                    value={appointmentForm.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-base"
                  >
                    <option value="">Choose a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-date" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="modal-date"
                    name="date"
                    required
                    value={appointmentForm.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-base"
                  />
                </div>

                <div>
                  <label htmlFor="modal-time" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="modal-time"
                    name="time"
                    required
                    value={appointmentForm.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-base"
                  >
                    <option value="">Choose a time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                    <option value="custom">🕐 Other Time (Custom)</option>
                  </select>

                  {/* Custom Time Input */}
                  {showCustomTime && (
                    <div className="mt-3">
                      <label htmlFor="modal-custom-time" className="block text-sm font-medium text-gray-700 mb-2">
                        Please specify your preferred time
                      </label>
                      <input
                        type="time"
                        id="modal-custom-time"
                        name="customTime"
                        required={appointmentForm.time === 'custom'}
                        value={appointmentForm.customTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-base"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        💡 Custom times are subject to clinic availability and confirmation by our staff.
                      </p>
                    </div>
                  )}
                </div>

                {/* Booking Information */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-blue-800 mb-3 flex items-center">
                    <span className="text-base mr-2">📋</span>
                    How Our Booking Process Works
                  </h4>
                  <div className="text-xs text-blue-700 space-y-2">
                    <p className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5">1.</span>
                      <span>Your request will be reviewed by our friendly staff within 24 hours.</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5">2.</span>
                      <span>We&apos;ll <strong>call you directly</strong> to confirm availability and finalize your appointment.</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5">3.</span>
                      <span>Your appointment is officially confirmed once you agree to the scheduled time with our staff.</span>
                    </p>
                  </div>
                </div>

                {/* Helpful Information */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-green-800 mb-3 flex items-center">
                    <span className="text-base mr-2">💡</span>
                    Good to Know
                  </h4>
                  <ul className="text-xs text-green-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5">•</span>
                      <span>We have <strong>2 treatment rooms</strong>, so multiple appointments at the same time are possible.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5">•</span>
                      <span>Custom time requests are welcome and will be accommodated based on availability.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5">•</span>
                      <span>Please plan to arrive <strong>15 minutes early</strong> for your appointment.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5">•</span>
                      <span>For same-day emergencies, please call us directly at <strong>09486867966</strong>.</span>
                    </li>
                  </ul>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <span>📝</span>
                      <span>Submit Booking Request</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full mx-4 p-8 transform transition-all duration-300 scale-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📝</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Booking Request Sent!
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                Thank you for choosing Happy Teeth! We&apos;ve received your appointment request and will be in touch soon.
              </p>

              {/* Next Steps */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 mb-6 border border-blue-200">
                <div className="flex items-center justify-center space-x-2 text-blue-600 mb-3">
                  <span className="text-lg">📞</span>
                  <span className="font-semibold text-sm">What Happens Next?</span>
                </div>
                <div className="text-xs text-blue-700 leading-relaxed space-y-2">
                  <p>• Your request is now saved in our clinic dashboard system</p>
                  <p>• Our staff will <strong>call you within 24 hours</strong> to confirm availability</p>
                  <p>• Your appointment is secured once we both agree on the details</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-3 mb-6 border border-green-200">
                <p className="text-xs text-green-700 leading-relaxed text-center">
                  <span className="font-semibold">Need immediate assistance?</span><br />
                  Call us at <strong>09486867966</strong> during clinic hours.
                </p>
              </div>

              <button
                onClick={closeConfirmation}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Understood! 👍
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}