const controller = require('./controllers');
const router = require('express').Router();

router.get('./table', controller.table.get);
router.post('/table', controller.table.post);
router.put('/table', controller.table.get);
// router.post('/other', controller.other.post);

module.exports = router;