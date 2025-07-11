import { Link } from "react-router-dom"

export default function SideBar(){
    return(
        <nav>
            <div className='sidebar'>
                <Link to="/dashboard">Dashboard</Link>
                <div className="sideItem">
                    <Link to="/">Cows</Link>
                </div>
                <div className="sideItem">
                    <Link to="/tasks">Tasks</Link>
                </div>
                <div className='sideItem'>
                    <Link to="/expenses">Expenses</Link>
                </div>
                <div className="sideItem">
                    <Link to="/milk">Milk</Link>
                </div>
                
            </div>
        </nav>
    )
}