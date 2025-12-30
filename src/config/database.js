const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://snorfly:Ri86DZzBhF2d7Spu@winyalun.aqbn3fw.mongodb.net/CupidStack');
}

module.exports = connectDB;
