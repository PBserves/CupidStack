const express = require('express');
const app = express();


app.get("/user", (req, res) => {
    res.send("demnnnnnnnnnn!");
})
app.post("/user", (req, res) => {
    res.send("demnnnnnnnnnn! Post request received.");
})
app.delete("/user", (req, res) => {
    res.send("demnnnnnnnnnn! Delete request received.");
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})