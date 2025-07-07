import {Cows} from './Cows'
import {Milk} from './Milk';
import Tasks from './Tasks'

export function Dashboard(){
    return(
        <div>
            <p className='text-blue-600 font-serif text-2xl mt-6 text-center font-bold'>Dashboard</p>
            <Cows />
            <Milk />
            <Tasks />
        </div>
    )
}