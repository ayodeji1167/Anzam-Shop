const mongoose = require('mongoose')

const connectDb = async()=>{
    try{
      const con =  await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database Connected ${con.connection.host}`.cyan.underline);
    }
    catch(err){
        console.log(`Error ${err.message}`.red.underline.bold);
    }
}

module.exports = connectDb;