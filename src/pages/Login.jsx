import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (email === import.meta.env.VITE_LOGIN_EMAIL && password === import.meta.env.VITE_LOGIN_PASSWORD) 
      {
        login()
      toast.success("Login successful!");
      navigate("/dashboard"); 
    } else {
      toast.error("Unauthorized! Check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A1817] text-white">
      <div className="border border-[#376B6A] p-8 rounded-lg shadow-lg w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 pw rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#4D8685]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#4D8685]"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-[#4D8685] py-2 rounded-lg text-white font-medium hover:bg-[#376B6A] transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
