import React from "react";
import {nanoid} from "nanoid";
import './NewExpense.css';
import NewExpenseForm from './new_expense_form/NewExpenseForm'

const NewExpense = (props) =>
{
    const { submitAction }=props;
    const onNewAddExpense=(expense)=>
    {
        const modified_expense=
        {
                ...expense,
                id:nanoid(),
        }
        submitAction(modified_expense);
    }
    return (
        <div className="new-expense">
        <NewExpenseForm save={onNewAddExpense}/>
        </div>
    )
}
export default NewExpense;