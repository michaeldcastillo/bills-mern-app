import React from "react";

function BillItem(props) { 
  return (
      <li>
          id: <b>{props.billObject.id}</b>&nbsp;
          name: <b>{props.billObject.name}</b>
      </li>
  );
} 

export default BillItem;
