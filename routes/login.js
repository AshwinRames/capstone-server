const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

const router = express.Router();

router.post("/login", async(req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body)
    try {
        User.findOne({ email: email }, (err, doc) => {
            console.log(doc);
            if (err) {
                res.status(500).json({message:"Error in login"});
            } else {
                if (!doc) {
                    res.json({message:"no user found"});
                } else {
                    bcrypt.compare(password, doc.password, function(error, response) {
                        console.log(response);
                        if(response == true){
                            const token = jwt.sign({ doc }, "top_secret");
                            console.log(token)
                            res.status(200).json({ token,message:"success" });
                        }else{
                            res.json({message:"Error in user"});
                        }
                       
                    });
                }
            }
        });
    } catch (error) {}
    // passport.authenticate("login", async(err, user, info) => {
    //     try {
    //         if (err || !user) {
    //             const error = new Error("No User Found");
    //             console.log("Yellow", err);
    //             return next(error);
    //         }
    //         req.login(user, { session: false }, async(error) => {
    //             if (error) return next(error);
    //             const body = {
    //                 _id: user._id,
    //                 name: user.name,
    //                 email: user.email,
    //                 gender: user.gender,
    //             };
    //             const token = jwt.sign({ user: body }, "top_secret");
    //             return res.json({ token });
    //         });
    //     } catch (error) {
    //         return next(error);
    //     }
    // })(req, res, next);
});

// router.get('/Login', (req, res) => {
//     res.send("Login Here")
// })

module.exports = router;