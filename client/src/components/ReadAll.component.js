import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

class BillRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.arrayIndex}</td>
                <td>{this.props.arrayValue._id}</td>
                <td>{this.props.arrayValue.bill_name}</td>
                <td>{this.props.arrayValue.bill_payment_url}</td>
                <td>{this.props.arrayValue.bill_due_date}</td>
                <td>{this.props.arrayValue.bill_due_amount}</td>
                <td>{this.props.arrayValue.bill_notes}</td>
                <td>{this.props.arrayValue.bill_paid_amount}</td>
                <td>{this.props.arrayValue.bill_paid_status}</td>
            </tr>
        );
    }
}

class ReadAll extends Component {
    /*
    //initial state
    state = { billsArray:[] }
    */

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

    /* sample bill data... an array of objects
    [
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
    */

    componentDidMount() {
        console.log("ReadAll componentDidMount()...");

        //axios here = axios.get().then().catch()
        axios.get('http://localhost:5000/api').then(function(axiosResponse) {
            console.log("axiosResponse = ", axiosResponse);
            console.log("axiosResponse.data = ", axiosResponse.data);
            //this.setState({ billsArray:axiosResonse.data });
        }).catch(function(axiosError) {
            console.log("ReadAll axios.get() error = ", axiosError);
        });
    }

    renderBillRow() {
        console.log("ReadAll renderBillRow()...");
        return this.state.billsArray.map(function(arrayValue, arrayIndex) {
            return <BillRow key={arrayValue._id} arrayIndex={arrayIndex} arrayValue={arrayValue} />;
        });
    }

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

    render() {
        console.log("ReadAll render()...");
        return (
            <div style={{border:"2px dotted brown"}}>
                <p style={{color:"brown"}}><b>ReadAll</b> Component... <b>path="/"</b></p>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>arrayIndex</th>
                                <th>_id</th>
                                <th>bill_name</th>
                                <th>bill_payment_url</th>
                                <th>bill_due_date</th>
                                <th>bill_due_amount</th>
                                <th>bill_notes</th>
                                <th>bill_paid_amount</th>
                                <th>bill_paid_status</th>
                            </tr>
                        </thead>
                        {/* render list item component here */}
                        <tbody>
                            {this.renderBillRow()}
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ReadAll;