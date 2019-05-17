import React from "react";

function BillList(props) { 
  const displayBillsArray = () => {
    //<BillList data/> = props.data
    //<BillList data='x' />
    // props.data = x
    if(props.billsArray.length) {
      return props.children; //any element nested within this element
    } else {
      return "no bills, add a bill"
    }
}

  return (
       <ul>
          {displayBillsArray()}
       </ul>
  );
} 

export default BillList;
