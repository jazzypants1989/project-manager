const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.DB_STRING);

    console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline.bold);
}

module.exports = connectDB;