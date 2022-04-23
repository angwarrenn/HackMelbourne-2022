import { Fragment } from 'react';

// importing components
import {
  EventWidget,
  EventDets,
  ContactWidget,
  AddMeetTime,
} from '../ScheduleComponents/ScheduleIndex'

const Team = () => {
    return(
      <Fragment>
        <EventWidget />
        <EventDets />
        <ContactWidget />
      </Fragment>
    )
  };
  
  export default Team;