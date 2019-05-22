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

        const newBill = {
            bill_name: this.state.bill_name,
            bill_payment_url: this.state.bill_payment_url,
            bill_due_date: this.state.bill_due_date,
            bill_due_amount: this.state.bill_due_amount,
            bill_notes: this.state.bill_notes
           // bill_paid_amount: null,
           // bill_paid_status: false
        }
        console.log("newBill = ", newBill);

        //http://localhost:5000/api/create
        //axios.post().then();

        this.setState = ({
            bill_name: "",
            bill_payment_url: "",
            bill_due_date: "",
            bill_due_amount: "",
            bill_notes: "",
            bill_paid_amount: null,
            bill_paid_status: false
        });
    }

    /* --------------------- STATE -------------------- */
    //component's initial state
    state = {
        bill_name: "",
        bill_payment_url: "",
        bill_due_date: "",
        bill_due_amount: "",
        bill_notes: "",
        bill_paid_amount: null,
        bill_paid_status: false
    }

    /* --------------------- RENDER -------------------- */
    render() {
        return (
            <div style={{border:"2px dotted brown"}}>
                <p style={{color:"brown"}}><b>CreateOne</b> Component... <b>path="/create"</b></p>

                <div>
                    <form onSubmit={this.onSubmit}>
                        {/* bill_name */}
                        <div className="">
                            <label><b>bill_name</b> (value = this.state.bill_name):</label><br />
                            <input type="text" value={this.state.bill_name} onChange={this.onChangeBillName} />
                        </div>
                        {/* bill_payment_url */}
                        <div className="">
                            <label><b>bill_payment_url</b> (value = this.state.bill_payment_url):</label><br />
                            <input type="text" value={this.state.bill_payment_url} onChange={this.onChangeBillPaymentURL} />
                        </div>
                         {/* bill_due_date */}
                         <div className="">
                            <label><b>bill_due_date</b> (value = this.state.bill_due_date):</label><br />
                            <input type="text" value={this.state.bill_due_date} onChange={this.onChangeBillDueDate} />
                        </div>
                        {/* bill_due_amount */}
                        <div className="">
                            <label><b>bill_due_amount</b> (value = this.state.bill_due_amount):</label><br />
                            <input type="text" value={this.state.bill_due_amount} onChange={this.onChangeBillDueAmount} />
                        </div>
                            {/* bill_notes */}
                            <div className="">
                            <label><b>bill_notes</b> (value = this.state.bill_notes):</label><br />
                            <input type="text" value={this.state.bill_notes} onChange={this.onChangeBillNotes} />
                        </div>
                        {/* submit button */}
                        <div className="">
                            <input type="submit" value="Create Bill" className="" />
                        </div>
                    </form>
                </div>


            </div>
        );
    }
}

export default CreateOne;