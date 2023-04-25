const router = require('express').Router();
const {
  models: { User, Order, OrderItems },
} = require('../../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: [
        'id',
        'firstName',
        'lastName',
        'email',
        'password',
        'userType',
      ],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        {
          model: Order,
          include: [OrderItems],
        },
      ],
    });
    res.json({ user });
  } catch (err) {
    next(err);
  }
});

router.get('/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findByPk(userId);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.delete('/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send("User doesn't exits!");
    }
    await user.destroy();
  } catch (error) {
    next(error);
  }
});
