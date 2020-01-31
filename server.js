const express = require('express');

const app = express();

app.get('/api/customers', (req, res) =>{
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Castillo'},
        {id: 1, firstName: 'Alex', lastName: 'Vazquez'},
        {id: 1, firstName: 'Freddy', lastName: 'Gonzalez'}
    ];
    res.json(customers)
});

const port = 5000;

app.listen(port,() => console.log(`Server startedon port ${port}`));
