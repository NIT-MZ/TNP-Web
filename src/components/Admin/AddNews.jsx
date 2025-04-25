import React, { useState } from "react";
import axios from "axios";

const AddNews = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
    paragraphContent: [""],
    tags: "",
  });

  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [paragraphImages, setParagraphImages] = useState([]);
  const [paragraphImagePreviews, setParagraphImagePreviews] = useState([]);

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (name === "paragraphContent") {
      const updated = [...formData.paragraphContent];
      updated[index] = value;
      setFormData({ ...formData, paragraphContent: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddParagraph = () => {
    setFormData({
      ...formData,
      paragraphContent: [...formData.paragraphContent, ""],
    });
  };

  const handleImageUpload = (e, isParagraph = false) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));

    if (isParagraph) {
      setParagraphImages((prev) => [...prev, ...files]);
      setParagraphImagePreviews((prev) => [...prev, ...previews]);
    } else {
      setImages((prev) => [...prev, ...files]);
      setImagePreviews((prev) => [...prev, ...previews]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("title", formData.title);
    data.append("content", formData.content);
    data.append("author", formData.author);
    data.append("category", formData.category);
    data.append("paragraphContent", JSON.stringify(formData.paragraphContent));
    data.append("tags", JSON.stringify(formData.tags.split(",").map(tag => tag.trim())));

    images.forEach((img) => data.append("images", img));
    paragraphImages.forEach((img) => data.append("paragraphImages", img));

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/news/add-news`,
        data,
        {
          withCredentials: true,
        }
      );
      alert("News submitted successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to submit news");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-2xl mt-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">📝 Add News Article</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="News Title"
        />

        <textarea
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Full Content"
          rows={5}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author Name"
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="News Category"
          />
        </div>

        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="Tags (comma-separated)"
        />

        <div>
          <label className="block font-semibold mb-2 text-gray-700">Main News Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleImageUpload(e, false)}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
          <div className="flex gap-4 mt-3 flex-wrap">
            {imagePreviews.map((src, i) => (
              <img key={i} src={src} alt={`preview-${i}`} className="w-24 h-24 object-cover rounded-md border" />
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2 text-gray-700">Paragraph Content</label>
          {formData.paragraphContent.map((para, index) => (
            <textarea
              key={index}
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="paragraphContent"
              value={para}
              onChange={(e) => handleChange(e, index)}
              placeholder={`Paragraph ${index + 1}`}
              rows={2}
            />
          ))}
          <button
            type="button"
            onClick={handleAddParagraph}
            className="text-sm bg-gray-100 px-4 py-1 rounded-lg hover:bg-gray-200 transition"
          >
            ➕ Add Paragraph
          </button>
        </div>

        <div className="mt-4">
          <label className="block font-semibold mb-2 text-gray-700">Paragraph Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleImageUpload(e, true)}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
          <div className="flex gap-4 mt-3 flex-wrap">
            {paragraphImagePreviews.map((src, i) => (
              <img key={i} src={src} alt={`paragraph-preview-${i}`} className="w-24 h-24 object-cover rounded-md border" />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-blue-700 transition"
        >
          🚀 Submit News
        </button>
      </form>
    </div>
  );
};

export default AddNews;
