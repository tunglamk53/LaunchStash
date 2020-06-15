const express = require("express");
const { check, validationResult } = require("express-validator");
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
    "/signup", [
        check("username", "Please Enter a Valid Username")
        .not()
        .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        // check("password", "Password needs at least 6 characters").isLength({
        //     min: 6
        // })
    ],
    async(req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                error: JSON.stringify(errors.array())
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
                    message: "Email Already Exists !"
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
                    expiresIn: 3600 //login-token is expired in 60 mins
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
    "/login", [
        check("email", "Please enter a valid email").isEmail()
    ],
    async(req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                error: errors.array()
            });
        }

        const { email, password } = req.body;
        try {
            let user = await UserModel.findOne({ email });

            if (!user)
                return res.status(400).json({
                    message: "Email Not Exist !"
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

router.get("/loggedin", AuthenUser, async(req, res) => {
    try {
        // request.user is getting fetched from Middleware after token authentication
        const user = await UserModel.findById(req.user.id);
        res.json(user);
    } catch (e) {
        res.send({ message: "Error in Fetching user" });
    }
});


/**
 * @method - GET
 * @description - GET Checklists by User Email
 * @param - /user/my-checklist/:email
 */
router.get("/my-checklist/:email", AuthenUser, async(req, res) => {
    const email = req.params.email;

    try {
        const user = await UserModel.findOne({ email: email })
            // .match({"email" : email})
            // .project({"checklist" : 1})
            // .sort("checklist.createdAt")
        res.status(200).json(user);
    } catch (e) {
        res.status(500).send({ message: "Error in Fetching Checklists User" });
    }
});

/**
 * @method - DELETE
 * @description - DELETE Checklist by User Email
 * @param - /user/my-checklist/:email
 */
router.delete("/my-checklist/:email/:id", AuthenUser, async(req, res) => {
    try {
        const email = req.params.email
        const id = req.params.id
        console.log(email)
        console.log(id)
        const users = await UserModel.findOneAndUpdate({ "email": email }, { $pull: { checklist: { _id: id } } }, { new: true },
                (e, users) => {
                    // if (!e) res.status(500).json({
                    //     errors: e.array()
                    // })
                    res.status(200).json(users)
                })
            // const deletedChecklist = await user.pull({ checklist: { _id: id } })
            // console.log(user)
    } catch (e) {
        res.status(500).send({ message: "Error in Deleting Checklist" });
        console.log(e)
    }
})


/**
 * @method - GET
 * @description - Get User Profile by User Email
 * @param - /user/profile
 */
router.get("/profile/:email", AuthenUser, async(req, res) => {
    const email = req.params.email;

    try {
        const user = await UserModel.findOne({ email: email })
        res.status(200).json(user);
    } catch (e) {
        res.status(500).send({ message: "Error in Fetching User" });
    }
});


/**
 * @method - PUT
 * @description - PUT Update Checklist - LoggedIn User
 * @param - /user/checklist
 */
router.put(
    "/checklists", AuthenUser,
    async(req, res) => {
        const {
            email,
            name,
            step1,
            step2,
            step3,
            step4
        } = req.body;

        try {
            await UserModel.findOneAndUpdate({ email: email }, {
                    $addToSet: {
                        'checklists': {
                          'name': name,
                          'step1': step1,
                          'step2': step2,
                          'step3': step3,
                          'step4': step4
                        }
                    }
                }, { upsert: true, new: true },
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


module.exports = router;
