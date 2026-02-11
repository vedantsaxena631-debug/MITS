import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Faculty', text: 'Hi, how can I help you?', time: '10:30 AM' },
    { id: 2, sender: 'You', text: 'I have a doubt in the assignment', time: '10:31 AM' },
    { id: 3, sender: 'Faculty', text: 'Sure, what is your doubt?', time: '10:32 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: 'You',
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Chat</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Conversations</h2>
          <div className="space-y-2">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800">
              <p className="font-medium text-gray-800 dark:text-white">Dr. Sharma</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Faculty</p>
            </div>
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600">
              <p className="font-medium text-gray-800 dark:text-white">Rahul Kumar</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Student</p>
            </div>
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600">
              <p className="font-medium text-gray-800 dark:text-white">Admin Support</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Support</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Dr. Sharma</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Online</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.sender === 'You'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                }`}>
                  <p>{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
