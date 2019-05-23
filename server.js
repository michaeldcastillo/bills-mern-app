const express = require('express'); //bring in express
const app = express(); //create app variable and initialize express
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Routes = express.Router();
const PORT = 5000; //'create-react-app' uses 3000
let BillDoc = require("./bill.model.js");

//use middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect to local Mongo database 'todos' using mongoose package
mongoose.connect("mongodb://localhost:27017/billsDatabase", { useNewUrlParser:true });
const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB database connection established successfully.");
});

/* route for OLD-EXAMPLES
//api route
app.get('/api/data', (req, res) => {
    //hard-code data, this normally comes form a database!
    const backendData = [
        { id: 1, firstName: 'Mike', lastName: 'Castillo' },
        { id: 2, firstName: 'Kat', lastName: 'Mendez' },
        { id: 3, firstName: 'Laura', lastName: 'Havlick' }
    ];
    res.json(backendData);
});
*/

/* sample bill data...
{
	"_id" : ObjectId("5ce5b9e8febc2a72d0c933de"),
	"bill_name" : "my first bill",
	"bill_payment_url" : "my link",
	"bill_due_date" : "tomorrow",
	"bill_due_amount" : "20,000",
	"bill_notes" : "i don't have the money!",
	"__v" : 0
}
*/

//(a.) CREATE - POST ONE RESPONSE...
//http://localhost:5000/api/create
//Routes.route().post().then().catch();
Routes.route('/create').post(function(httpRequest, httpResponse) {
    console.log("\nPOST request for 'localhost:5000/api/create' works!");
    console.log("httpRequest.body = ", httpRequest.body);
    
    let newBillDoc = new BillDoc(httpRequest.body);
    console.log("new BillDoc(httpRequest.body) = ", newBillDoc);
    
    newBillDoc.save()
        .then(bill => {
            httpResponse.status(200).json({'bill': 'successfully added to billsDatabase'});
        })
        .catch(err => {
            httpResponse.status(400).send('adding new bill to billsDatabase has failed');
        });

});

//(b.) READ - GET ALL RESPONSE...
//http://localhost:5000/api
Routes.route('/').get(function(httpRequest, httpResponse) {
    console.log("\nGET request for 'localhost:5000/api' works!");
    BillDoc.find({}, function(findError, foundBillDocs) {
        if(findError) {
            //do something
            console.log("findError = ", findError);
            httpResponse.json(findError);
        } else {
            //do something else
            console.log("foundBillDocs = ", foundBillDocs);
            httpResponse.json(foundBillDocs);
        }
    });
});


//(c.) READ - GET ONE RESPONSE...
//http://localhost:5000/api/id
Routes.route('/:id').get(function(httpRequest, httpResponse) {
    console.log("\nGET request for 'localhost:5000/api/"+httpRequest.params.id+"' works!");
    let id = httpRequest.params.id;
    BillDoc.findById(id, function(findError, foundBillDoc) {
        if(findError) {
            console.log("findError = ", findError);
            httpResponse.json(findError);
        } else {
            console.log("foundBillDoc = ", foundBillDoc);
            httpResponse.json(foundBillDoc);
        }
    });
});


//(d.) UPDATE - POST ONE RESPONSE...
//http://localhost:5000/api/update/id
Routes.route('/update/:id').post(function(httpRequest, httpResponse) {
    console.log("\nGET request for 'localhost:5000/api/udpate/"+httpRequest.params.id+"' works!");
    let id = httpRequest.params.id;
    BillDoc.findById(id, function(findError, foundBillDoc) {
        if(findError) {
            console.log("findError = ", findError);
            httpResponse.json(findError);
        } else if(!foundBillDoc) {
            console.log("foundBillDoc = ", foundBillDoc);
            httpResponse.status(404).send("bill with id: "+id+" was not found in billsDatabase");
        } else {
            console.log("foundBillDoc = ", foundBillDoc);
            foundBillDoc.bill_name = httpRequest.body.bill_name;
            foundBillDoc.bill_payment_url = httpRequest.body.bill_payment_url;
            foundBillDoc.bill_due_date = httpRequest.body.bill_due_date;
            foundBillDoc.bill_due_amount = httpRequest.body.bill_due_amount;
            foundBillDoc.bill_notes = httpRequest.body.bill_notes;
            foundBillDoc.save().then(mongoResponse => {
                console.log("mongoResponse = ", mongoResponse);
                httpResponse.status(200).send("bill with id: "+id+" was successfully updated in billsDatabase");
            }).catch(mongoSaveError => {
                console.log("mongoSaveError = ", mongoSaveError);
                httpResponse.status(400).send("bill with id: "+id+" could not be saved to billsDatabase");
            });
        }
    });

});


//(e.) DELETE - GET ONE RESPONSE...
//http://localhost:5000/api/delete/id
Routes.route('/delete/:id').get(function(httpRequest, httpResponse) {
    console.log("\nGET request for 'localhost:5000/delete/id' works!");
    console.log("httpRequest.params.id = ", httpRequest.params.id);

    BillDoc.findById({ _id: httpRequest.params.id }, function(findError, foundBillDoc) {
        if(findError) {
            console.log("findError = ", findError);
            httpResponse.json(findError);
        } else {
            foundBillDoc.remove(function(removeError, removedBillDoc) {
                if(removeError) {
                    console.log("removeError = ", removeError);
                    httpResponse.json(removeError);
                } else {
                    console.log("removedBillDoc = ", removedBillDoc);
                    httpResponse.send({ data: removedBillDoc });
                    //httpResponse.send("bill with id: "+httpRequest.params.id+" was successfully deleted from billsDatabase");
                }
            });
            
        }
    });

});





//append 'api' to URL
app.use('/api', Routes);

//start server
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));