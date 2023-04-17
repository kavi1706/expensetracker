import React from "react";
import './ExpenseList.css'
import ExpenseItem from '../expense_item/ExpenseItem'
const ExpenseList =(props)=>
{

    const { expenses = [] } = props;
    if(expenses.length === 0)
    {
        return (<h2>No expenses Found</h2>)   
    }
    return(
        <ul className="expenses-list">
            {expenses.map((each_expense)=>
            {
                return (
                <ExpenseItem  
                key={each_expense._id || each_expense._id}
                title={each_expense.title}
                amount={ each_expense.amount} 
                date={each_expense.date}/>
                    )
            }
            )}
        </ul>
    )
}
export default ExpenseList;