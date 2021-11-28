const express = require('express'),
      router = express.Router(),
      humberProgramsRepository = require('../lib/humberProgramsRepository'),
      HumberProgramModel = require('../models/humberProgram');

/* GET home page. */
router.get('/', (req, res, next) => {
  humberProgramsRepository.getHumberPrograms((err, programs) => {
      res.render('index', { humberPrograms: programs });
  });  
});

/* GET new Review page */
router.get('/newReview', (req, res, next) => {
  res.render('newReview');
});

router.post('/newReview', (req, res, next) => {
  // Extremely simple implementation to get a review in the database
  const programData = {
    program: req.body.program,
    course: req.body.course,
    reviews: [{ 
      review: req.body.review,
      description: req.body.ex_description
    }]
  }
  const program = new HumberProgramModel(programData);

  program.save((err, obj) => {
    if (err) return console.error(err);
    console.log(obj.program + " saved to programs collection.");
    res.redirect('/');
  });
});

module.exports = router;
