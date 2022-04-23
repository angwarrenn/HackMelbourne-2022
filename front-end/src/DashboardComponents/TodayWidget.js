import {
    TodaySched,
    ToDo,
} from './ComponentIndex'

export default function TodayWidget(){
    return (
        <div className="todaybar">
            <h3>Today</h3>
            <TodaySched />
            <ToDo />
        </div>
    );
}
