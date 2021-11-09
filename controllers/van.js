var van = require('../models/van');
// List of all vans
exports.van_list = async function (req, res) {
    try {
        theVan = await van.find();
        res.send(theVan);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific van.
exports.van_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: van detail: ' + req.params.id);
};
// Handle van create on POST.
exports.van_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: van create POST');
};
// Handle van delete form on DELETE.
exports.van_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: van delete DELETE ' + req.params.id);
};
// Handle van update form on PUT.
exports.van_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: van update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.van_view_all_Page = async function (req, res) {
    try {
        theVans = await van.find();
        res.render('van', { title: 'Van Search Results', results: theVans });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume create on POST.
exports.van_create_post = async function (req, res) {
    console.log(req.body)
    let document = new van();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Name = req.body.Name;
    document.Company = req.body.Company;
    document.Price = req.body.Price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};