function ExpenseController(expense){
    return(
        <div className="div">
            <ul className="ul">
                <span className="span">Expense: {expense._id}</span>
                <li className="li mt-2">Type: {expense.type}</li>
                <li className="li">Amount: {expense.amount}</li>
                <li className="li">Description: {expense.description}</li>
                <li className="li">Date: {expense.date}</li>
                <li className="li">CAtegory: {expense.category}</li>
                <li className="li">Added By: {expense.addedBy}</li>
            </ul>
        </div>
    )
}

export default ExpenseController;