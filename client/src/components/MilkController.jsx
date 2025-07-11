export default function MilkController(milk){
    return(
        <div className="div">
            <ul className="ul">
                <li>Milk: {milk._id}</li>
                <li className="li mt-2">Cow: {milk.cow}</li>
                <li className="li">Date: {milk.date}</li>
                <li className="li">Amount in Litres: {milk.amountLitres}</li>
            </ul>            
        </div>
    )
}