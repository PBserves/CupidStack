const express = require('express');
const app = express();

// best practice to have error handling middleware for each route
app.get("/getUserData", (req, res) => {
    //logic of db call and get user data
    try {
        throw new error("wrbtrtbklm");
        res.send("User Route accessed by user");
    } catch (err) {
        res.status(500).send("Something went wrong!");
    }

});
// wildcard error handling middleware and ye last me hota hai
app.use("/", (err, req, res, next) => {
    if (err) {
        //log your error 
        res.status(500).send("Something went wrong!");
    }
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})