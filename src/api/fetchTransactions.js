import transactions from "../testData/transactions";

export const fetchTransactions =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(transactions || []);
        },1000);
    })
}