var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:idx', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:idx', skillsCtrl.delete);
router.get('/:idx/edit', skillsCtrl.edit);
router.put('/:idx', skillsCtrl.update);

module.exports = router;