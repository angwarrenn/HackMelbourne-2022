import { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function CalendarWidget() {
  const [state, setState] = useState({
    events: [
      // {
      //   start: moment().toDate(),
      //   end: moment().toDate(),
      //   title: "Some title",
      // },
    ],
  });

  return (
    <div className="calendarwidget">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={state.events}
        style={{ height: "79vh" }}
      />
    </div>
  );
}
