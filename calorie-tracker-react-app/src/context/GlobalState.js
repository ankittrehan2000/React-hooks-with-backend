import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//Initial State
const initialState = {
    transactions: [],
    error: null,
    loading: true
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider Component children are the components being wrapped inside
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);

    //Actions 
    async function getTransactions(){
        try{
            const res = await axios.get('/backend/calories');
            
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        }
        catch(err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: 'Error'
            })
        }
    }
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{transactions: state.transactions, error:state.error, loading: state.loading, deleteTransaction, addTransaction, getTransactions}}>{children}</GlobalContext.Provider>);
}