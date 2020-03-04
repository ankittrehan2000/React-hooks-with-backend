const mongoose = require('mongoose');

const connectDb = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected ' + connection.connection.host);
    }
    catch(err){
        console.log(err);
        process.exit(1); //exit with failure
    }
}

module.exports = connectDb;