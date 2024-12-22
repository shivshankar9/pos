import React from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="eventCard">
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.description}</p>
      <button className="registerButton">Register</button>
    </div>
  );
};

export default EventCard;
