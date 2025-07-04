function ExpenseController(expense){
    return(
        <div className="flex flex-wrap gap-4 justify-center">
            <ul className="p-4 bg-white shadow rounded">
                <span className="text-center text-2xl font-bold">Expense: {expense._id}</span>
                <li className="rounded bg-violet-400 p-1 mt-2">Type: {expense.type}</li>
                <li className="rounded bg-violet-400 p-1">Amount: {expense.amount}</li>
                <li className="rounded bg-violet-400 p-1">Description: {expense.description}</li>
                <li className="rounded bg-violet-400 p-1">Date: {expense.date}</li>
                <li className="rounded bg-violet-400 p-1">CAtegory: {expense.category}</li>
                <li className="rounded bg-violet-400 p-1">Added By: {expense.addedBy}</li>
            </ul>
        </div>
    )
}

export default ExpenseController;