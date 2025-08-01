import React, { useState, useEffect } from "react";
import "../stylesheets/events.scss";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom in={true} ref={ref} {...props} style={{ transitionDelay: "500ms" }} />;
});

// Static events list (same as you provided)
const staticEvents = [
  {
    id: 1,
    title: "National Space Day",
    date: "2024-08-23",
    description:
      "NIT  Mizoram is thrilled to celebrate National Space Day with students from various colleges and a distinguished ISRO speaker. The event will feature talks, quizzes, and interactive sessions exploring India's space journey and achievements. Don’t miss this unique opportunity to learn, engage, and network with pioneers shaping India's future in space and technology. Stay tuned for more details!",
    images: [
      `/assets/img/events/national-space-day.webp`,
    ],
  },
  {
    id: 2,
    title: "Seventh Convocation, Honoring the Graduates of 2023",
    date: "2024-01-17",
    description:
      "NIT Mizoram proudly celebrated the Seventh Convocation, a momentous occasion marking the achievements of the graduating class of 2023. This grand event honored the hard work, dedication, and accomplishments of our seniors as they embarked on new journeys beyond our campus. The Seventh Convocation was not just a ceremony but a celebration of the incredible journey of our graduates. It marked the end of one chapter and the beginning of another, filled with opportunities and challenges that our graduates are well-prepared to face. As our graduates step into the future, we extend our heartfelt congratulations and best wishes for their success. We are confident that the skills, knowledge, and values they have acquired at NIT Mizoram will guide them towards remarkable achievements and contributions to society. The convocation also emphasized the importance of lifelong connections. We encourage our alumni to stay connected with the NIT Mizoram community, sharing their experiences, achievements, and continuing to be a part of our ever-growing family.",
    images: [
      `/assets/img/events/convocation23.jpg`,
      `/assets/img/events/convocation23_1.jpg`,
    ],
  },
  {
    id: 3,
    title: "Farewell, Celebrating our Seniors of 2024",
    date: "2024-05-1",
    description:
      "In a touching and memorable ceremony, NIT Mizoram bid adieu to the graduating class of 2024. This farewell event was a heartfelt tribute to the seniors who have contributed immensely to our college and are now ready to embark on new journeys. The farewell event was not just a ceremony; it was a celebration of the bonds formed, the challenges overcome, and the milestones achieved. It was a night filled with laughter, tears, and applause, creating memories that will be cherished forever. While this farewell marks the end of an era, it also heralds the beginning of lifelong connections. We encourage our graduates to stay in touch, sharing their successes and experiences with the NIT Mizoram family.",
    images: [
      `/assets/img/events/farewell24.jpg`,
      `/assets/img/events/farewell24_1.jpg`,
      `/assets/img/events/farewell24_2.jpg`,
      `/assets/img/events/farewell24_3.jpg`,
    ],
  },
  {
    id: 4,
    title: "NIT Mizoram Shines at the G20 Event in Guwahati",
    date: "2023-02-3",
    description:
      "In an impressive showcase of talent and intellect, students from NIT Mizoram had the honor of participating in the prestigious G20 Event held in Guwahati. This significant occasion provided a platform for our students to engage with global leaders, share innovative ideas, and represent our institution on an international stage. Participation in the G20 Event was a proud moment for NIT Mizoram, reflecting the high caliber of our students and the quality of education they receive. It was an acknowledgment of their hard work, dedication, and the institution's commitment to fostering global leaders. The experiences and insights gained from the G20 Event will undoubtedly inspire and motivate our students as they continue their academic and professional journeys. We are confident that they will leverage this experience to contribute positively to global challenges and innovations. NIT Mizoram remains dedicated to providing opportunities for our students to excel and make their mark on the global stage. We look forward to more such participations, where our students can continue to shine and make us proud.",
    images: [
      `/assets/img/events/g20.jpg`,
      `/assets/img/events/g20_1.jpg`,
      `/assets/img/events/g20_2.jpg`,
      `/assets/img/events/g20_3.jpg`,
      `/assets/img/events/g20_4.jpg`,
    ],
  },
  {
    id: 5,
    title: "Khush Aamdeed, A Spectacular Celebration of Culture and Talent",
    date: "2022-11-08",
    description:
      "In November 2022, NIT Mizoram came alive with the vibrant hues and rhythms of Khush Aamdeed, our highly anticipated cultural fest. This dazzling event brought together students from all years and departments, showcasing their talents in an unforgettable celebration of creativity and camaraderie. Khush Aamdeed was a melting pot of talent, with students from all years and departments coming together to share their skills and passions, truly embodying the spirit of unity in diversity. Khush Aamdeed wasn't just an event; it was an experience that fostered friendships, celebrated diversity, and created memories that will be cherished for years to come. The enthusiasm and energy of the participants and the audience alike made this cultural fest a grand success.",
    images: [
      `/assets/img/events/khush_amdeed.jpg`,
      `/assets/img/events/khush_amdeed_1.jpg`,
      `/assets/img/events/khush_amdeed_2.jpg`,
      `/assets/img/events/khush_amdeed_3.jpg`,
      `/assets/img/events/khush_amdeed_4.jpg`,
      `/assets/img/events/khush_amdeed_5.jpg`,
      `/assets/img/events/khush_amdeed_6.jpg`,
      `/assets/img/events/khush_amdeed_7.jpg`,
      `/assets/img/events/khush_amdeed_8.jpg`,
      `/assets/img/events/khush_amdeed_9.jpg`,
      `/assets/img/events/khush_amdeed_10.jpg`,
      `/assets/img/events/khush_amdeed_11.jpg`,
      `/assets/img/events/khush_amdeed_12.jpg`,
      `/assets/img/events/khush_amdeed_13.jpg`,
      `/assets/img/events/khush_amdeed_14.jpg`,
      `/assets/img/events/khush_amdeed_15.jpg`,
      `/assets/img/events/khush_amdeed_16.jpg`,
      `/assets/img/events/khush_amdeed_17.jpg`,
      `/assets/img/events/khush_amdeed_18.jpg`,
      `/assets/img/events/khush_amdeed_19.jpg`,
      `/assets/img/events/khush_amdeed_20.jpg`,
      `/assets/img/events/khush_amdeed_21.jpg`,
      `/assets/img/events/khush_amdeed_22.jpg`,
      `/assets/img/events/khush_amdeed_23.jpg`,
      `/assets/img/events/khush_amdeed_24.jpg`,
    ],
  },
  {
    id: 6,
    title: "Celebrating 78th Independence Day",
    date: "2024-08-15",
    description:
      "Students of NIT Mizoram celebrated Independence Day with great enthusiasm. The event featured vibrant performances, patriotic speeches, and a flag hoisting ceremony, reflecting the spirit of unity and pride in our nation's freedom. It was a memorable occasion that showcased the students' dedication to honoring India's rich history and culture.",
    images: [
      `/assets/img/events/IMG_2603.JPG`,
      `/assets/img/events/independence.JPG`,
    ],
  },
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" }).substring(0, 3);
  return (
    <div>
      <div style={{ color: "orange", fontWeight: "bold", fontSize: "2rem" }}>{day}</div>
      <div>{month}</div>
      <div className="day-underline"></div>
    </div>
  );
};

const formatDateDialog = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" }).toUpperCase();
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const EventsList = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [mergedEvents, setMergedEvents] = useState([]);
  const [refresh, setRefresh] = useState(false); // optional: trigger re-fetch after new event added

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/events/get`);
        const backendEvents = res.data?.data || [];

        // Convert backend events to match static structure (add images array)
        const converted = backendEvents.map((e) => ({
          ...e,
          images: Array.isArray(e.photos) ? e.photos : e.photo ? [e.photo] : [],
        }));

        const combined = [...staticEvents, ...converted];
        const sorted = combined.sort((a, b) => new Date(b.date) - new Date(a.date));
        setMergedEvents(sorted);
      } catch (error) {
        console.error("Error fetching events from backend:", error);
        setMergedEvents(staticEvents);
      }
    };

    fetchEvents();
  }, [refresh]);

  const handleClickOpen = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  const upcomingEvents = mergedEvents.filter((event) => event.date >= currentDate);
  const recentEvents = mergedEvents.filter((event) => event.date < currentDate);

  return (
    <div className="events-list">
      <div className="events-title">STUDENT ACTIVITIES</div>

      
      {upcomingEvents.length > 0 && (
  <div className="container">
    <h2 className="events-subtitle">Upcoming Activities</h2>
    <div className="events-container">
      {upcomingEvents.map((event) => (
        <div
          className="Upcomingevents-card"
          key={event._id || event.id}
          onClick={() => handleClickOpen(event)}
        >
          <div
            className="event-image-container"
            style={{ backgroundImage: `url(${event.images[0]})` }}
          ></div>
          <div className="events-bottom-container">
            <div className="date-container">{formatDate(event.date)}</div>
            <div className="title-container">
              <div>{event.title}</div>
              <div className="know-text">Know More</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

    

      <div className="container">
        <h2 className="events-subtitle">Recent Activities</h2>
        <div className="events-container">
          {recentEvents.map((event) => (
            <div
              className="events-card"
              key={event._id || event.id}
              onClick={() => handleClickOpen(event)}
            >
              <div
                className="event-image-container "
                style={{ backgroundImage: `url(${event.images[0]})` }}
              ></div>
              <div className="events-bottom-container">
                <div className="date-container">{formatDate(event.date)}</div>
                <div className="title-container">
                  <div>{event.title}</div>
                  <div className="know-text">Know More</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog fullWidth maxWidth={"sm"} open={open} TransitionComponent={Transition} onClose={handleClose}>
        <DialogContent dividers style={{ padding: 0, overflow: "hidden", height: "300px" }}>
          {selectedEvent && (
            <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false} showStatus={false}>
              {selectedEvent.images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={selectedEvent.title} className="carousel-image h-92" />
                </div>
              ))}
            </Carousel>
          )}
        </DialogContent>

        {/* Tailwind styled description area */}
        <DialogContent
          dividers
          className="bg-yellow-50 px-6 pt-4 pb-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            {selectedEvent?.title}
          </h2>
          <p className="text-sm text-gray-600 mb-4 font-medium">
            {formatDateDialog(selectedEvent?.date)}
          </p>

          <div className="bg-white rounded-lg shadow-inner px-5 py-4 max-h-64 overflow-y-auto text-gray-800 text-sm leading-relaxed space-y-3">
            {(selectedEvent?.description || selectedEvent?.paragraph || "")
              .split("\n")
              .map((line, index) => (
                <p key={index}>{line}</p>
              ))}
          </div>
        </DialogContent>

        <DialogActions style={{ backgroundColor: "#b7f484" }}>
          <Button onClick={handleClose} style={{ color: "#24262b", fontWeight: "bold" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EventsList;
