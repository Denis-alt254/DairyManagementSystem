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
        <div>
            <h1 className="text-blue-600 font-serif text-center text-2xl font-bold mt-6 mb-8">Expenses</h1>
            <div className="flex justify-around gap-8">
                <button className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5"><Link to="/addexpense">AddExpense</Link></button>
                <button className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5"><Link to="/summary">GetSummary</Link></button>
            </div>
            <div className="felx flex-wrap gap-4 justify-center">
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
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 mt-4 bg-green-700 rounded-2xl border-2">
                <input className="rounded bg-amber-50 p-1 mt-2" name="type" placeholder="Type" value={formData.type} onChange={handleformChange} />
                <input className="rounded bg-amber-50 p-1" name="amount" placeholder="Amount" value={formData.amount} onChange={handleformChange} />
                <input className="rounded bg-amber-50 p-1" name="description" placeholder="Description" value={formData.description} onChange={handleformChange} />
                <input className="rounded bg-amber-50 p-1" name="date" placeholder="Date" value={formData.date} onChange={handleformChange} />
                <input className="rounded bg-amber-50 p-1" name="category" placeholder="Category" value={formData.category} onChange={handleformChange} />
                <input className="rounded bg-amber-50 p-1" name="addedBy" placeholder="AddedBy" value={formData.addedBy} onChange={handleformChange} />
                <button className="bg-violet-700 rounded-2xl p-4 text-amber-50 hover:bg-blue-600 hover:text-teal-100 mb-5">AddExpense</button>
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
            <h1 className="text-blue-600 font-serif text-center text-2xl font-bold mt-6 mb-8">Summary</h1>
            <div className="felx flex-wrap gap-4 justify-center">
            {Summary > 0 ? Summary.map(s => <SummaryCard key={s._id} s={s}/>):(<p>No Summary Found.</p>)}
            </div>
        </div>
    )

}