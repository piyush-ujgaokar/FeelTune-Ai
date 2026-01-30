const mongoose=require('mongoose');


const songSchema=new mongoose.Schema({
    title:{
        type:String,   
    },
    artist:{
        type:String,
    },
    songUrl:{
        type:String,
    },
    mood:{
        type:String,
    }
})

const songModel=mongoose.model('Song',songSchema);

module.exports=songModel;