const {Router} = require('express');
const router = Router()

const SearchController = require('../controllers/SearchController');
router.post('/list',SearchController.list);
router.get('/consume',SearchController.consume);

module.exports = router;