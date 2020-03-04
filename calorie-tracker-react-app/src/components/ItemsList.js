import React, {useContext, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const ItemsList = () => {

    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <>
           <h3>Calories Consumed</h3>
           <ul className="list">
               {transactions.map(transaction => <Transaction key={transaction.id} transaction = {transaction} /> )} 
            </ul> 
        </>
    )
}
