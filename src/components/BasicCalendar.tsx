import moment from "moment";

import Calendar from "./Calendar";

const events = [
  {
    start: moment("2024-02-16T10:00:00").toDate(),
    end: moment("2024-02-16T10:30:00").toDate(),
    title: "MRI Registrat",
  },
  {
    start: moment("2024-02-16T10:00:00").toDate(),
    end: moment("2024-02-16T15:30:00").toDate(),
    title: "MRI Registration",
  },
  {
    start: moment("2024-02-16T10:00:00").toDate(),
    end: moment("2024-02-16T10:30:00").toDate(),
    title: "MRI Registration",
  },
  {
    start: moment("2024-02-16T10:00:00").toDate(),
    end: moment("2024-02-16T10:30:00").toDate(),
    title: "MRI Registration",
  },
  {
    start: moment("2024-02-18T10:00:00").toDate(),
    end: moment("2024-02-18T10:30:00").toDate(),
    title: "MRI Registration",
  },
];

export default function BasicCalendar() {
  return <Calendar events={events} />;
}
