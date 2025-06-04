import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [editId, setEditId] = useState(null);

  // Edit‐mode state for the currently‐edited event:
  const [formData, setFormData] = useState({
    title: "",
    paragraph: "",
    date: "",
    photos: [],        // current photo URLs
    removeImages: [], // URLs to remove
    newFiles: [],      // File objects to upload
  });

  // Fetch all events once on mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Adjust to your actual GET‐all-events endpoint.
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/events/get`
        );
        setEvents(res.data.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, []);

  // When “Edit” is clicked, populate formData with that event’s data
  const handleEditClick = (event) => {
    setEditId(event._id);

    setFormData({
      title: event.title || "",
      paragraph: event.paragraph || event.description || "",
      date: event.date ? event.date.substring(0, 10) : "",
      photos: Array.isArray(event.photos) ? [...event.photos] : [],
      removeImages: [], // start empty
      newFiles: [],     // start empty
    });
  };

  // Handle text/input changes (title, paragraph, date)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Remove an existing photo from the “current” list and mark it in removeImages
  const handleImageRemove = (index) => {
    const urlToRemove = formData.photos[index];
    // 1) Add this URL to removeImages array
    // 2) Remove it from displayed photos[]
    setFormData((prev) => {
      const updatedPhotos = [...prev.photos];
      updatedPhotos.splice(index, 1);

      return {
        ...prev,
        photos: updatedPhotos,
        removeImages: [...prev.removeImages, urlToRemove],
      };
    });
  };

  // Handle user selecting new files to upload
  const handleFileChange = (e) => {
    // e.target.files is a FileList → convert to Array
    const filesArr = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      newFiles: filesArr,
    }));
  };

  // When “Save” is clicked
  const handleUpdate = async () => {
    if (!editId) return;
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("date", formData.date);
      data.append("paragraph", formData.paragraph);

      // Append each URL that should be removed
      formData.removeImages.forEach((url) => {
        data.append("removeImages", url);
      });

      // Append each newly‐selected file under field name "images"
      formData.newFiles.forEach((fileObj) => {
        data.append("images", fileObj);
      });

      // Call your existing backend route:
      // PUT /api/events/update/:id
      await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/events/update/${editId}`,
        data,
        {
         withCredentials: true,
        }
      );

      alert("Event updated successfully.");
      // Refresh the page or re‐fetch
      window.location.reload();
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update event.");
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <h2>Manage Events</h2>

      {events.map((event) => (
        <div
          key={event._id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          {editId === event._id ? (
            // ─── EDIT MODE ───────────────────────────────────────────────────────
            <div>
              <label style={{ display: "block", marginBottom: "0.25rem" }}>
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginBottom: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />

              <label style={{ display: "block", marginBottom: "0.25rem" }}>
                Description (paragraph)
              </label>
              <textarea
                name="paragraph"
                value={formData.paragraph}
                onChange={handleChange}
                rows={4}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginBottom: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  resize: "vertical",
                }}
              />

              <label style={{ display: "block", marginBottom: "0.25rem" }}>
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginBottom: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />

              {/* ── Show existing photos with “×” button to remove ──────────────── */}
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem" }}>
                  Existing Images
                </label>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {formData.photos.map((photoUrl, idx) => (
                    <div
                      key={idx}
                      style={{
                        position: "relative",
                        width: "100px",
                        height: "100px",
                        flexShrink: 0,
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={photoUrl}
                        alt={`event-img-${idx}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => handleImageRemove(idx)}
                        style={{
                          position: "absolute",
                          top: "2px",
                          right: "2px",
                          background: "rgba(255,0,0,0.8)",
                          border: "none",
                          color: "#fff",
                          borderRadius: "50%",
                          width: "20px",
                          height: "20px",
                          cursor: "pointer",
                          fontSize: "14px",
                          lineHeight: "20px",
                          textAlign: "center",
                          padding: 0,
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  {formData.photos.length === 0 && (
                    <div style={{ color: "#666" }}>No existing images</div>
                  )}
                </div>
              </div>

              {/* ── New file input ──────────────────────────────────────────────── */}
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: "0.25rem" }}>
                  Add New Images
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                />
                {formData.newFiles.length > 0 && (
                  <div style={{ marginTop: "0.5rem", color: "#555" }}>
                    {formData.newFiles.length} file
                    {formData.newFiles.length > 1 ? "s" : ""} selected
                  </div>
                )}
              </div>

              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button
                  onClick={handleUpdate}
                  style={{
                    padding: "0.5rem 1rem",
                    background: "#4caf50",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Save
                </button>
                <button
                  onClick={() => setEditId(null)}
                  style={{
                    padding: "0.5rem 1rem",
                    background: "#e0e0e0",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            // ─── VIEW MODE ──────────────────────────────────────────────────────
            <>
              <h3 style={{ margin: "0 0 0.5rem" }}>{event.title}</h3>
              <p style={{ margin: "0 0 0.25rem" }}>{event.paragraph || event.description}</p>
              <p style={{ margin: "0 0 0.5rem", color: "#555" }}>
                <strong>Date:</strong> {event.date.substring(0, 10)}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  marginBottom: "0.75rem",
                }}
              >
                {Array.isArray(event.photos) && event.photos.length > 0 ? (
                  event.photos.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt={`event-thumb-${i}`}
                      width="80"
                      height="80"
                      style={{ objectFit: "cover", borderRadius: "4px" }}
                    />
                  ))
                ) : (
                  <div style={{ color: "#666" }}>No images</div>
                )}
              </div>

              <button
                onClick={() => handleEditClick(event)}
                style={{
                  padding: "0.5rem 1rem",
                  background: "#1976d2",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManageEvents;
