const router = require('express').Router();

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 3002' });
});

router.get('/user1', async (req, res, next) => {
  res.send({ message: 'user1 3002' });
});


module.exports = router;
