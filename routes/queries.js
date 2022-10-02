const express = require('express');
const router = express.Router();
// const { render_queries } = require("../controllers/page_controller");

// create the RUD methods
const {
    addQuery,
    createQuery,
    deleteQuery,
    getQueries,
    updateQuery,
    editQuery
} = require('../controllers/queries');
//queries page
router.route('/').post(createQuery).get(getQueries);
router.route('/delete/:id').get(deleteQuery);
router.route('/update/:id').post(updateQuery);
router.route('/edit/:id').get(editQuery);
router.route('/add').get(addQuery);

module.exports = router;