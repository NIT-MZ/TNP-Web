import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewsIconPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://geolocation-nokl.onrender.com/news/getNews`
        );

        setNews(response.data.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <div className="flex gap-6">
        {/* Left Side: Latest Updates */}
        <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Latest updates
          </h2>
          <div className="space-y-4">
            {news.map((item, index) => (
              <Link to={`/NewsArcheive/${item._id}`} key={item._id}>
                <div className="flex items-center gap-4 border-b-2 pb-4 mb-4 border-gray-300">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md shadow-sm"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: News Icons Page */}
        <div className="w-2/3">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            2024 News
          </h2>
          <div className="space-y-6">
            {news.map((item) => (
              <Link to={`/NewsArcheive/${item._id}`} key={item._id}>
                <div className="flex gap-4 bg-white p-4 rounded-lg shadow-lg border border-gray-300">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-52 h-52 object-cover rounded-md shadow-sm "
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-700">
                      {item.content
                        ? `${item.content.substring(0, 100)}...`
                        : "No description available."}
                    </p>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
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
