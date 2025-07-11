import { useEffect, useState } from "react";
import { createExpense, getExpenses, getSummary } from "../services/expenseService";
import ExpenseController from "../components/ExpenseController";
import SummaryCard from "../components/SummaryCard";
import { Link } from "react-router-dom";

export function Expenses(){

    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExpenses = async() => {
            try {
                const response = await getExpenses();
                setExpenses(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                alert("Error fetching Expenses! Try again.");
                setLoading(false);
            }
        };
        fetchExpenses();
    }, []);

    if(loading) return <p>Loading Expenses....</p>

    return(
        <div className="flex flex-col">
            <h1 className="h1">Expenses</h1>
            <div className="divButton">
                <button className="button mb-5"><Link to="/addexpense">AddExpense</Link></button>
                <button className="button mb-5"><Link to="/summary">GetSummary</Link></button>
            </div>
            <div className="div">
            {expenses.length > 0 ? (expenses.map(expense => <ExpenseController key={expense._id} expense={expense}/>)): (<p>No Expenses Found. Add Some.</p>)}
            </div>
        </div>
    )
};

export function AddExpenseFrom({onExpenseAdded}){
    const [formData, setFormData] = useState({
        type: "", 
        amount: "", 
        description: "", 
        date: "",
        category: "",
        addedBy: ""
    });

    const handleformChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await createExpense(formData);
            onExpenseAdded();
            setFormData({
                type: "", 
                amount: "", 
                description: "", 
                date: "",
                category: "",
                addedBy: ""
            });
        } catch (error) {
            console.error("Error Adding Expense", error);
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input className="input mt-2" name="type" placeholder="Type" value={formData.type} onChange={handleformChange} />
                <input className="input" name="amount" placeholder="Amount" value={formData.amount} onChange={handleformChange} />
                <input className="input" name="description" placeholder="Description" value={formData.description} onChange={handleformChange} />
                <input className="input" name="date" placeholder="Date" value={formData.date} onChange={handleformChange} />
                <input className="input" name="category" placeholder="Category" value={formData.category} onChange={handleformChange} />
                <input className="input" name="addedBy" placeholder="AddedBy" value={formData.addedBy} onChange={handleformChange} />
                <button className="button mb-5">AddExpense</button>
            </form>
        </div>
    )
}

export const Summary = () => {
    const [Summary, setSummary] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSummary = async() => {
            try {
                const response = await getSummary();
                setSummary(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                alert("Error fetching summary");
                setLoading(fasle);
            }
        };
        fetchSummary();
    },[]);

    if(loading) return <p>Loading Summary</p>

    return(
        <div>
            <h1 className="h1">Summary</h1>
            <div className="div">
            {Summary > 0 ? Summary.map(s => <SummaryCard key={s._id} s={s}/>):(<p>No Summary Found.</p>)}
            </div>
        </div>
    )

}