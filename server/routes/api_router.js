const { Router } = require('express');
const { api } = require('../controllers');


const router = Router();

router.get('/', api.getApiData);


module.exports = router;