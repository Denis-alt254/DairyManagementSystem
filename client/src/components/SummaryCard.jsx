export default function SummaryCard(summary){
    return(
        <div className="div">
            <ul className="ul">
                <span className="span">Expense: {summary._id}</span>
                <li className="li mt-2">Type: {summary.type}</li>
                <li className="li">Amount: {summary.amount}</li>
                <li className="li">Description: {summary.description}</li>
                <li className="li">Date: {summary.date}</li>
                <li className="li">CAtegory: {summary.category}</li>
                <li className="li">Added By: {summary.addedBy}</li>
            </ul>
        </div>
    )
}