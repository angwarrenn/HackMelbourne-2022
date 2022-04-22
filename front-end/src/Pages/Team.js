import { Fragment } from 'react';

// importing components
import {
  EventWidget,
  ContactWidget,
} from '../ScheduleComponents/ScheduleIndex'

const Team = () => {
    return(
      <Fragment>
        <h1>Add Schedule</h1>
        <EventWidget />
        <ContactWidget />
      </Fragment>
    )
  };
  
  export default Team;