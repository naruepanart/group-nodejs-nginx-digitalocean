const router = require('express').Router();

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 3001' });
});

router.get('/user1', async (req, res, next) => {
  res.send({ message: 'user1 3001' });
});

module.exports = router;
