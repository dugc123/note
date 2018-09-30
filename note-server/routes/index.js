var express = require('express');
var router = express.Router();
const user = require("../controller/user")
const categories = require("../controller/categories")
const article = require("../controller/article")

router.use(user)
router.use(categories)
router.use(article)

module.exports = router
