const express = require('express');
const connectDB = require('./config/database');
const app = express();
const User = require('./models/user');
app.post('/signup', async (req, res) => {
    const user = new User(
        {
            firstName: "Virat",
            lastName: "Kohli",
            email: "vyratt@example.com",
            password: "password123",
            age: 38,
            gender: "male"
        }
    )
    try {
        await user.save();
        res.send("User signed up successfully");
    } catch (err) {
        res.status(500).send("Error signing up user: " + err.message);
    }

})
connectDB()
    .then(() => {
        console.log("Database connected successfully");
        app.listen(3000, () => {
            console.log('Server is listening on port 3000');
        })
    })
    .catch((err) => {
        console.error("Database connection failed !!");
    });

