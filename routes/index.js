var express = require('express');
var router = express.Router();

router.get('/:loc/:lip', (req, res) => {
  res.render('index', {
    loc: req.params.loc,
    lip: req.params.lip
  });
});
router.get('/streamaudio', (req, res) => {
  res.render('streamaudio');
});

module.exports = router;
