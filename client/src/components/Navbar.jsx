import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <div className='flex justify-between m-2 bg-violet-500 p-3 rounded-2xl'>
                <Link to="/">Cows</Link>
                <Link to="/addcow">AddCow</Link>
                <Link to="/updatedelete">UpdateAdnDeleteCow</Link>
                <Link to="/addtask">AddTask</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/expenses">Expenses</Link>
                <Link to="/addexpense">AddExpense</Link>
                <Link to="/milk">Milk</Link>
                <Link to="/addmilk">AddMilkRecord</Link>
                <Link to="/tasks">Tasks</Link>
            </div>
        </nav>
    )
}

export default Navbar;