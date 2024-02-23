/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const userdata = require("../models/User");
const { body, validationResult } = require("express-validator");

//create new user using post : "/api/auth/createuser"
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name ").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password ").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // const user = userdata(req.body);
    // user.save();
    // res.send(req.body);



    //If there are errors return bad request and the errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }
    try{

        //check wheather the user with this email already exists or not

        let user =  await userdata.findOne({email : req.body.email})
        console.log(user)
        if(user){
            return res.status(400).json({error : 'Sorry a user with email already exists.'})
        }
        user =  await userdata.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          })
          res.json(user)
          console.log('Success')

    }
    catch(err) {
        console.log(err.message);
        res.status(500).json({ error: "error", message: err.message });
      }

    // const {name,password} = req.body;
    // if(name.length > 3 && password.includes('@'))
    // {
    //     console.log(name,password)
    //     const user  = userdata(req.body)
    //     user.save();
    //     res.send(req.body);
    // }
    // else{
    //     console.log('er')
    // }
  }
);

module.exports = router;
