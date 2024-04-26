
import TransactionHistoryItemTr from "./TransactionHistoryItemTr"

const TransactionHistory = ({transactions}) => {
  // const {type, amount,currency}= items
  return (
    <div>
      <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>  
    {transactions.map((item)=>{
    return (<tr key={item.id}>      
		<TransactionHistoryItemTr type ={item.type} amount={item.amount} currency={item.currency} />
   </tr>
   );
    })}
  </tbody>
</table>
    </div>
  )
}

export default TransactionHistory
