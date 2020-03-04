import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddNewFood = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction ={
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount //converting to int
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add Calories</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="Item">Item Consumed</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Item name" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - new food, positive - exercising)</label>
                    <input type="number" value={amount} onChange={e=> setAmount(e.target.value)} placeholder="Enter Calorie Amount" />
                </div>
                <button className="btn">Add/Remove Calories</button>
            </form>
        </>
    )   
}
