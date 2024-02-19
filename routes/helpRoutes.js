import { Router } from 'express';
import { logger } from '../middlewares/logMiddleware.js';
import { addProduct } from '../controllers/producsController.js'; 
import { createUser, getUserById, updateUser, getAllUsers } from '../controllers/userController.js';
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

router.post('/product', addProduct);

router.post('/user', createUser);

router.get('/users', getAllUsers);

router.get('/user/:id', getUserById);

router.put('/user/:id', updateUser);

router.get('/example', (req, res, next) => {
    throw new Error('blah')
});

export default router;