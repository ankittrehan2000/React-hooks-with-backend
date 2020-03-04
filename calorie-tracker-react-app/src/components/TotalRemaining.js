import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'

export const TotalRemaining = () => {

    const { transactions } = useContext(GlobalContext);

    const calories = transactions.map(transaction => transaction.amount);

    const calConsumed = calories
        .filter(item => item > 0)
        .reduce((cal,item) => (cal += item), 0);    

    return (
        <div className="tot-rem-container">
            <div>
                <h4>Reccomended</h4>
                <p id="total-calories" className="total calories">2250</p>
            </div>
            <div>
                <h4>Consumed</h4>
                <p id="rem-calories" className="rem calories">{calConsumed}</p>
            </div>
        </div>
    )
}
