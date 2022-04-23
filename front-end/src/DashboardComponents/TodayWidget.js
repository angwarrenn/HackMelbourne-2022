import {
    TodaySched,
    ToDo,
} from './ComponentIndex'

export default function TodayWidget(){
    return (
        <div className="todaybar">
            <h3>Sun, 24 Apr</h3>
            <TodaySched />
            <ToDo />
        </div>
    );
}
