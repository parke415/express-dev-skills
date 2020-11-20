var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

router.get('/:idx', skillsCtrl.show);
router.get('/', skillsCtrl.index);


module.exports = router;