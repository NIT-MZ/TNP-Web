import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    paragraph: "",
    images: [],
  });
  const navigate=useNavigate();

  const [previewImages, setPreviewImages] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      const newImages = Array.from(files);

      // Append new images to existing ones
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newImages],
      }));

      // Also append previews
      const newPreviews = newImages.map((file) => URL.createObjectURL(file));
      setPreviewImages((prev) => [...prev, ...newPreviews]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("date", formData.date);
    data.append("paragraph", formData.paragraph);

    formData.images.forEach((image) => {
      data.append("images", image); // sending multiple images
    });

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/events/create`,
        data,
        { withCredentials: true }
      );

      setMessage(res.data.message);
      setFormData({
        title: "",
        date: "",
        paragraph: "",
        images: [],
      });
      setPreviewImages([]);
      navigate("/events")
    } catch (err) {
      setMessage(err.response?.data?.message || "Error creating event");
    }
  };

  return (
    <form
      className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow space-y-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold">Create Event</h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full p-2 border rounded"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        className="w-full p-2 border rounded"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <textarea
        name="paragraph"
        placeholder="Event description"
        className="w-full p-2 border rounded"
        rows={4}
        value={formData.paragraph}
        onChange={handleChange}
        required
      />
      <input
        type="file"
        name="images"
        accept="image/*"
        className="w-full"
        onChange={handleChange}
        multiple
      />

      {/* Preview selected images */}
      {previewImages.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {previewImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`preview-${index}`}
              className="w-full h-32 object-cover rounded-lg border"
            />
          ))}
        </div>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
      >
        Create Event
      </button>

      {message && (
        <p className="text-center text-sm text-gray-700 mt-4">{message}</p>
      )}
    </form>
  );
};

export default EventForm;
