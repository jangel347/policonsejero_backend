const {connection} = require('./database/connection');
const express = require('express');
const cors = require('cors');

console.log('Application starts');
//connection to database
connection();

//create a node server
const app = express();
const port = 3900;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
const search_routes = require('./routes/search');

app.use('/api/search', search_routes);
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});