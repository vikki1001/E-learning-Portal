const conn = require("./config/db");
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const StudentsModel = require("./src/models/students");
var cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
 


app.post("/students", async (req, res) => {
    try {
        const student = await StudentsModel.create(req.body);
        res.status(201).send(student);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
     }
});

app.get('/getstudentslist', async (req, res) => {
    try {
      const students = await StudentsModel.find({});
      res.send(students);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });



app.get("/",(req,resp)=>{
    resp.send("app  is working with mongoose db...");
});

app.listen(4000);