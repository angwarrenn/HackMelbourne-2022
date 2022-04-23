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
        <CalendarWidget />
        <EventDetails />
        <TeamMembers />
      </Fragment>
    )
  };
  
export default Calendar;