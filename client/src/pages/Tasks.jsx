import { useEffect, useState } from "react";
import { createTask, deleteTask, getTasks, updateTask } from "../services/taskService";
import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";

export default function Tasks(){
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async() => {
            try {
                const response = await getTasks();
                setTasks(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                alert("Error fetching Tasks.");
                setLoading(false);
            }
        }
        fetchTasks();
    }, []);

    if (loading) return <p>Loading Tasks...</p>

    return(
        <>
        <h1 className="h1">Tasks</h1>
        <div className="divButton">
            <button className="button"><Link className="p-3" to="/addtask">AddTask</Link></button>
            <button className="button"><Link className="p-3" to="/updatedeletetasks">Update/Delete</Link></button>
        </div>
        <div className="div">
            {tasks.length > 0 ? (tasks.map(task => <TaskCard key={task._id} task={task}/>)):(<p>Their are no Tasks. Add some.</p>)}
        </div>
        </>
    )
};

export function AddTasksForm({onTaskAdded}){
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        assignedTo: "",
        dueDate: "",
        status: ""
    });

    const handleformChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await createTask(formData);
            onTaskAdded();
            setFormData({
                title: "",
                description: "",
                assignedTo: "",
                dueDate: "",
                status: ""
            });
        } catch (error) {
            console.error("Error Adding A Taks", error)
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input className="input mt-2" name="title" placeholder="Title" value={formData.title} onChange={handleformChange}/>
                <input className="input" name="description" placeholder="Description" value={formData.description} onChange={handleformChange}/>
                <input className="input" name="assignedTo" placeholder="AssignedTo" value={formData.assignedTo} onChange={handleformChange}/>
                <input className="input" name="dueDate" placeholder="DueDate" value={formData.dueDate} onChange={handleformChange}/>
                <input className="input" name="status" placeholder="Status" value={formData.status} onChange={handleformChange}/>
                <button type="submit" className="button">AddTask</button>
            </form>
        </div>
    )
};

export const UpdateAndDeleteTask = ({task, onUpdate}) => {
    const [editing, setEditing] = useState(true);
    const [editedTask, setEditedTask] = useState({...task});

    const handleChange = (e) => {
        setEditedTask({...editedTask, [e.target.name]: e.target.value});
    };

    const handleUpdate = async() => {
        try {
            await updateTask(task._id, editedTask);
            setEditing(false);
            onUpdate();
        } catch (error) {
            console.error(`Error updating task: ${task._id}`, error);
        }
    };

    const handleDelete = async() => {
        try {
            await deleteTask(task._id);
            onUpdate();
        } catch (error) {
            console.error(`Error deleting task: ${task._id}`, error);
        }
    };

    return(
        <div>
            {editing ? (
                <form className="form">
                    <input className="input mt-2" name="title" placeholder="Title" value={editedTask.title} onChange={handleChange}/>
                    <input className="input" name="description" placeholder="Description" value={editedTask.description} onChange={handleChange}/>
                    <input className="input" name="assignedTo" placeholder="AssignedTo" value={editedTask.assignedTo} onChange={handleChange}/>
                    <input className="input" name="dueDate" placeholder="DueDate" value={editedTask.dueDate} onChange={handleChange}/>
                    <input className="input" name="status" placeholder="Status" value={editedTask.status} onChange={handleChange}/>
                    <button onClick={handleUpdate} className="button">Save</button>
                </form>
            ):(
                <div className="div">
                    <ul className="">
                        <li className="li mt-2">Title: {task._id}</li>
                        <li className="li">Description: {task.description}</li>
                        <li className="li">Assigend To: {task.assignedTo}</li>
                        <li className="li">DueDate: {task.dueDate}</li>
                        <li className="li">Status: {task.status}</li>
                    </ul>
                </div>
            )}
            <button className="button" onClick={() => setEditing(!editing)}>{editing ? 'Cancel': 'Edit'}</button>
            <button className="button ml-10" onClick={handleDelete}>Delete</button>
        </div>
    )
}