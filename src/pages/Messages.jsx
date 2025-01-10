import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { allMessagesAPI, deleteMessageAPI } from '../services/allAPI';
import { toast } from 'react-toastify';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getAllMessages();
  }, []);

  const getAllMessages = async () => {
    try {
      const res = await allMessagesAPI();
      console.log(res);

      if (res.status === 200) {
        setMessages(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteMessageAPI(id);
      if (res.status === 200) {
        toast.success(res.data);
        
        setMessages((prevMessages) =>
          prevMessages.filter((message) => message._id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
    });
  };

  return (
    <div className="min-h-screen bg-[#0A1817] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Messages</h1>
        <div className="bg-[#0A1817] border p-6 shadow-lg rounded-lg">
          {messages.length > 0 ? (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message._id}
                  className="flex justify-between items-center border-b last:border-0 pb-3 last:pb-0"
                >
                  <div>
                    <h3 className="font-medium">{message.message}</h3>
                    <p className="text-sm text-gray-400">{message.email}</p>
                    <p className="text-sm text-gray-400">{message.name}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-400">
                      {formatDate(message.date)}
                    </span>
                    <button
                      onClick={() => handleDelete(message._id)}
                      className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No messages to display.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
