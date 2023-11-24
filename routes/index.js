const express = require('express');
const router = express.Router();

const controllers = require('../controllers/index');

router.get('/',controllers.getIndex);

router.get('/cancel', controllers.getCancel);

router.post('/add-task',controllers.postAddTask);

router.get('/edit-task/:taskId',controllers.getEditTask);

router.post('/edit-task',controllers.postEditTask);

router.post('/delete-task',controllers.postDeleteTask);

module.exports = router;