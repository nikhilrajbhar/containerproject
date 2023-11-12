import mongoose from 'mongoose';

const dbConnectionString = 'mongodb+srv://nik:NA7T4JExmRAPuGZ@cluster0.ozcp8.mongodb.net/container';
function initDB(){
    if(mongoose.connections[0].readyState){
        console.log("alredy connected")
        return
    }
    mongoose.connect(dbConnectionString,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    mongoose.connection.on('connected',()=>{
        console.log("connected to mongo")
    })
    mongoose.connection.on('error',(err)=>{
        console.log("error connecting",err)
    })
}


export default initDB