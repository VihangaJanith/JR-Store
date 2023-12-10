const mongoose = require('mongoose');

const dbConnection = () => {
    const MONGO_URL = "mongodb+srv://vjs1:vjs1@cluster0.2bqnf.mongodb.net/?retryWrites=true&w=majority";

    mongoose.connect(MONGO_URL);

    mongoose.connection.on('connected', () => {
        console.log('Database connection success');
    });

    mongoose.connection.on('error', (err) => {
        console.error('Database connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });
};

module.exports = { dbConnection };
