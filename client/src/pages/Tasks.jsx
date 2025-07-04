import { useEffect, useState } from "react";
import { createTask, getTasks } from "../services/taskService";
import TaskCard from "../components/TaskCard";

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
        <h1>Tasks Page</h1>
        <div className="flex flex-wrap gap-4">
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