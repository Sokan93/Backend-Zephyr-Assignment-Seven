const express = require('express');
const app = express();
const port = 3000;

app.get('/bioData', (req,res) => {
  const bioData = {
    name: "Sarah Jane",
    age: 29,
    course: "Architecture",
    school: "Wigwe University"
  }
  res.send(bioData)
});

app.get('/numArr', (req,res) => {
  const numArr = [1,2,3,4,5,6]    //array data type endpoint
  res.send(numArr)
});

app.get('/greeting', (req,res) => {
  const greeting = "Hello from Hello World" //string data type endpoint
  res.send(greeting)
});

app.get("/", (req,res) => {
  res.send("Assignment Seven by Ayodeji Sokan, remember to use corresponding routing URL(/) to get different data type endpoints")
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})