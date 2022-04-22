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
            <h1>Dashboard</h1>
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