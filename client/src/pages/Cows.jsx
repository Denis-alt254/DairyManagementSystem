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
        <div className="flex flex-col w-screen">
            <h1 className="h1">Cows</h1>
            <div className="divButton">
                <button className="button"><Link className="p-3" to="/addcow">AddCow</Link></button>
                <button className="button"><Link className="p-3" to="/updatedelete">Update/Delete</Link></button>
            </div>
            <div className="div">
                {cows.length > 0 ? (cows.map(cow => <CowFormModel key={cow._id} cow={cow}/>)): (<p>No Cows Found.</p>)}
            </div>
        </div>
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
            <form onSubmit={handleSubmit} className="form">
                <input className="input mt-2" name="tagId" placeholder="TagId" value={formData.tagId} onChange={handleformChange}/>
                <input className="input" name="breed" placeholder="Breed" value={formData.breed} onChange={handleformChange}/>
                <input className="input" name="age" placeholder="Age" value={formData.age} onChange={handleformChange}/>
                <input className="input" name="healthStatus" placeholder="Healthstatus" value={formData.healthStatus} onChange={handleformChange}/>
                <input className="input" name="averageMilk" placeholder="AverageMilk" value={formData.averageMilk} onChange={handleformChange}/>
                <button type="submit" className="button">AddCow</button>
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
                <form className="form">
                    <input className="input mt-2" name="tagId" placeholder="TagId" value={editedCow._id} onChange={handleChange}/>
                    <input className="input" name="breed"placeholder="Breed" value={editedCow.breed} onChange={handleChange}/>
                    <input className="input" name="age" placeholder="Age" value={editedCow.age} onChange={handleChange}/>
                    <input className="input" name="healthStatus" placeholder="Health" value={editedCow.healthStatus} onChange={handleChange}/>
                    <input className="input" name="averageMilk" placeholder="Average Milk" value={editedCow.averageMilk} onChange={handleChange}/>
                    <button onClick={handleUpdate} className="button">Save</button>
                </form>
            ):(
                <div className="div">
                    <h3 className="h1">Cow: {cow.tagId}</h3>
                    <ul className="p-4 bg-[#733DB6] shadow rounded">
                        <li className="input mt-2">Breed: {cow.breed}</li>
                        <li className="input">Age: {cow.age}</li>
                        <li className="input">Health: {cow.healthStatus}</li>
                        <li className="input">Average Milk: {cow.averageMilk}</li>
                    </ul>
                </div>
            )}
            <button className="button" onClick={() => setEditing(!editing)}>{editing ? 'Cancel': 'Edit'}</button>
            <button className="button ml-10" onClick={handleDelete}>Delete</button>
        </div>
    )
}