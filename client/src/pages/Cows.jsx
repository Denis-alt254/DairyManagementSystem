import { useEffect, useState } from "react";
import { createCow, deleteCow, getCows, updateCow } from "../services/cowService";
import CowFormModel from "../components/CowFormModal";
import { Link } from "react-router-dom";

export function Cows(){

    const [cows, setCows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCows = async() => {
            try {
                const response = await getCows();
                setCows(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                alert("Error fetching cows! Try again.");
                setLoading(false);
            }
        };
        fetchCows();
    }, []);

    if (loading) return <p>Loading Cows.....</p>

    return(
        <>
        <h1 className="text-blue-600 font-serif text-center text-2xl font-bold mt-6 mb-8">Cows</h1>
        <div className="flex gap-8 justify-around text-center m-8">
            <button className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5"><Link to="/addcow">AddCow</Link></button>
            <button className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5"><Link to="/updatedelete">UpdateAndDeleteCow</Link></button>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
            {cows.length > 0 ? (cows.map(cow => <CowFormModel key={cow._id} cow={cow}/>)): (<p>No Cows Found.</p>)}
        </div>
        </>
    )
};

export function AddCowForm({onCowAdded}){
    const [formData, setFormData] = useState({
        tagId: "",
        breed: "",
        age: "",
        healthStatus: "",
        averageMilk: "",
        addedBy: "685d6e17a1e1a809e29f7c03"
    });

    const handleformChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await createCow(formData);
            onCowAdded();
            setFormData({
            tagId: "",
            breed: "",
            age: "",
            healthStatus: "",
            averageMilk: "",
            addedBy: "685d6e17a1e1a809e29f7c03"
            });
        } catch (error) {
            console.error("Error Adding a cow", error);
        }
    };
    return(
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 mt-4 bg-green-700 rounded-2xl border-2">
                <input className="rounded bg-amber-50 p-1 mt-2" name="tagId" placeholder="TagId" value={formData.tagId} onChange={handleformChange}/>
                <input className="rounded bg-amber-50 p-1" name="breed" placeholder="Breed" value={formData.breed} onChange={handleformChange}/>
                <input className="rounded bg-amber-50 p-1" name="age" placeholder="Age" value={formData.age} onChange={handleformChange}/>
                <input className="rounded bg-amber-50 p-1" name="healthStatus" placeholder="Healthstatus" value={formData.healthStatus} onChange={handleformChange}/>
                <input className="rounded bg-amber-50 p-1" name="averageMilk" placeholder="AverageMilk" value={formData.averageMilk} onChange={handleformChange}/>
                <button type="submit" className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5">AddCow</button>
            </form>
        </div>
    )
};

export const UpdateAndDeleteForm = ({cow, onUpdate}) => {
    const [editing, setEditing] = useState(true);
    const [editedCow, setEditedCow] = useState({...cow});

    const handleChange = (e)=>{
        setEditedCow({...editedCow, [e.target.name]: e.target.value});
    };

    const handleUpdate = async() => {
        try {
            await updateCow(cow._id, editedCow);
            setEditing(false);
            onUpdate();
        } catch (error) {
            console.error(`Error Updating the cow: ${cow._id}`, error);
        }
    };

    const handleDelete = async() => {
        try {
            await deleteCow(cow._id);
            onUpdate();
        } catch (error) {
            console.error(`Error delleting the cow ${cow._id}`, error);
        }
    };

    return(
        <div>
            {editing ? (
                <form className="flex flex-col items-center justify-center gap-6 mt-4 mb-4 bg-green-700 rounded-2xl border-2">
                    <input className="rounded bg-amber-50 p-1 mt-2" name="tagId" placeholder="TagId" value={editedCow._id} onChange={handleChange}/>
                    <input className="rounded bg-amber-50 p-1 mt-2" name="breed"placeholder="Breed" value={editedCow.breed} onChange={handleChange}/>
                    <input className="rounded bg-amber-50 p-1" name="age" placeholder="Age" value={editedCow.age} onChange={handleChange}/>
                    <input className="rounded bg-amber-50 p-1" name="healthStatus" placeholder="Health" value={editedCow.healthStatus} onChange={handleChange}/>
                    <input className="rounded bg-amber-50 p-1" name="averageMilk" placeholder="Average Milk" value={editedCow.averageMilk} onChange={handleChange}/>
                    <button onClick={handleUpdate} className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5">Save</button>
                </form>
            ):(
                <div className="flex flex-wrap gap-4 justify-center">
                    <h3>Cow: {cow.tagId}</h3>
                    <ul className="p-4 bg-[#733DB6] shadow rounded">
                        <li className="rounded bg-amber-50 p-1 mt-2">Breed: {cow.breed}</li>
                        <li className="rounded bg-amber-50 p-1">Age: {cow.age}</li>
                        <li className="rounded bg-amber-50 p-1">Health: {cow.healthStatus}</li>
                        <li className="rounded bg-amber-50 p-1">Average Milk: {cow.averageMilk}</li>
                    </ul>
                </div>
            )}
            <button className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5" onClick={() => setEditing(!editing)}>{editing ? 'Cancel': 'Edit'}</button>
            <button className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5 ml-10" onClick={handleDelete}>Delete</button>
        </div>
    )
}