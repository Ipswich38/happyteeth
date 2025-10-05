'use client';

import { useState } from 'react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        isBot: false
      };
      setMessages([...messages, newMessage]);
      setInputValue('');

      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: 'Thanks for your message! A team member will get back to you soon.',
          isBot: true
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-cyan-500 text-white p-4 rounded-full shadow-lg hover:bg-cyan-600 transition-colors z-50"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-xl z-50 flex flex-col">
          <div className="bg-cyan-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat with us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 ${message.isBot ? 'text-left' : 'text-right'}`}
              >
                <div
                  className={`inline-block p-2 rounded-lg max-w-xs ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-cyan-500 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}