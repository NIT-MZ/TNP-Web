import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

const UserLogin = () => {
  const { getUserDetail } = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // Store error messages
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage(""); // Clear error message on input change
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/users/login`,
        loginData,
        { withCredentials: true }
      );
      console.log(response.status)
      console.log(response)

      if (response.status >= 200 && response.status < 300) {
        getUserDetail(response.data);
        navigate("/adminPage");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Invalid login credentials."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3a6e] via-[#264b83] to-[#3e6db5] p-4">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-2xl relative overflow-hidden">
        {/* Top Decorative Border */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#3e6db5] to-[#1e3a6e]"></div>

        <div className="flex justify-center mb-6">
          <img 
            src="https://res.cloudinary.com/dwo3wa6k3/image/upload/f_auto,q_auto/v1774089497/tnplogo2_m7uw1r.png" 
            alt="TNP Logo" 
            className="h-16 w-16 object-contain" 
          />
        </div>
        
        <h1 className="text-3xl font-bold text-[#1e3a6e] text-center mb-2" style={{ fontFamily: "'Raleway', sans-serif" }}>
          Admin Login
        </h1>
        <p className="text-center text-gray-500 text-sm mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Sign in to access your dashboard
        </p>

        <form onSubmit={handleFormSubmit} className="space-y-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginData.username}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:ring-2 focus:ring-[#3e6db5] focus:border-[#3e6db5] focus:outline-none transition shadow-sm"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:ring-2 focus:ring-[#3e6db5] focus:border-[#3e6db5] focus:outline-none transition shadow-sm"
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm text-center font-medium bg-red-50 p-2 rounded">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-[#3e6db5] to-[#1e3a6e] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-[#264b83] hover:to-[#152a52] transition-all transform hover:-translate-y-0.5"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Forgot password?{" "}
          <a href="#" className="text-[#3e6db5] font-medium hover:underline transition-colors">
            Reset here
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
