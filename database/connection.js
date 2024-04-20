const mongoose = require('mongoose');

const connection = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/poli_consejero');
        console.log('Connected to MongoDB');
    }catch(error){
        console.log(error);
        console.log('Error connecting to MongoDB');
    }
}

module.exports = {
    connection
};