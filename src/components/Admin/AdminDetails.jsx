import React, { useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";
import {
  FaHome,
  FaHeadset,
  FaShoppingCart,
  FaHeart,
  FaUserCircle,
  FaUser,
  FaPowerOff,
} from "react-icons/fa";

const AdminPage = () => {
  const { userDetail, setUserDetail } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const validateRefreshToken = async () => {
      if (!userDetail) return;

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/v1/users/refresh-token`,
          {},
          { withCredentials: true }
        );

        const { accessToken } = response.data;
        if (accessToken) {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${accessToken}`;
        }
      } catch (error) {
        console.error("Error validating refresh token:", error);
        setUserDetail(null);
        navigate("/login");
      }
    };

    if (userDetail) {
      validateRefreshToken();
    }
  }, [userDetail, navigate]); 

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-4 p-6">
      <div className="md:w-1/3 flex flex-col items-center">
        {userDetail ? (
          <div key={userDetail?.id} className="text-yellow-200 w-full max-w-lg">
            {/* User Info Card */}
            <div className="flex items-center bg-white p-4 rounded-lg shadow-md border">
             
              <div className="ml-4">
                <p className="text-gray-600 text-sm">Hello,</p>
                <p className="text-lg font-bold text-gray-900">
                  {userDetail?.data?.username ||
                    userDetail?.data?.user?.username ||
                    "Guest"}
                </p>
              </div>
            </div>

            <div className="mt-3 bg-white shadow-md border rounded-lg p-4">
              <h2 className="text-gray-700 font-bold text-lg mb-3">
                Navigation
              </h2>
              <div className="space-y-3">
               
                  <>


                    <Link
                      to="//addEvent"
                      className="flex items-center text-gray-600 font-semibold hover:text-indigo-500 transition"
                    >
                      <FaUser className="text-purple-500 mr-2" />
                      Add Event
                    </Link>

                    <Link
                      to="/addNews"
                      className="flex items-center text-gray-600 font-semibold hover:text-red-600 transition"
                    >
                      <FaHeadset className="text-purple-500 mr-2" />
                      Add News
                    </Link>

                   




                    <Link
                      to="/logout"
                      className="flex items-center text-gray-600 font-semibold hover:text-red-600 transition"
                    >
                      <FaPowerOff className="text-blue-500 mr-2" />
                      Logout
                    </Link>
     

      
             </>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-white">
            <h2 className="text-lg font-bold">You are not logged in</h2>
            <Link
              to="/userLogin"
              className="block py-2 mt-4 bg-purple-600 px-4 text-center text-white rounded hover:bg-indigo-500 transition"
            >
              Log In
            </Link>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="md:w-2/3">
        <div className="bg-white shadow-md border rounded-lg p-6">
          <h2 className="text-gray-700 font-bold text-lg mb-3">User Details</h2>
          <p className="text-gray-700 font-semibold">
            Name:{" "}
            <span className="text-gray-900 font-medium">
              {userDetail?.data?.fullName ||
                userDetail?.data?.user?.fullName ||
                "N/A"}
            </span>
          </p>
          <p className="text-gray-700 font-semibold mt-2">
            Email:{" "}
            <span className="text-gray-900 font-medium">
              {userDetail?.data?.email ||
                userDetail?.data?.user?.email ||
                "N/A"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
