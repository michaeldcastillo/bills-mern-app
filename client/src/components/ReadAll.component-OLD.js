import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import "./ReadAll.css";

//================================ COMPONENT ==========================================

class ReadAll extends Component {
    
    /* --------------------- STATE -------------------- */
    //initial state
    state = { billsArray:[] }
    
    /*
    let BillSchema = new Schema({
        bill_name: String,
        bill_payment_url: String,
        bill_due_date: String,
        bill_due_amount: String,
        bill_notes: String,
        bill_paid_amount: String,
        bill_paid_status: Boolean
    });
    */

    /*
    //demo data
    state = { billsArray:[
            {
                "_id" : "5ce5b9e8febc2a72d0c933de",
                "bill_name" : "my first bill",
                "bill_payment_url" : "my link",
                "bill_due_date" : "tomorrow",
                "bill_due_amount" : "20,000",
                "bill_notes" : "i don't have the money!",
                "__v" : 0
            },
            {
                "_id" : "5ce5dafec9de248793b5b11c",
                "bill_name" : "my second bill",
                "bill_payment_url" : "my link 2",
                "bill_due_date" : "6/1/19",
                "bill_due_amount" : "4,000",
                "bill_notes" : "i STILL don't have the money! Baby, I got your money.",
                "__v" : 0
            }
        ] 
    }
    */

    /* --------------------- COMPONENT EVENT LISTENER -------------------- */
    componentDidMount() {
        console.log("ReadAll componentDidMount()...");

        //axios here = axios.get().then().catch()
        //http://localhost:5000/api
        axios.get('/api').then((axiosResponse) => {
            //console.log("axiosResponse = ", axiosResponse);
            console.log("axiosResponse.data = ", axiosResponse.data);
            console.log("this = ", this);
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
            <div style={{border:"2px dotted brown"}}>
                <p style={{color:"brown"}}><b>ReadAll</b> Component... <b>path="/"</b></p>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                               {/* <th>arrayIndex</th> */}
                               {/* <th>_id</th> */}
                                <th>1. bill_name</th>
                                <th>2. bill_payment_url</th>
                                <th>3. bill_due_date</th>
                                <th>4. bill_due_amount</th>
                                <th>5. bill_notes</th>
                                <th>6. bill_paid_amount</th>
                                <th>7. bill_paid_status</th>
                            </tr>
                        </thead>
                        {/* render nested component here */}
                        <tbody>
                            {this.renderBillRow()}
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

//================================ NESTED COMPONENT ==========================================
class BillRow extends Component {

    delete = this.delete.bind(this);

    delete() {
        let id = this.props.arrayValue._id;
        console.log("id = ", id);

        //axios.get().then().catch();
        axios.get('/api/delete/'+id).then((axiosResponse) => {
            console.log("axiosResponse = ", axiosResponse);

             //redirect after axios success
             //console.log("this = ", this);
             //console.log("ReadAllprops = ", ReadAllprops);
             //this.props.history.push("/");
             window.location= "/"; //<-- THIS IS NOT THE RIGHT WAY TO REDIRECT... THIS CREATES A FULL PAGE REFRESH!!!!!!!!!!!!!!!!!!!!!!!!

        }).catch((axiosGetDeleteError) => console.log("axiosGetDeleteError: ", axiosGetDeleteError));
    }

    render() {
        return (
            <tr>
                <td><Link to={"/update/"+this.props.arrayValue._id}>Edit</Link></td>
                <td><button onClick={this.delete}>Delete</button></td>
                {/*<td>{this.props.arrayIndex}</td>*/}
                {/*<td>{this.props.arrayValue._id}</td>*/}
                <td>{this.props.arrayValue.bill_name}</td>
                <td><a href={this.props.arrayValue.bill_payment_url} target="_blank" rel="noopener noreferrer">{this.props.arrayValue.bill_payment_url}</a></td>
                {/*<td><a href="http://www.apple.com" target="_blank" rel="noopener noreferrer">Apple.com</a></td>*/}
                <td>{this.props.arrayValue.bill_due_date}</td>
                <td>{this.props.arrayValue.bill_due_amount}</td>
                <td>{this.props.arrayValue.bill_notes}</td>
                <td>{this.props.arrayValue.bill_paid_amount}</td>
                <td className={this.props.arrayValue.bill_paid_status ? 'completed' : ''}>{this.props.arrayValue.bill_paid_status.toString()}</td>
            </tr>
        );
    }
}

export default ReadAll;