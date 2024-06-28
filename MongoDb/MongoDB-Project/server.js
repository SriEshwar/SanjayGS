const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/petrolDatabases');

// Schema definition 
const recordSchema = new mongoose.Schema({
    vehicleNumber: String,
    fuel: String,
    date: String,
    litres: Number,
    rupees: Number
});

const Record = mongoose.model('Record', recordSchema);

// HTML endpoint
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// API endpoint to save record
app.post('/record', (req, res) => {
    const formData = req.body;
   

    Record.create(formData)
    .then(record => {
        console.log('Record saved successfully:', record);
        res.redirect('/');
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Error saving record to the database.');
    });

});

// API endpoint to retrieve all records
app.get('/records', (req, res) => {
    Record.find({})
        .then(records => {
            res.json(records);
           
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error fetching records from the database.');
        });
});
// API endpoint to update record
app.put('/record/:id', (req, res) => {
    const recordId = req.params.id;
    const updatedData = req.body;

    Record.findByIdAndUpdate(recordId, updatedData, { new: true })
        .then(updatedRecord => {
            res.json(updatedRecord);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error updating record in the database.');
        });
});

// API endpoint to delete record
app.delete('/record/:id', (req, res) => {
    const recordId = req.params.id;

    Record.findByIdAndDelete(recordId)
        .then(() => {
            res.sendStatus(204);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error deleting record from the database.');
        });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


