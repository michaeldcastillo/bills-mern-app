import React, { Component } from "react";
import axios from 'axios';

class CreateOne extends Component {

    onChangeBillName = this.onChangeBillName.bind(this);
    onChangeBillPaymentURL = this.onChangeBillPaymentURLe.bind(this);
    onChangeBillDueDate = this.onChangeBillDueDate.bind(this);
    onChangeBillDueAmount = this.onChangeBillDueAmount.bind(this);
    onChangeBillNotes = this.onChangeBillNotes.bind(this);
    onSubmit = this.onSubmit.bind(this);

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
    }

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

    render() {
        return (
            <div>
                <p>CreateOne Component</p>
            </div>
        );
    }
}

export default CreateOne;