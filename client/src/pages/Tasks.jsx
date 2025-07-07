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
        <h1 className="text-blue-600 font-serif text-2xl text-center font-bold mt-6 mb-8">Tasks</h1>
        <div className="flex justify-around gap-8">
            <button className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5"><Link to="/addtask">AddTask</Link></button>
            <button className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5"><Link to="/updatedeletetasks">UpdateAndDeleteTask</Link></button>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
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
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 mt-4 bg-green-700 rounded-2xl border-2">
                <input className="rounded bg-amber-50 p-1 mt-2" name="title" placeholder="Title" value={formData.title} onChange={handleformChange}/>
                <input className="rounded bg-amber-50 p-1" name="description" placeholder="Description" value={formData.description} onChange={handleformChange}/>
                <input className="rounded bg-amber-50 p-1" name="assignedTo" placeholder="AssignedTo" value={formData.assignedTo} onChange={handleformChange}/>
                <input className="rounded bg-amber-50 p-1" name="dueDate" placeholder="DueDate" value={formData.dueDate} onChange={handleformChange}/>
                <input className="rounded bg-amber-50 p-1" name="status" placeholder="Status" value={formData.status} onChange={handleformChange}/>
                <button type="submit" className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5">AddTask</button>
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
                <form>
                    <input className="rounded bg-amber-50 p-1 mt-2" name="title" placeholder="Title" value={editedTask.title} onChange={handleChange}/>
                    <input className="rounded bg-amber-50 p-1" name="description" placeholder="Description" value={editedTask.description} onChange={handleChange}/>
                    <input className="rounded bg-amber-50 p-1" name="assignedTo" placeholder="AssignedTo" value={editedTask.assignedTo} onChange={handleChange}/>
                    <input className="rounded bg-amber-50 p-1" name="dueDate" placeholder="DueDate" value={editedTask.dueDate} onChange={handleChange}/>
                    <input className="rounded bg-amber-50 p-1" name="status" placeholder="Status" value={editedTask.status} onChange={handleChange}/>
                    <button onClick={handleUpdate} className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5">Save</button>
                </form>
            ):(
                <div className="flex flex-wrap gap-4 justify-center">
                    <ul className="p-4 bg-[#733DB6] shadow rounded">
                        <li className="rounded bg-violet-400 p-1 mt-2">Title: {task._id}</li>
                        <li className="rounded bg-violet-400 p-1">Description: {task.description}</li>
                        <li className="rounded bg-violet-400 p-1">Assigend To: {task.assignedTo}</li>
                        <li className="rounded bg-violet-400 p-1">DueDate: {task.dueDate}</li>
                        <li className="rounded bg-violet-400 p-1">Status: {task.status}</li>
                    </ul>
                </div>
            )}
            <button className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5" onClick={() => setEditing(!editing)}>{editing ? 'Cancel': 'Edit'}</button>
            <button className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5" onClick={handleDelete}>Delete</button>
        </div>
    )
}