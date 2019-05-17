import React from "react";
import BillList from "../FunctionalComponents/BillList/BillList.js";
import BillItem from "../FunctionalComponents/BillItem/BillItem.js";

class Bill extends React.Component {

  //every bill is an object in an array of bills...
  //state = { bills : [{bill},{bill},{bill}] }

  state = { 
    bills: [ //billsArray
      { id: 1, name: 'Home Mortgage' }, //billObject
      { id: 2, name: 'Beck HOA Dues' }, 
      { id: 3, name: 'DirecTV Now' },
      { id: 4, name: 'City of Austin Utilities' }
    ] 
  }

  render() {
    return (
      <div style={{border:"2px solid blue", padding:"10px"}}>
        <p style={{color:"blue"}}>Hello From Bill.js</p>
        <BillList billsArray={this.state.bills}>
          {this.state.bills.map((arrayItem, arrayIndex) => {
            return <BillItem key={arrayItem.id} billObject={arrayItem} />
            })}  
        </BillList> 
      </div>
      );
  }
}

export default Bill;