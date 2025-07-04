import { useEffect } from "react";
import { useState } from "react"
import { createMilk, getMilk } from "../services/milkService";
import MilkController from "../components/MilkController";

export function Milk(){

    const [milk, setMilk] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMilk = async() => {
            try {
                const response = await getMilk();
                setMilk(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                alert("Error fetching Milk.");
                setLoading(false);
            }
        }
        fetchMilk();
    }, []);

    if (loading) return <p>Loading Milk.....</p>
    
    return(
        <div>
            <h1>Milk Page</h1>
            {milk.length > 0 ? (milk.map(mil => <MilkController key={mil._id} mil={mil}/>)): (<p>Milk records is Empty.</p>)}
        </div>
    )
};

export function AddMilkRecordForm({onMilkRecordAdded}){
    const [formData, setFormData] = useState({
        cow: "",
        date: "",
        amountLitres: ""
    });

    const handleformChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await createMilk(formData);
            onMilkRecordAdded();
            setFormData({
                cow: "",
                date: "",
                amountLitres: ""
            });
        } catch (error) {
            console.error("Error Adding Milk Record",error);
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 mt-4 bg-green-700 rounded-2xl border-2">
                <input className="rounded bg-amber-50 p-1 mt-2" name="cow" placeholder="Cow" value={formData.cow} onChange={handleformChange} />
                <input className="rounded bg-amber-50 p-1" name="date" placeholder="Date" value={formData.date} onChange={handleformChange} />
                <input className="rounded bg-amber-50 p-1" name="amountLitres" placeholder="Amount In Litres" value={formData.amountLitres} onChange={handleformChange} />
                <button type="submit" className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5">AddMilkRecord</button>
            </form>
        </div>
    )
}