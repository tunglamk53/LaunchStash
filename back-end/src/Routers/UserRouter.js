const express = require("express");
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const UserModel = require("../DatabaseModels/UserModel");

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp User
*/
router.post(
    "/signup",
    [
        check("username", "Please Enter a Valid Username")
        .not()
        .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 6
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            username,
            email,
            password
        } = req.body;
        try {
            let user = await UserModel.findOne({
                email
            });
            if (user) {
                return res.status(400).json({
                    message: "User Already Exists !"
                });
            }

            user = new UserModel({
                username,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                "myToken", {
                    expiresIn: 1800
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token,
                        email
                    });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Sign Up");
        }
    }
);

/**
 * @method - POST
 * @description - Get LogIn User
 * @param - /user/login
 */
router.post(
    "/login",
    [
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password").isLength({
        min: 6
      })
    ],
    async (req, res) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }
  
      const { email, password } = req.body;
      try {
        let user = await UserModel.findOne({
          email
        });
        if (!user)
          return res.status(400).json({
            message: "User Not Exist !"
          });
  
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({
            message: "Incorrect Password !"
          });
  
        const payload = {
          user: {
            id: user.id
          }
        };
  
        jwt.sign(
          payload,
          "myToken",
          {
            expiresIn: 1800
          },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
              token,
              email
            });
          }
        );
      } catch (e) {
        console.error(e);
        res.status(500).json({
          message: "Server Error"
        });
      }
    }
);


/**
 * @method - GET
 * @description - Get LoggedIn User
 * @param - /user/loggedin
 */
const AuthenUser = require('../MiddleWare/authen-user.js')

router.get("/loggedin", AuthenUser, async (req, res) => {
    try {
      // request.user is getting fetched from Middleware after token authentication
      const user = await UserModel.findById(req.user.id);
      res.json(user);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
});


/**
 * @method - POST
 * @description - POST Checklist - LoggedIn User
 * @param - /user/checklist
 */
router.put(
  "/checklist", AuthenUser,
  async (req, res) => {
    const {
        email,
        part1,
        part2,
        part3
    } = req.body;
    try {
        await UserModel.findOneAndUpdate(
          {email: email},
          {$addToSet : {'checklist' : {
            'part1' : part1,
            'part2' : part2,
            'part3' : part3
          }}},
          { upsert: true, new: true },
          (err, todo) => {
              if (err) return res.status(500).send({
                message: 'Failed:  to save user checklist',
                isSuccess: false,
                result: todo
              });
              return res.status(200).send({
                message: 'Success:  to save user checklist',
                isSuccess: true,
                result: todo
              });
          }
        );
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
  }
)


/**
 * @method - GET
 * @description - Get Checklists User
 * @param - /user/my-checklist
 */

router.get("/my-checklist/:email", AuthenUser, async (req, res) => {
  // const email = req.header("emai-backend")
  const email = req.params.email;

  console.log(req.header("email-backend"))
  try {
    const checklists = await UserModel.aggregate([
      {$match : {email : email} },
      // {$project: {checklist : 1, _id: 0}}
    ])
                                // .match({"email" : email})
                                // .project({"checklist" : 1})
                                // .sort("checklist.createdAt")
    res.json(checklists);
  } catch (e) {
    res.send({ message: "Error in Fetching Checklists User" });
  }
});

module.exports = router;