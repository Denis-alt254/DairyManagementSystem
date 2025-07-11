import { updateTask } from "../services/taskService";

function TaskCard({task, onStatusUpdate}){

    return(
        <div className="div">
            <ul className="ul">
                <input type="checkbox" onClick={()=>{updateTask(task.status="done")}} />
                <li className="li mt-2">Title: {task.title}</li>
                <li className="li">Description: {task.description}</li>
                <li className="li">Assigend To: {task.assignedTo}</li>
                <li className="li">DueDate: {task.dueDate}</li>
                <li className="li">Status: {task.status}</li>
            </ul>
        </div>
    )
}

export default TaskCard;