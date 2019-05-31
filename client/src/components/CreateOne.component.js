import React, { Component } from "react";
import axios from 'axios';

class CreateOne extends Component {

    /* --------------------- BIND -------------------- */
    onChangeBillName = this.onChangeBillName.bind(this);
    onChangeBillPaymentURL = this.onChangeBillPaymentURL.bind(this);
    onChangeBillDueDate = this.onChangeBillDueDate.bind(this);
    onChangeBillDueAmount = this.onChangeBillDueAmount.bind(this);
    onChangeBillNotes = this.onChangeBillNotes.bind(this);
    onSubmit = this.onSubmit.bind(this);

    /* --------------------- STATE -------------------- */

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

    //component's initial state
    state = {
        bill_name: "",
        bill_payment_url: "",
        bill_due_date: "",
        bill_due_amount: "",
        bill_notes: "",
        bill_paid_amount: "",
        bill_paid_status: false
    }

    /* --------------------- FORM EVENT LISTENERS -------------------- */
    onChangeBillName(event) {
        this.setState({bill_name: event.target.value});
    }

    onChangeBillPaymentURL(event) {
        this.setState({bill_payment_url: event.target.value});
    }

    onChangeBillDueDate(event) {
        this.setState({bill_due_date: event.target.value});
    }

    onChangeBillDueAmount(event) {
        this.setState({bill_due_amount: event.target.value});
    }

    onChangeBillNotes(event) {
        this.setState({bill_notes: event.target.value});
    }

    /* --------------------- FORM SUBMIT LISTENER -------------------- */
    onSubmit(event) {
        event.preventDefault(); //prevent default page reload behavior on form submit

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

        const newBill = {
            bill_name: this.state.bill_name,
            bill_payment_url: this.state.bill_payment_url,
            bill_due_date: this.state.bill_due_date,
            bill_due_amount: this.state.bill_due_amount,
            bill_notes: this.state.bill_notes,
            bill_paid_amount: "0",
            bill_paid_status: false
        }
        console.log("newBill = ", newBill);

        //(a.) POST REQUEST...
        //http://localhost:5000/api/create
        //axios.post().then();
        axios.post("/api/create", newBill).then((httpResponse) => {
            console.log("httpResponse = ", httpResponse);
            console.log("httpResponse.data = ", httpResponse.data);
            
            //redirect after axios success
            console.log("this = ", this); //'this' refers to CreateOne component
            this.props.history.push("/");

        }).catch(function(axiosPostError) {
            console.log("axiosPostError = ", axiosPostError);
        });

         /*
        //clear state
        this.setState({
            bill_name: "",
            bill_payment_url: "",
            bill_due_date: "",
            bill_due_amount: "",
            bill_notes: "",
            bill_paid_amount: "",
            bill_paid_status: false
        });
        */

    }

    /* --------------------- RENDER -------------------- */
    render() {
        console.log("CreateOne render()...");
        return (
           
                    <form onSubmit={this.onSubmit}>
                        <br />
                        {/* bill_name */}
                        <div className="">
                            <label><b>Bill Title</b></label><br />
                            <input type="text" value={this.state.bill_name} onChange={this.onChangeBillName} />
                        </div>
                        {/* bill_payment_url */}
                        <div className="">
                            <label><b>Payment Link</b></label><br />
                            <input type="text" value={this.state.bill_payment_url} onChange={this.onChangeBillPaymentURL} />
                        </div>
                         {/* bill_due_date */}
                         <div className="">
                            <label><b>Due Date</b></label><br />
                            <input type="text" value={this.state.bill_due_date} onChange={this.onChangeBillDueDate} />
                        </div>
                        {/* bill_due_amount */}
                        <div className="">
                            <label><b>Due Amount</b></label><br />
                            <input type="text" value={this.state.bill_due_amount} onChange={this.onChangeBillDueAmount} />
                        </div>
                            {/* bill_notes */}
                        <div className="">
                            <label><b>Notes</b></label><br />
                            <input type="text" value={this.state.bill_notes} onChange={this.onChangeBillNotes} />
                        </div>
                       
                        {/* submit button */}
                        <div className="submit-container">
                            <div className="">
                                <input type="submit" value="Create Bill" className="" />
                            </div>
                        </div>
                 </form>
           
        );
    }
}

export default CreateOne;