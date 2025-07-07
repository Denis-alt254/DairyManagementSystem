export default function SummaryCard(summary){
    return(
        <div className="flex flex-wrap gap-4 justify-center">
            <ul className="p-4 bg-white shadow rounded">
                <span className="text-center text-2xl font-bold">Expense: {summary._id}</span>
                <li className="rounded bg-violet-400 p-1 mt-2">Type: {summary.type}</li>
                <li className="rounded bg-violet-400 p-1">Amount: {summary.amount}</li>
                <li className="rounded bg-violet-400 p-1">Description: {summary.description}</li>
                <li className="rounded bg-violet-400 p-1">Date: {summary.date}</li>
                <li className="rounded bg-violet-400 p-1">CAtegory: {summary.category}</li>
                <li className="rounded bg-violet-400 p-1">Added By: {summary.addedBy}</li>
            </ul>
        </div>
    )
}