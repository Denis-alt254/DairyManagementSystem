function TaskCard({task}){
    return(
        <div className="flex flex-wrap gap-4 justify-center">
        <ul className="p-4 bg-white shadow rounded">
            <li className="rounded bg-violet-400 p-1 mt-2">Title: {task.title}</li>
            <li className="rounded bg-violet-400 p-1">Description: {task.description}</li>
            <li className="rounded bg-violet-400 p-1">Assigend To: {task.assignedTo}</li>
            <li className="rounded bg-violet-400 p-1">DueDate: {task.dueDate}</li>
            <li className="rounded bg-violet-400 p-1">Status: {task.status}</li>
        </ul>
        </div>
    )
}

export default TaskCard;