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
            <div className="grid-container">
                <DashboardHeader />
                <QuoteWidget />
                <CurrentProjects />
                <FriendsWidget />
                <NotesWidget />
                <TodayWidget />
            </div>
        </Fragment>
    )
}

export default Home;