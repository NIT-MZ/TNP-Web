import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/events.scss'

const events = [
  {
    id: 1,
    title: "Resume Revamp Workshop",
    date: "2024-07-15",
    description: "Description of Upcoming Event 1"
  },
  {
    id: 2,
    title: "Interview Mastery Session",
    date: "2024-05-20",
    description: "Description of Recent Event 1"
  },
  {
    id: 3,
    title: "Skills Bootcamp Series",
    date: "2024-08-10",
    description: "Description of Upcoming Event 2"
  },
  {
    id: 4,
    title: "Professional Networking Mixer",
    date: "2024-04-10",
    description: "Description of Recent Event 2"
  },
  {
    id: 5,
    title: "Career Counseling Sessions",
    date: "2024-04-10",
    description: "Description of Recent Event 2"
  },
  {
    id: 6,
    title: "Placement Prep Intensive",
    date: "2024-04-10",
    description: "Description of Recent Event 2"
  }
  ,
  {
    id: 7,
    title: "Career Fair Extravaganza",
    date: "2024-04-10",
    description: "Description of Recent Event 2"
  }
  ,
  {
    id: 8,
    title: "Internship Fair",
    date: "2024-04-10",
    description: "Description of Recent Event 2"
  },
  {
    id: 9,
    title: "Industry Insights Series",
    date: "2024-04-10",
    description: "Description of Recent Event 2"
  },
  {
    id: 10,
    title: "Company Tours",
    date: "2024-04-10",
    description: "Description of Recent Event 2"
  }
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' }).substring(0, 3);
  return (
    <div>
      <div style={{ color: "orange", fontWeight: "bold" }}>{day}</div>
      <div >{month}</div>
      <div className="day-underline"></div>
    </div>
  );
};


const EventsList = () => {
  const currentDate = new Date().toISOString().split("T")[0];

  const upcomingEvents = events.filter(event => event.date >= currentDate);
  const recentEvents = events.filter(event => event.date < currentDate);

  return (
    <div className="events-list">
      <div className="events-title">EVENTS</div>
      <div className="container">
        <h2 className="events-subtitle">Upcoming Event</h2>
        <div className="events-container">
          {upcomingEvents.map(event => (
            <div className="events-card" key={event.id}>
              <Link to={`/event/${event.id}`}>
                <div className="event-image-container" style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/carousel/event-dummy.jpg)`,
                }}></div>
                <div className="events-bottom-container">
                  <div className="date-container">{formatDate(event.date)}</div>
                  <div className="title-container">{event.title}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
      <h2 className="events-subtitle">Recent Events</h2>
        <div className="events-container">
          {recentEvents.map(event => (
            <div className="events-card" key={event.id}>
              <Link to={`/event/${event.id}`}>
                <div className="event-image-container" style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/carousel/event-dummy.jpg)`,
                }}></div>
                <div className="events-bottom-container">
                  <div className="date-container">{formatDate(event.date)}</div>
                  <div className="title-container">{event.title}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsList;
