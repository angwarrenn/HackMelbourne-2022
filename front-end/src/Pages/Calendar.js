import { Fragment } from "react";

//importing components
import {
  CalendarWidget,

} from '../CalendarComponents/CalComponents'

import {
  AddMeetTime,
} from '../ScheduleComponents/ScheduleIndex'

const Calendar = () => {
    return (
      <Fragment>
        <CalendarWidget />
        <AddMeetTime />
      </Fragment>
    )
  };
  
export default Calendar;