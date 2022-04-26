
const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("I can smarty code Node hlo bd now!!");
});

const users = [
  { id: 1, name: "Masum", email: "masum@gmail.com", Phone: "01536869741" },
  { id: 2, name: "Masum", email: "masum@gmail.com", Phone: "01536869741" },
  { id: 3, name: "Masum", email: "masum@gmail.com", Phone: "01536869741" },
  { id: 4, name: "Masum", email: "masum@gmail.com", Phone: "01536869741" },
  { id: 5, name: "Masum", email: "masum@gmail.com", Phone: "01536869741" },
  { id: 6, name: "Masum", email: "masum@gmail.com", Phone: "01536869741" },
  { id: 7, name: "Masum", email: "masum@gmail.com", Phone: "01536869741" },
];

app.get("/users", (req, res) => {
  if(req.query.name){
     const search = req.query.name.toLowerCase;
     const matched = users.filter(user => user.name.toLowerCase().includes(search))
     res.send(matched)
    }      
  else{ 
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening to port", port);
});

app.post('/user', (req, res) =>{
  console.log('request', req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user)
})