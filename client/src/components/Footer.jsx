import { Link } from "react-router-dom"

export default function Footer(){
    return(
        
            <div className='footer footItems'>
                <Link to="/">Cows</Link>
                <Link to="/addcow">AddCow</Link>
                <Link to="/updatedelete">UpdateAdnDeleteCow</Link>
                <Link to="/addtask">AddTask</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/expenses">Expenses</Link>
                <Link to="/addexpense">AddExpense</Link>
                <Link to="/summary">GetSummary</Link>
                <Link to="/milk">Milk</Link>
                <Link to="/addmilk">AddMilkRecord</Link>
                <Link to="/tasks">Tasks</Link>
                <Link to="/updatedeletetasks">UpdateAndDeleteTask</Link>
            </div>
                
    )
}