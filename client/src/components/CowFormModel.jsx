function CowFormModel({cow}){
    return(
        <div className="div">
            <ul className="ul">
                <span className="span">Cow: {cow._id}</span>
                <li className="li mt-2">Breed: {cow.breed}</li>
                <li className="li">Age: {cow.age}</li>
                <li className="li">Health: {cow.healthStatus}</li>
                <li className="li">Average: {cow.averageMilk}</li>
                <li className="li">Added By: {cow.addedBy}</li>
            </ul>
        </div>
    )
}

export default CowFormModel;