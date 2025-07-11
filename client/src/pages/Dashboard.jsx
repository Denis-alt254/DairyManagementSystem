import {Cows} from './Cows'
import {Milk} from './Milk';
import Tasks from './Tasks'

export function Dashboard(){
    return(
        <div className='flex flex-col'>
            <p className='p'>Dashboard</p>
            <Cows />
            <Milk />
            <Tasks />
        </div>
    )
}