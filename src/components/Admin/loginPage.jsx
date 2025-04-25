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
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-200 text-center mb-6">
          Welcome Back
        </h1>

        <form onSubmit={handleFormSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginData.username}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-700 text-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none transition"
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
              className="w-full px-4 py-3 bg-gray-700 text-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none transition"
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gray-600 text-gray-200 font-semibold rounded-md hover:bg-gray-500 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400">
          Forgot password?{" "}
          <a href="#" className="text-gray-300 hover:underline">
            Reset here
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
