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

//(a.) POST RESPONSE...
//http://localhost:5000/api/create
//Routes.route().post().then().catch();
Routes.route('/create').post(function(httpRequest, httpResponse) {
    console.log("\nPOST request for 'localhost:5000/api/create' works!");
    console.log("httpRequest.body = ", httpRequest.body);
    
    let billDoc = new BillDoc(httpRequest.body);
    console.log("new BillDoc(httpRequest.body) = ", billDoc);
    
    billDoc.save()
        .then(bill => {
            httpResponse.status(200).json({'bill': 'successfully added to billsDatabase'});
        })
        .catch(err => {
            httpResponse.status(400).send('adding new bill to billsDatabase has failed');
        });

});

app.use('/api', Routes);

//start server
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));