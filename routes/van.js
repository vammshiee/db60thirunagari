var express = require('express');
const van_controlers= require('../controllers/van');
var router = express.Router();

/* GET Vans */
router.get('/', van_controlers.van_view_all_Page );

/* GET detail van page */
router.get('/detail', van_controlers.van_view_one_Page);

module.exports = router;


