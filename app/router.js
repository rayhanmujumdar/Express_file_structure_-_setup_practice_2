const router = require("express").Router()
//controller require
const {healthController,adminInfoController} = require('../controller/controller')
//middleware require
const {nameMatch} = require('../middleware/customMiddleware')

router.get("/health", healthController);
router.get('/adminInfo',nameMatch,adminInfoController)

module.exports = router;
