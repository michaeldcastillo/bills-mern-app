import React, { Component } from "react";
import axios from 'axios';

class UpdateOne extends Component {

    /* --------------------- BIND -------------------- */
    onChangeBillName = this.onChangeBillName.bind(this);
    onChangeBillPaymentURL = this.onChangeBillPaymentURL.bind(this);
    onChangeBillDueDate = this.onChangeBillDueDate.bind(this);
    onChangeBillDueAmount = this.onChangeBillDueAmount.bind(this);
    onChangeBillNotes = this.onChangeBillNotes.bind(this);
    onChangeBillPaidAmount = this.onChangeBillPaidAmount.bind(this);
    onChangeBillPaidStatus = this.onChangeBillPaidStatus.bind(this);
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

    /* --------------------- COMPONENT EVENT LISTENER -------------------- */
    componentDidMount() {
        console.log("UpdateOne componentDidMount()...");

        //(c.) READ - GET ONE RESPONSE...
        //http://localhost:5000/api/id
        //axios here = axios.get().then().catch()
        axios.get('/api/'+this.props.match.params.id).then((httpGetResponse) => {
            console.log("httpGetResponse.data = ", httpGetResponse.data);
            //console.log("this = ", this);
            console.log("this.state = ", this.state); //empty
            this.setState({ 
                bill_name: httpGetResponse.data.bill_name,
                bill_payment_url: httpGetResponse.data.bill_payment_url,
                bill_due_date: httpGetResponse.data.bill_due_date,
                bill_due_amount: httpGetResponse.data.bill_due_amount,
                bill_notes: httpGetResponse.data.bill_notes,
                bill_paid_amount: httpGetResponse.data.bill_paid_amount,
                bill_paid_status: httpGetResponse.data.bill_paid_status
            });
            console.log("this.state = ", this.state);
        }).catch(function(axiosError) {
            console.log("UpdateOne axios.get() error = ", axiosError);
        });
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

    onChangeBillPaidAmount(event) {
        this.setState({bill_paid_amount: event.target.value});
    }

    onChangeBillPaidStatus(event) {
        console.log("onChangeBillPaidStatus()...");
        this.setState({bill_paid_status: !this.state.bill_paid_status}); //set to opposite of whatever state value is
    }


    /*
    onChangeTodoCompleted(event) {
        console.log("\nonChangeTodoCompleted(event)...");
        console.log("this.state.todo_completed = ", this.state.todo_completed);
        console.log("event.target = ", event.target);
        console.log("event.target.value = ", event.target.value);
        console.log("!this.state.todo_completed = ", !this.state.todo_completed);
        this.setState({todo_completed: !this.state.todo_completed }); //toggle state boolean value
    }
    */

    /* --------------------- FORM SUBMIT LISTENER -------------------- */
    onSubmit(event) {
        event.preventDefault(); //prevent default page reload behavior on form submit

        const newBill = {
            bill_name: this.state.bill_name,
            bill_payment_url: this.state.bill_payment_url,
            bill_due_date: this.state.bill_due_date,
            bill_due_amount: this.state.bill_due_amount,
            bill_notes: this.state.bill_notes,
            bill_paid_amount: this.state.bill_paid_amount,
            bill_paid_status: this.state.bill_paid_status
        }
        console.log("newBill = ", newBill);

        //(d.) UPDATE - POST ONE RESPONSE...
        //http://localhost:5000/api/update/id
        //axios.post().then();
        axios.post("/api/update/"+this.props.match.params.id, newBill).then((httpPostResponse) => {
            console.log("httpPostResponse = ", httpPostResponse);
            console.log("httpPostResponse.data = ", httpPostResponse.data);
            
            //redirect after axios success
            console.log("this = ", this);
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
        console.log("UpdateOne render()...");
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
                         {/* bill_paid_amount */}
                         <div className="">
                            <label><b>Paid Amount</b></label><br />
                            <input type="text" value={this.state.bill_paid_amount} onChange={this.onChangeBillPaidAmount} />
                        </div>
                        {/* bill_paid_status */}
                        <div className="">
                            <label><b>Paid Status</b></label><br />
                            <input type="checkbox" value={this.state.bill_paid_status} checked={this.state.bill_paid_status} onChange={this.onChangeBillPaidStatus} /> (check if paid)
                        </div>
                        
                        {/* submit button */}
                        <div className="submit-container">
                            <div className="">
                                <input type="submit" value="Update Bill" className="" />
                            </div>
                        </div>
                    </form>
                
            
        );
    }
}

export default UpdateOne