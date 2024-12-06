import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const NewsDetailPage = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await axios.get(
          `https://geolocation-nokl.onrender.com/news/getNews/${id}`
        );
        setNewsItem(response.data.data);
      } catch (error) {
        console.error("Error fetching news item:", error);
      }
    };

    fetchNewsItem();
  }, [id]);

  if (!newsItem) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-xl text-gray-600 animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="text-blue-500 mb-4 hover:underline"
        >
          &larr; Back
        </button>
        <img
          src={newsItem.images?.[0] || "https://via.placeholder.com/800x400"}
          alt={newsItem.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {newsItem.title}
          </h1>
          <p className="text-gray-600 mb-6">{newsItem.content}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-8">
            <span>
              <strong>Author:</strong> {newsItem.author}
            </span>
            <span>
              <strong>Category:</strong> {newsItem.category}
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Highlights
          </h2>
          <div className="space-y-8">
            {newsItem.paragraphContent.map((paragraph, index) => (
              <div key={index} className="flex flex-col gap-4">
                <img
                  src={newsItem.paragraphImages?.[index] || ""}
                  alt={`Paragraph ${index + 1}`}
                  className="rounded-lg shadow-md"
                />
                <p className="text-gray-700">{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
