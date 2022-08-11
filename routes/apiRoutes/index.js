const router = require("express").Router();
const animalRoutes = require("../apiRoutes/animalRoutes");
router.use(animalRoutes);
router.use(require("./zookeepRoutes"));
module.exports = router;
