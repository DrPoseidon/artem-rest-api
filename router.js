const Router = require('express').Router;
const router = new Router;
const TableController = require('./controllers/table-controller');
const UserController = require('./controllers/user-controller');

router.post('/createSection', TableController.createSection);

router.post('/createElement', TableController.createElement);

router.delete('/deleteElement', TableController.deleteElement);

router.put('/updateElement', TableController.updateElement);

router.get('/getTable', TableController.getTable);

router.post('/register', UserController.register);

router.get('/getUsers', UserController.getUsers);

router.post('/getUser', UserController.getUser);

module.exports = router;