import {React,useState,useEffect} from 'react';
import Expenses from './component/expenses/expenses';
import NewExpense from './component/new_expense/NewExpense'
import { addExpense , getAllExpenses } from './api';

function App() 
{

 const [expenses,setExpenses]=useState([])
 useEffect (()=>
 {
  getAllExpenses(setExpenses);
 },[]);

  const onAddNewExpense=( val )=>{
    addExpense(val,()=>{
      setExpenses((prv)=>{[...prv,val]})
    })
  }

    const onAddNewExpenseItem=(expense)=>
      {
        console.log('App:',expense)
        addExpense(expense,()=> 
          {
          setExpenses((previous_expenses)=>{
              return[expense, ...previous_expenses]
            })
      });
        
      }
  return (
    <div className="App">
      <NewExpense submitAction={onAddNewExpenseItem}/>
     <Expenses expenses={expenses} />
    
    </div>
  )
}

export default App

