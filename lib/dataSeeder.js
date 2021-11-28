'use strict';

var HumberProgram = require('../models/humberProgram');

var dataInitializer = function () {

    var initializeData = function(callback) {
           
            var runHumberProgram = new HumberProgram({
                program             : 'Cloud Computing',
                course         : 'Virtualization',
                reviews            : [
                    {
                        review: 'Amazon - AWS',
                        description: 'It has deep learning of Dockers.'
                    },
                    {
                        review: 'Google Cloud Platform',
                        description: 'Opportunity to enhance more skills and knowledge on GCP.'
                    }
                ]});
             
             runHumberProgram.save(function(err) {
                 if (err) {
                     return callback(err);                     
                 }
             });
             
            var psHumberProgram = new HumberProgram({
                humber             : 'Game Programing',
                course         : 'Application Programming',
                reviews            : [
                    {
                        review: 'Samsung Andriod Application',
                        description: 'Develop and build Android Application.'
                    },
                    {
                        review: 'IOS Application',
                        description: 'Develop and build Ios Application.'
                    }
                ]});
             
             psHumberProgram.save(function(err) {
                 if (err) {
                     return callback(err);                     
                 }
             });

             callback();

        };


    return {
        initializeData: initializeData
    };

}();

module.exports = dataInitializer;