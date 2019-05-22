const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let BillSchema = new Schema({
    bill_name: String,
    bill_payment_url: String,
    bill_due_date: String,
    bill_due_amount: String,
    bill_notes: String,
    bill_paid_amount: String,
    bill_paid_status: Boolean
});

module.exports = mongoose.model("BillDoc", BillSchema);