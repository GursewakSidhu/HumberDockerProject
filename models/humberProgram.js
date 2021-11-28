'use strict';

var mongoose        = require('mongoose'),
    Schema          = mongoose.Schema,
    ObjectId        = Schema.Types.ObjectId;
    
var reviewSchema = Schema({
    review     : { type: String, required: true },
    description : { type: String, required: true },
});

var humberProgramSchema = Schema({
    program                 : { type: String, required: true },
    course             : { type: String, required: true },
    reviews                : [reviewSchema]
});

var HumberProgramModel = mongoose.model('humberProgram', humberProgramSchema);

module.exports = HumberProgramModel;