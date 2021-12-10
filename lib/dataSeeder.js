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
                        description: 'It has a conceptual learning of Dockers and Kubernetes.'
                    }
                ]});
             
             runHumberProgram.save(function(err) {
                 if (err) {
                     return callback(err);                     
                 }
             });
             
            var psHumberProgram = new HumberProgram({
                program             : 'Cloud Computing',
                course         : 'Application Programming',
                reviews            : [
                    {
                        review: 'Python',
                        description: 'Develop and build Tkinter Applications.'
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
