const mongoose=require('mongoose');
const mongoURI="mongodb+srv://saketmundra:saketsuyash@cluster0.007sqeu.mongodb.net/inotebook"

const connecttoMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongodb" );
    })
}

module.exports= connecttoMongo 