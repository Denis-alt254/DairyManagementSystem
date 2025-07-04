function CowFormModel({cow}){
    return(
        <div className="flex flex-wrap gap-4 justify-center">
            <ul className="p-4 bg-white shadow rounded">
                <span className="text-center text-2xl font-bold">Cow: {cow._id}</span>
                <li className="rounded bg-violet-400 p-1 mt-2">Breed: {cow.breed}</li>
                <li className="rounded bg-violet-400 p-1">Age: {cow.age}</li>
                <li className="rounded bg-violet-400 p-1">Health: {cow.healthStatus}</li>
                <li className="rounded bg-violet-400 p-1">Average: {cow.averageMilk}</li>
                <li className="rounded bg-violet-400 p-1">Added By: {cow.addedBy}</li>
            </ul>
        </div>
    )
}

export default CowFormModel;