const {Router} = require('express');
const router = Router()

const SearchController = require('../controllers/SearchController');
router.post('/list',SearchController.list);

module.exports = router;