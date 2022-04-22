import {
    TodaySched,
    ToDo,
} from './ComponentIndex'

export default function TodayWidget(){
    return (
        <div className="todaybar">
            <h2>Today</h2>
            <TodaySched />
            <h2>To-Do</h2>
            <ToDo />
        </div>
    );
}
