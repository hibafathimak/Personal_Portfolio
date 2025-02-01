import React, { useState } from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

import { toast } from "react-toastify";
import data from "../assets/data";
import { sendMessageAPI } from "../services/allAPI";

const Contact = () => {
  const { contactInfo } = data; 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields!");
      return;
    }

    setLoading(true);
    try {
      const response = await sendMessageAPI({
        name,
        email,
        message,
    });
      if(response.status==200) {toast.success(response.data);}
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-4 sm:mx-8 my-20 flex flex-col items-center" >
      <h1 className="text-center text-3xl font-bold mb-8">Connect With Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-[80%] lg:h-[600px] ">
        <div className="bg-[#4D8685] rounded-tl-3xl rounded-bl-3xl p-4 sm:p-8 flex flex-col items-center justify-center text-white text-lg font-medium">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-center mb-8">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect. I'd love to hear from you!
          </p>
          <div className="flex space-x-6">
            {contactInfo.email && (
              <a
                href={`mailto:${contactInfo.email}`}
                target="_blank"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#4D8685] shadow-md hover:bg-[#0A1817] hover:text-white"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
            )}
            {contactInfo.phone && (
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#4D8685] shadow-md hover:bg-[#0A1817] hover:text-white"
                aria-label="Phone"
              >
                <FaPhone className="text-xl" />
              </a>
            )}
            {contactInfo.linkedin && (
              <a
                href={contactInfo.linkedin}
                target="_blank"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#4D8685] shadow-md hover:bg-[#0A1817] hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            )}
          </div>
        </div>

        <div className="border rounded-tr-3xl rounded-br-3xl p-4 sm:p-8 shadow-lg flex flex-col justify-center">
          <h2 className="text-center text-2xl font-semibold mb-6">
            Write A Message
          </h2>
          <form className="flex flex-col gap-5" onSubmit={sendMessage}>
            <input
              className="border rounded-lg px-5 py-3 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4D8685]"
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="border rounded-lg px-5 py-3 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4D8685]"
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="border rounded-lg px-5 py-3 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4D8685]"
              rows={6}
              placeholder="Your Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="rounded-full bg-[#4D8685] text-white py-3 w-full md:w-3/4 mx-auto flex items-center justify-center gap-2 hover:bg-[#376B6A] transition-all"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane className="text-lg" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
