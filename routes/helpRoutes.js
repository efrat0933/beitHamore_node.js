import { Router } from 'express';
import { logger } from '../middlewares/logMiddleware.js';
const router = Router();

router.use(logger);

router.get('/help', function (req, res, next) {
    res.status(200).send('do you need any help?');

});

router.get('/helpInfo', function (req, res, next) {
    res.status(200).send('my info');

});

router.get('/helpBy', function (req, res, next) {
    res.status(200).send('byebye');

});


export default router;