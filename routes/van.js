var express = require('express');
const van_controller= require('../controllers/van');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET Vans */
router.get('/', van_controller.van_view_all_Page );
router.get('/create',secured, van_controller.van_create_Page);
/* GET create update page */
router.get('/update',secured, van_controller.van_update_Page);
module.exports = router;
/* GET create costume page */
router.get('/delete',secured, van_controller.van_delete_Page);

