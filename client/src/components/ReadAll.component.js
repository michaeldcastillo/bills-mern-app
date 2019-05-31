import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
//import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
//import "./ReadAll.css"; //CSS for responsive table examples

//================================ COMPONENT ==========================================

class ReadAll extends Component {
    
    /* --------------------- STATE -------------------- */
    //initial state
    state = { billsArray:[] }
    
    /* --------------------- COMPONENT EVENT LISTENER -------------------- */
    componentDidMount() {
        console.log("ReadAll componentDidMount()...");

        //axios here = axios.get().then().catch()
        //http://localhost:5000/api
        axios.get('/api').then((axiosResponse) => {
            //console.log("axiosResponse = ", axiosResponse);
            console.log("axiosResponse.data = ", axiosResponse.data);

            console.log("this = ", this); //'this' refers to ReadAll component

            this.setState({ billsArray: axiosResponse.data });

        }).catch(function(axiosError) {
            console.log("ReadAll axios.get() error = ", axiosError);
        });
    }

    /* --------------------- RENDER NESTED COMPONENT FUNCTION -------------------- */
    renderBillRow() {
        console.log("ReadAll renderBillRow()...");
        return this.state.billsArray.map(function(arrayValue, arrayIndex) {
            return <BillRow key={arrayValue._id} arrayIndex={arrayIndex} arrayValue={arrayValue} />;
        });
    }

     /* --------------------- RENDER COMPONENT -------------------- */
    render() {
        console.log("ReadAll render()...");
        return (
          

                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Bill Title</Th>
                                <Th>Payment Link</Th>
                                <Th>Due Date</Th>
                                <Th>Due Amount</Th>
                                <Th>Notes</Th>
                                <Th>Paid Amount</Th>
                                <Th>Paid Status</Th>
                                <Th>&nbsp;</Th>
                                <Th>&nbsp;</Th>
                            </Tr>
                        </Thead>
                        {/* render nested component here */}
                        <Tbody>
                            {this.renderBillRow()}
                        </Tbody>
                    </Table>

        
        );
    }
}


//================================ NESTED COMPONENT ==========================================


//const border = { border:"2px dotted red", backgroundColor:"yellow" };


class BillRow extends Component {

    delete = this.delete.bind(this);

    delete() {
        console.log("BillRow delete()...");
        let id = this.props.arrayValue._id;
        console.log("id = ", id);

        //axios.get().then().catch();
        axios.get('/api/delete/'+id).then((axiosResponse) => {
            console.log("item was deleted");
            console.log("axiosResponse = ", axiosResponse);

            //redirect after axios success
            console.log("this = ", this); //'this' refers to BillRow component
            //this.props.history.push("/"); //cannot read property 'push of undefined.

            //correct way is to set the state of the parent 'ReadAll' component (billsArray) and it will refresh only the component with one fewer bill

            window.location.reload(); //HACK!!!!!!!!!!!!!

        }).catch((axiosGetDeleteError) => console.log("axiosGetDeleteError: ", axiosGetDeleteError));
    }

    render() {
        return (
            
             <Tr>
                <Td>{this.props.arrayValue.bill_name}</Td>
                <Td><a href={this.props.arrayValue.bill_payment_url} target="_blank" rel="noopener noreferrer">{this.props.arrayValue.bill_payment_url}</a></Td>
                <Td>{this.props.arrayValue.bill_due_date}</Td>
                <Td>{this.props.arrayValue.bill_due_amount}</Td>
                <Td>{this.props.arrayValue.bill_notes}</Td>
                <Td>{this.props.arrayValue.bill_paid_amount}</Td>
                <Td className={this.props.arrayValue.bill_paid_status ? 'completed' : ''}>{this.props.arrayValue.bill_paid_status.toString()}</Td>
                <Td><Link to={"/update/"+this.props.arrayValue._id}>Edit</Link></Td>
                {/* <Td><button onClick={this.delete}>Delete</button></Td> */}
                {/* <Td><Link to={"/delete/"+this.props.arrayValue._id}>Delete</Link></Td> */}
                <Td><Link to="#" onClick={this.delete}>Delete</Link></Td>
            </Tr>

        );
    }
}

export default ReadAll;