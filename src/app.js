const express = require('express');
const connectDB = require('./config/database');
const app = express();
const User = require('./models/user');
app.use(express.json());
app.post('/signup', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save();
        res.send("User signed up successfully");
    } catch (err) {
        res.status(500).send("Error signing up user: " + err.message);
    }
});

app.get('/user', async (req, res) => {

    const userEmail = req.body.email;
    try {
        const users = await User.find({ email: userEmail });
        if (users.length === 0) {
            res.status(404).send("User not found");
        } else {
            res.send(users);
        }
    } catch (err) {
        res.status(400).send("error fetching user");
    }
});

// feed api (all users)
app.get('/feed', async (req, res) => {
    try {
        const users = await User.find({});
        if (users.length === 0) {
            res.status(404).send("No users found");
        } else {
            res.send(users);
        }
    } catch {
        res.status(400).send("Error fetching users");
    }
});

app.delete("/user", async (req, res) => {
    const userId = req.body.userId;
    console.log(userId);
    try {
        await User.findByIdAndDelete(userId);
        res.send("User deleted successfully");
    }
    catch {
        res.status(400).send("Error deleting user");
    }
});
app.patch("/user", async (req, res) => {
    const emailId = req.body.email;
    const updateData = req.body;
    try {
        await User.findOneAndUpdate({ email: emailId }, updateData);
        res.send("User updated successfully");
    } catch {
        res.status(400).send("Error updating user");
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

