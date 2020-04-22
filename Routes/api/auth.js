const express = require('express');
const router = express.Router();
const Staff = require('../../Models/Staff');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../Middleware/auth');

router.post(
  '/',

  async (req, res) => {
    const { loginid, password, destination } = req.body;
    var department = 'Cafeteria';
    try {
      //See if the staff exists

      let staff = await Staff.findOne({
        loginid: loginid,
        department: department,
        destination: destination,
        password: password,
      });
      if (!staff) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      // Match loginid with password

      const payload = {
        staff: {
          id: staff.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtToken'),
        { expiresIn: 3600000000 },
        (err, token) => {
          if (err) throw err;
          res.status(201).json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(400).send(err.message);
    }
  }
);

router.get('/', auth, async (req, res) => {
  try {
    const staff = await Staff.findById(req.staff.id).select('-password');
    return res.json({ Staff: staff });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
