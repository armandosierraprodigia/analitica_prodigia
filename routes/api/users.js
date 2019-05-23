const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("./../../config/keys");
const passport = require("passport");

//Load input validation
const validateRegisterInput = require("./../../validation/registerValidation");
const validateLoginInput = require("./../../validation/loginValidation");

//Load User Model
const User = require("./../../models/User");

// @route       GET api/users/test
// @description  test users route
// @access       public
router.get("/test", (req, res) => res.json({ msg: "Users works" }));


// @route       POST api/users/register
// @description  create a new user
// @access       public
router.post("/register", (req, res) => {
   const { errors, isValid } = validateRegisterInput(req.body);

   //check validation
   if (!isValid) {
      return res.status(400).json({ errors });
   }

   User.findOne({ email: req.body.email }).then(user => {
      if (user) {
         return res.status(400).json({ email: "Email already exists" });
      } else {
         const newUser = new User({
            //name: req.body.name,
            email: req.body.email,
            //avatar: avatar,
            password: req.body.password
         });

         bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
               if (err) throw err;
               newUser.password = hash;
               newUser
                  .save()
                  .then(user => {
                     res.json(user)
                  })
                  .catch(err => res.status(400).json(err));
            });
         });
      }
   });
});

// @route       GET api/users/login
//@description  Login User / Returning JWT token
//@access       Public
router.post("/login", (req, res) => {
   const { errors, isValid } = validateLoginInput(req.body);

   //check validation
   if (!isValid) {
      return res.status(400).json({ errors });
   }

   const email = req.body.email;
   const password = req.body.password;

   //Find User by email

   User.findOne({ email }).then(user => {
      //check fo user
      if (!user) {
         errors.email = "User not found";
         return res.status(404).json(errors);
      }

      //check Password
      bcrypt.compare(password, user.password).then(isMatch => {
         if (isMatch) {
            //user matched
            const payload = {
               id: user.id
               //name: user.name,
               //avatar: user.avatar
            };

            //sing token
            jwt.sign(
               payload,
               keys.secretOrKey,
               { expiresIn: "7d" },
               (err, token) => {
                  res.json({
                     success: true,
                     token: "Bearer " + token
                  });
               }
            );
         } else {
            errors.password = "Password incorrect";
            return res.status(400).json(errors);
         }
      });
   });
});

// @route       GET api/users/corrent
//@description  Login User / Return current user
//@access       private
router.get(
   "/current",
   passport.authenticate("jwt", { session: false }),
   (req, res) => {
      User.findOne({ _id: req.user.id }).then(user => {
         res.json(user);
      });
   }
);

module.exports = router;
