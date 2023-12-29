import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
            alert('Your Budget cannot exceed more than £20,000')
        }
        else if(event.target.value < totalExpenses) {
            alert(`Your Budget cannot be less than ${totalExpenses}`)
        } else {
            setNewBudget(event.target.value);
        }
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<div>
<span>{currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
</div>
    );
};
export default Budget;
