var express = require('express');
var router = express.Router();

// Require controller modules
var api_controller = require('../controllers/api');
var van_controller = require('../controllers/van');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// van ROUTES ///
// POST request for creating a van.
router.post('/van', van_controller.van_create_post);
// DELETE request to delete van.
router.delete('/vans/:id', van_controller.van_delete);
// PUT request to update van.
router.put('/van/:id', van_controller.van_update_put);
// GET request for one van.
router.get('/van/:id', van_controller.van_detail);
// GET request for list of all van items.
router.get('/van', van_controller.van_list);
/* GET detail van page */

module.exports = router;