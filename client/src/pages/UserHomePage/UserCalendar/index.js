import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { images } from "../../../assets";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "./UserCalendar.css";
import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Blood Drive!",
    allDay: true,
    start: new Date(2022, 6, 13),
    end: new Date(2022, 6, 20),
  },
  {
    title: "Food Drive!",
    allDay: true,
    start: new Date(2022, 6, 27),
    end: new Date(2022, 6, 29),
  },
  {
    title: "End of Grade Litter Gathering",
    allDay: false,
    start: new Date(2022, 6, 6),
    end: new Date(2022, 6, 8),
  },
];

const UserCalendarModal = ({ modalActive, hideModal }) => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  const addEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };
  return (
    <>
      <Modal size="lg" show={modalActive} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>My Event Calendar</Modal.Title>
        </Modal.Header>
        {/* <img src={images.icons.calendarImage} alt="calendar" />; */}
        <Calendar
          className="calendar"
          localizer={localizer}
          events={allEvents}
          startAccessor={events.start}
          endAccessor={events.end}
          style={{ height: 500, margin: "20px" }}
        />
        <Modal.Body></Modal.Body>
      </Modal>
    </>
  );
};

export default UserCalendarModal;
