const express = require('express');

const authenticate = require('../middlewares/authenticate');
const groupCtrl = require('../controllers/group');

const router = express.Router();

router.get('/', groupCtrl.list);

router.get('/:id', groupCtrl.show);

router.post('/', authenticate, express.json(), groupCtrl.add);

module.exports = router;
