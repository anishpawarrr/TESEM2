const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded())

let users =[];

app.post("/users", (req, res) => {
    console.log("request receiverd");
    const user = req.body;
    users.push(user);
    console.log(users);
    res.status(200).send("User is added to the database");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})