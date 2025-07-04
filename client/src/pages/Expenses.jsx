import { useEffect, useState } from "react";
import { createExpense, getExpenses } from "../services/expenseService";
import ExpenseController from "../components/ExpenseController";

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
        }
        fetchExpenses();
    }, []);

    if(loading) return <p>Loading Expenses....</p>

    return(
        <div>
            <h1 className="text-center text-2xl font-bold">Expenses page</h1>
            <div className="felx flex-wrap gap-4">
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