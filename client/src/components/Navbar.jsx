import {Link} from 'react-router-dom';

function Navbar(){
    return(
            <div className='navbar'>
                <Link to="/">Cows</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/expenses">Expenses</Link>
                <Link to="/milk">Milk</Link>
                <Link to="/tasks">Tasks</Link>
            </div>
    )
}

export default Navbar;