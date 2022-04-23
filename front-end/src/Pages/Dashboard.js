import { Fragment } from "react";

//importing components
import {
    QuoteWidget,
    CurrentProjects,
    FriendsWidget,
    NotesWidget,
    DashboardHeader,
    TodayWidget,
} from '../DashboardComponents/ComponentIndex'

const Home = () => {
    return(
        <Fragment>
            <DashboardHeader />
            <QuoteWidget />
            <CurrentProjects />
            <FriendsWidget />
            <NotesWidget />
            <TodayWidget />
        </Fragment>
    )
}

export default Home;