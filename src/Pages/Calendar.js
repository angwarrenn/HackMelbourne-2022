import { Fragment } from "react";

//importing components
import {
  CalendarWidget,
  EventDetails,
  TeamMembers,

} from '../CalendarComponents/CalComponents'

const Calendar = () => {
    return (
      <Fragment>
        <h1>Calendar</h1>
        <CalendarWidget />
        <EventDetails />
        <TeamMembers />
      </Fragment>
    )
  };
  
export default Calendar;