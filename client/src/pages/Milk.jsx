import { useEffect } from "react";
import { useState } from "react"
import { createMilk, getMilk } from "../services/milkService";
import MilkController from "../components/MilkController";
import { Link } from "react-router-dom";

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
        };
        fetchMilk();
    }, []);

    if (loading) return <p>Loading Milk.....</p>
    
    return(
        <>
        <h1 className="h1">Milk</h1>
        <div className="divButton">
            <button className="button"><Link to="/addmilk">AddMilkRecord</Link></button>
        </div>
        <div className="div">
            {milk.length > 0 ? (milk.map(mil => <MilkController key={mil._id} mil={mil}/>)): (<p>Milk records is Empty.</p>)}
        </div>
        </>
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
            <form onSubmit={handleSubmit} className="form">
                <input className="input mt-2" name="cow" placeholder="Cow" value={formData.cow} onChange={handleformChange} />
                <input className="input" name="date" placeholder="Date" value={formData.date} onChange={handleformChange} />
                <input className="input" name="amountLitres" placeholder="Amount In Litres" value={formData.amountLitres} onChange={handleformChange} />
                <button type="submit" className="button">AddMilkRecord</button>
            </form>
        </div>
    )
}