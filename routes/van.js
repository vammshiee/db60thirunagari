var express = require('express');
const van_controller= require('../controllers/van');
var router = express.Router();

/* GET Vans */
router.get('/', van_controller.van_view_all_Page );
router.get('/create', van_controller.van_create_Page);
/* GET create update page */
router.get('/update', van_controller.van_update_Page);
module.exports = router;
/* GET create costume page */
router.get('/delete', van_controller.van_delete_Page);

