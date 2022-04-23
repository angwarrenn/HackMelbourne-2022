import { AiOutlineSmile } from "react-icons/ai";

export default function ToDoWidget(){
    return (
        <div className="todolist">
            <h4>To-Do:</h4>
            <br></br><br></br><br></br><br></br>
            <h5>Nothing To Do!</h5>
            <br></br>
            <h6><AiOutlineSmile/></h6>
        </div>
    );
}
