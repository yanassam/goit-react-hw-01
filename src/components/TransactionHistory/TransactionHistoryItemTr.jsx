
const TransactionHistoryItemTr = (transactions) => {
  const {type, amount, currency} = transactions;
  return (
    <>
     <td>{type}</td>
     <td>{amount}</td>
     <td>{currency}</td>
  </>
  )
}

export default TransactionHistoryItemTr
