
require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const IC = require('./controllers/inventoryController');

const { SERVER_PORT, DATABASE_STRING } = process.env;

massive(DATABASE_STRING).then(db => {
    app.set('db', db);
    console.log('Database linked');
})

app.use(express.json());

app.get('/api/inventory/:inventory_id?', IC.getInventory);
app.post('/api/inventory', IC.addInventory);

app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`));