import { useState } from "react";
import axios from "axios";

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    paragraph: "",
    images: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, images: files[0] });
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
    data.append("images", formData.images);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/events/create`, data,
      { withCredentials: true }
   
      );
      console.log(res);
      setMessage(res.data.message);
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
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        required
      />
      <textarea
        name="paragraph"
        placeholder="Event description"
        className="w-full p-2 border rounded"
        rows={4}
        onChange={handleChange}
        required
      />
      <input
        type="file"
        name="images"
        accept="image/*"
        className="w-full"
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Create Event
      </button>
      {message && <p className="text-center text-sm text-gray-700">{message}</p>}
    </form>
  );
};

export default EventForm;
