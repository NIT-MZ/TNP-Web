import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewsIconPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://geolocation-nokl.onrender.com/api/news/get-news`
        );
        setNews(response.data.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto p-6  sm:mt-12 bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Latest Updates Section */}
        <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-800">
            Latest Updates
          </h2>
          <div className="space-y-4">
            {news.map((item) => (
              <Link to={`/NewsArcheive/${item._id}`} key={item._id}>
                <div className="flex items-center gap-4 border-b-2 pb-4 mb-4 border-gray-300">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-12 h-12 lg:w-16 lg:h-16 object-cover rounded-md shadow-sm"
                  />
                  <div>
                    <h3 className="text-sm lg:text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* News Icons Section */}
        <div className="w-full lg:w-2/3 bg-white p-4 rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-gray-800">
            2024 News
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {news.map((item) => (
              <Link to={`/NewsArcheive/${item._id}`} key={item._id}>
                <div className="flex flex-col sm:flex-row gap-4 bg-white p-3 rounded-lg shadow-lg border border-gray-300">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full sm:w-1/3 lg:w-52 h-40 object-cover rounded-md shadow-sm"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg lg:text-2xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-700">
                      {item.content
                        ? `${item.content.substring(0, 100)}...`
                        : "No description available."}
                    </p>
                    <button className="mt-2 px-3 py-2 lg:px-4 lg:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Find Out More
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsIconPage;
