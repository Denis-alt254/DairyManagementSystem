export default function MilkController(milk){
    return(
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4 bg-white shadow rounded flex flex-col ">
            <div>Milk: {milk._id}</div>
            <span className="rounded bg-violet-400 p-1 mt-2">Cow: {milk.cow}</span>
            <span className="rounded bg-violet-400 p-1">Date: {milk.date}</span>
            <span className="rounded bg-violet-400 p-1">Amount in Litres: {milk.amountLitres}</span>
        </div>
    )
}