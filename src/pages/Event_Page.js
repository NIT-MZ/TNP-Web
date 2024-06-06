import React from "react";
import { useParams } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Upcoming Event 1",
    date: "2024-07-15",
    description: "Description of Upcoming Event 1"
  },
  {
    id: 2,
    title: "Recent Event 1",
    date: "2024-05-20",
    description: "Description of Recent Event 1"
  },
  {
    id: 3,
    title: "Upcoming Event 2",
    date: "2024-08-10",
    description: "Description of Upcoming Event 2"
  },
  {
    id: 4,
    title: "Recent Event 2",
    date: "2024-04-10",
    description: "Description of Recent Event 2"
  }
];

const EventPage = () => {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-page">
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>{event.description}</p>
    </div>
  );
};

export default EventPage;
