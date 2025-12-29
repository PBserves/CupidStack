const express = require('express');
const app = express();

const { adminAuth } = require('./middlewares/auth');
const { userAuth } = require('./middlewares/auth');
app.use("/admin", adminAuth);

app.get("/admin/getAllUsers", (req, res) => {
    res.send("Here is all the users you requested");
});

app.get("/admin/deleteAllUsers", (req, res) => {
    res.send("Deleted all users");
});
app.get("/user/login", (req, res) => {
    res.send("User logged in");
});
app.get("/user/data", userAuth, (req, res) => {
    res.send("User route accessed");
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})