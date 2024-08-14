import React, { useState } from "react";
import "../stylesheets/events.scss";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Zoom in={true} ref={ref} {...props} style={{ transitionDelay: "500ms" }} />
  );
});

const events = [
  {
    id: 1,
    title: "National Space Day",
    date: "2024-08-23",
    description:
      "NIT  Mizoram is thrilled to celebrate National Space Day with students from various colleges and a distinguished ISRO speaker. The event will feature talks, quizzes, and interactive sessions exploring India's space journey and achievements. Don’t miss this unique opportunity to learn, engage, and network with pioneers shaping India's future in space and technology. Stay tuned for more details!",
    images: [
      `${process.env.PUBLIC_URL}/assets/img/events/national-space-day.webp`,
    ],
  },
  {
    id: 2,
    title: "Seventh Convocation, Honoring the Graduates of 2023",
    date: "2024-01-17",
    description:
      "NIT Mizoram proudly celebrated the Seventh Convocation, a momentous occasion marking the achievements of the graduating class of 2023. This grand event honored the hard work, dedication, and accomplishments of our seniors as they embarked on new journeys beyond our campus. The Seventh Convocation was not just a ceremony but a celebration of the incredible journey of our graduates. It marked the end of one chapter and the beginning of another, filled with opportunities and challenges that our graduates are well-prepared to face. As our graduates step into the future, we extend our heartfelt congratulations and best wishes for their success. We are confident that the skills, knowledge, and values they have acquired at NIT Mizoram will guide them towards remarkable achievements and contributions to society. The convocation also emphasized the importance of lifelong connections. We encourage our alumni to stay connected with the NIT Mizoram community, sharing their experiences, achievements, and continuing to be a part of our ever-growing family.",
    images: [
      `${process.env.PUBLIC_URL}/assets/img/events/convocation23.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/convocation23_1.jpg`,
    ],
  },
  {
    id: 3,
    title: "Farewell, Celebrating our Seniors of 2024",
    date: "2024-05-1",
    description:
      "In a touching and memorable ceremony, NIT Mizoram bid adieu to the graduating class of 2024. This farewell event was a heartfelt tribute to the seniors who have contributed immensely to our college and are now ready to embark on new journeys. The farewell event was not just a ceremony; it was a celebration of the bonds formed, the challenges overcome, and the milestones achieved. It was a night filled with laughter, tears, and applause, creating memories that will be cherished forever. While this farewell marks the end of an era, it also heralds the beginning of lifelong connections. We encourage our graduates to stay in touch, sharing their successes and experiences with the NIT Mizoram family.",
    images: [
      `${process.env.PUBLIC_URL}/assets/img/events/farewell24.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/farewell24_1.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/farewell24_2.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/farewell24_3.jpg`,
    ],
  },
  {
    id: 4,
    title: "NIT Mizoram Shines at the G20 Event in Guwahati",
    date: "2023-02-3",
    description:
      "In an impressive showcase of talent and intellect, students from NIT Mizoram had the honor of participating in the prestigious G20 Event held in Guwahati. This significant occasion provided a platform for our students to engage with global leaders, share innovative ideas, and represent our institution on an international stage. Participation in the G20 Event was a proud moment for NIT Mizoram, reflecting the high caliber of our students and the quality of education they receive. It was an acknowledgment of their hard work, dedication, and the institution's commitment to fostering global leaders. The experiences and insights gained from the G20 Event will undoubtedly inspire and motivate our students as they continue their academic and professional journeys. We are confident that they will leverage this experience to contribute positively to global challenges and innovations. NIT Mizoram remains dedicated to providing opportunities for our students to excel and make their mark on the global stage. We look forward to more such participations, where our students can continue to shine and make us proud.",
    images: [
      `${process.env.PUBLIC_URL}/assets/img/events/g20.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/g20_1.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/g20_2.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/g20_3.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/g20_4.jpg`,
    ],
  },
  {
    id: 5,
    title: "Khush Aamdeed, A Spectacular Celebration of Culture and Talent",
    date: "2022-11-08",
    description:
      "In November 2022, NIT Mizoram came alive with the vibrant hues and rhythms of Khush Aamdeed, our highly anticipated cultural fest. This dazzling event brought together students from all years and departments, showcasing their talents in an unforgettable celebration of creativity and camaraderie. Khush Aamdeed was a melting pot of talent, with students from all years and departments coming together to share their skills and passions, truly embodying the spirit of unity in diversity. Khush Aamdeed wasn't just an event; it was an experience that fostered friendships, celebrated diversity, and created memories that will be cherished for years to come. The enthusiasm and energy of the participants and the audience alike made this cultural fest a grand success.",
    images: [
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_1.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_2.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_3.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_4.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_5.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_6.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_7.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_8.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_9.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_10.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_11.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_12.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_13.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_14.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_15.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_16.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_17.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_18.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_19.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_20.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_21.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_22.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_23.jpg`,
      `${process.env.PUBLIC_URL}/assets/img/events/khush_amdeed_24.jpg`,
    ],
  },
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date
    .toLocaleString("default", { month: "long" })
    .substring(0, 3);
  return (
    <div>
      <div style={{ color: "orange", fontWeight: "bold", fontSize: "2rem" }}>
        {day}
      </div>
      <div>{month}</div>
      <div className="day-underline"></div>
    </div>
  );
};

const formatDateDialog = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date
    .toLocaleString("default", { month: "short" })
    .toUpperCase(); // Format month to three-letter abbreviation in uppercase
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const EventsList = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const upcomingEvents = sortedEvents.filter(
    (event) => event.date >= currentDate
  );
  const recentEvents = sortedEvents.filter((event) => event.date < currentDate);

  const handleClickOpen = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="events-list">
      <div className="events-title">STUDENT ACTIVITIES</div>
      <div className="container">
        <h2 className="events-subtitle">Upcoming Activities</h2>
        <div className="events-container">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <div
                className="Upcomingevents-card"
                key={event.id}
                onClick={() => handleClickOpen(event)}
              >
                <div
                  className="event-image-container"
                  style={{
                    backgroundImage: `url(${event.images[0]})`,
                  }}
                ></div>
                <div className="events-bottom-container">
                  <div className="date-container">{formatDate(event.date)}</div>
                  <div className="title-container">
                    <div className="">{event.title}</div>
                    <div className="know-text">Know More</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-upcoming-event-card">
              <div className="lottie-container">
                <lottie-player
                  src="https://lottie.host/ecbb1104-774f-4d5a-802c-755c563b54ea/aQAHbWN2rE.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className="lottie-bottom-container">
                <div className="bold">No Upcoming Event at this time</div>
                <div className="">Stay Tuned</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container">
        <h2 className="events-subtitle">Recent Activities</h2>
        <div className="events-container">
          {recentEvents.map((event) => (
            <div
              className="events-card"
              key={event.id}
              onClick={() => handleClickOpen(event)}
            >
              <div
                className="event-image-container"
                style={{
                  backgroundImage: `url(${event.images[0]})`,
                }}
              ></div>
              <div className="events-bottom-container">
                <div className="date-container">{formatDate(event.date)}</div>
                <div className="title-container">
                  <div className="">{event.title}</div>
                  <div className="know-text">Know More</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <DialogContent
          dividers
          style={{ padding: "0", overflow: "hidden", height: "300px" }}
        >
          {selectedEvent && (
            <Carousel
              autoPlay
              interval={2000}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              className="custom-carousel"
            >
              {selectedEvent.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={selectedEvent.title}
                    style={{ width: "100%" }}
                    className="carousel-image"
                  />
                </div>
              ))}
            </Carousel>
          )}
        </DialogContent>
        <DialogContent
          dividers
          style={{ textAlign: "justify", backgroundColor: "#fff1c8" }}
        >
          <DialogTitle style={{ padding: 0, fontWeight: "bold" }}>
            {selectedEvent ? selectedEvent.title : ""}
          </DialogTitle>
          <DialogTitle style={{ padding: 0, fontWeight: "bold" }}>
            {selectedEvent ? formatDateDialog(selectedEvent.date) : ""}
          </DialogTitle>
          {selectedEvent ? selectedEvent.description : ""}
        </DialogContent>
        <DialogActions style={{ backgroundColor: "#b7f484" }}>
          <Button
            style={{ color: "#24262b", fontWeight: "bold" }}
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EventsList;
