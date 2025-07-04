import { useEffect, useState } from "react";
import { createCow, deleteCow, getCows, updateCow } from "../services/cowService";
import CowFormModel from "../components/CowFormModal";

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
        <h1 className="text-center text-2xl font-bold">Cows Page</h1>
        <div className="flex flex-wrap gap-4">
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
    const [editing, setEditing] = useState(false);
    const [editedCow, setEditedCow] = useState({...cow});

    const hanldeChange = (e)=>{
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
                <>
                    <input name="breed" value={editedCow.breed} onChange={hanldeChange}/>
                    <input name="age" value={editedCow.age} onChange={hanldeChange}/>
                    <input name="healthStatus" value={editedCow.healthStatus} onChange={hanldeChange}/>
                    <input name="averageMilk" value={editedCow.averageMilk} onChange={hanldeChange}/>
                    <button onClick={handleUpdate}>Save</button>
                </>
            ):(
                <>
                    <h3>{cow.tagId}</h3>
                    <ul>
                        <li>{cow.breed}</li>
                        <li>{cow.age}</li>
                        <li>{cow.healthStatus}</li>
                        <li>{cow.averageMilk}</li>
                    </ul>
                </>
            )}
            <button onClick={() => setEditing(!editing)}>{editing ? 'Cancel': 'Edit'}</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}