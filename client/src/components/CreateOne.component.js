import React, { Component } from "react";
//import axios from 'axios';

class CreateOne extends Component {

    onChangeBillName = this.onChangeBillName.bind(this);
    onChangeBillPaymentURL = this.onChangeBillPaymentURLe.bind(this);
    onChangeBillDueDate = this.onChangeBillDueDate.bind(this);
    onChangeBillDueAmount = this.onChangeBillDueAmount.bind(this);
    onChangeBillNotes = this.onChangeBillNotes.bind(this);
    onSubmit = this.onSubmit.bind(this);

    onChangeBillName(event) {}

    onChangeBillPaymentURL(event) {}

    onChangeBillDueDate(event) {}

    onChangeBillDueAmount(event) {}

    onChangeBillNotes(event) {}

    onSubmit(event) {}

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