const mongoose = require('mongoose');

const dbase = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.CONNECT_URL);
        console.log("Dbase Connected")
    } catch (error) {
        console.log('dbase Connection Error');
    }
}

module.exports = { dbase }