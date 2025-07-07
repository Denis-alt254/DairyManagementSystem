import { Link } from "react-router-dom"

export default function SideBar(){
    return(
        <nav>
            <div className='flex flex-col m-2 bg-violet-500 p-3 h-screen'>
                <Link to="/dashboard">Dashboard</Link>
                <div className="flex flex-col">
                    <Link to="/">Cows</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="/tasks">Tasks</Link>
                </div>
                <div className='flex flex-col'>
                    <Link to="/expenses">Expenses</Link>
                </div>
                <div className="flex flex-col">
                    <Link to="/milk">Milk</Link>
                </div>
                
            </div>
        </nav>
    )
}