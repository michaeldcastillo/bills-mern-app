const express = require('express'); //bring in express
const app = express(); //create app variable and initialize express
const PORT = 5000; //'create-react-app' uses 3000

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

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));