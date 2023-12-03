const { Router } = require('express');
const api = require('./api_router');


const router = Router();

router.use('/api', api);


module.exports = router;