import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Calorie = () => {
    const { transactions } = useContext(GlobalContext);

    const calories = transactions.map(transaction => transaction.amount);
    const totalConBurned = calories.reduce((tot, item) => (tot+=item), 0);
    const total = 2250 - totalConBurned;

    return (
        <>
            <h4>Remaining Calories For the Day</h4>
            <h1 id="balance">{total}</h1>
        </>
    )
}
