const express = require('express');
const app = express();

app.use("/user", (req, res) => {
    res.send("User Page");
})

app.use("/", (req, res) => {
    res.send("HALOOO!");
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})