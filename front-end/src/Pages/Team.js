import { Fragment } from 'react';

// importing components
import {
  EventWidget,
  ContactWidget,
} from '../ScheduleComponents/ScheduleIndex'

const Team = () => {
    return(
      <Fragment>
        <EventWidget />
        <ContactWidget />
      </Fragment>
    )
  };
  
  export default Team;