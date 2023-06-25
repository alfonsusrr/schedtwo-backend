// "use strict";
// let myNumber = 10;

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3001; 

// adding calendari block
app.post('/calendar/block', (req, res) => {
    // in html, make a form for this -- id primary key n auto generated? default color exist?
    const {id, title, startTime, endTime, description, link, color, notifyTime} = req.body;

    // error handling
    if (!id || !title || !startTime || !endTime) {
        return res.status(400).json({ error: 'Missing required information' });
    }
    // write logic to add the calendar
    const calendarBlock = {
        id,
        title,
        startTime,
        endTime,
        description,
        link,
        color,
        notifyTime
    };

    res.status(200).json({message: 'Calendar block added'});
});

// deleting calendar block
app.delete('/api/calendar/block/:id', (req, res) => {
    const { id } = req.params;
  
    // Perform the logic to delete the calendar block with the specified ID
    // Replace this with your actual implementation to delete the calendar block
    const deletedBlock = {
      id,
      message: 'Calendar block deleted successfully.'
    };
  
    // Return the deleted block or an appropriate response
    return res.status(200).json(deletedBlock);
  });
  


app.listen(port, () => {
console.log(`App is running at http://localhost:${port}`);
});
