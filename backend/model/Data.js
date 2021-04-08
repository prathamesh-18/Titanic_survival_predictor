const mongoose = require('mongoose');

const dataSchema=new mongoose.Schema({

    pid:{type:String},
    Survived:{type:String},
    Pclass:{type:String},
    Name:{type:String},
    Sex:{type:String},
    Age:{type:String},
    Sibsp:{type:String},
    Parch:{type:String},
    Ticket:{type:String},
    Fare:{type:String},
    Cabin:{type:String}

    
    // firstName: {type:String},
    // lastname: {type:String},
    // gender:{type:String}}
})
module.exports = mongoose.model('data',dataSchema)