const { Router } = require('express');

const router = Router();
const logMiddleware = require("../middlewares/logMiddleware");
const log = logMiddleware.log;

const logger = function (req, res, next) {
    console.log('Someone entered to help in time: ', Date.now());
    next();
  };

  router.use(logger);

router.get('/help', log, function (req, res, next) {
    res.status(200).send('do you need any help?');

});

router.get('/helpInfo', function (req, res, next) {
    res.status(200).send('my info');

});

router.get('/helpBy', function (req, res, next) {
    res.status(200).send('byebye');

});


module.exports = router;