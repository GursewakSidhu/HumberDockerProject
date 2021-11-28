'use strict';

var HumberProgram = require('../models/humberProgram');

var humberProgramsRepository = function() {

    var getHumberPrograms = function(callback) {

        HumberProgram.find(function(err, programs) {

            if (err) return callback(err, null);

            callback(err, programs);

        });

    };

    return {
        getHumberPrograms : getHumberPrograms
    };

}();

module.exports = humberProgramsRepository;