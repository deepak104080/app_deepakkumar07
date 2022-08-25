// const User = require('../models/User');
// const express = require('express');
// const bcrypt = require('bcryptjs');

// const router = express.Router();

// const jwt = require('jsonwebtoken');


// //http://localhost:4000/user/adduser
// router.post('/adduser', async (req, res) => {
//     console.log('--------------')
//     try{   
//         var salt = bcrypt.genSaltSync(10);
//         const encodedPwd = await bcrypt.hash(req.body.password, salt);
//         const tempUser = new User({
//             username: req.body.username,
//             name: req.body.name,
//             email: req.body.email,
//             mobile: req.body.mobile,
//             password: encodedPwd
//         })
//         const response = await tempUser.save();
//         console.log('response for add user - ', response);
//         res.status(201).json(response);
//     }
//     catch(err) {
//         res.status(400).json(err);
//     }
// })



// router.get('/allusers', async(req, res) => {
//     try{
//         const response = await User.find();
//         res.status(200).json(response);
//     }
//     catch(err) {
//         res.status(400).json(err);
//     }
// })

// router.post('/login', async (req, res) => {
//     try{
//         const tempUsername = req.body.username;
//         const tempPassword = req.body.password;
//         console.log(tempPassword);

//         const response = await User.findOne({username: tempUsername });
        
//         if(Object.keys(response).length !== 0) {
//             if(bcrypt.compare(tempPassword, response.password)) {
//                 let obj = {};
//                 obj.token = jwt.sign({username: response.username}, "newtonschool", {
//                     expiresIn: 600
//                 });
//                 obj = {...obj, ...response._doc};
//                 res.status(200).json(obj);
//             }
//             else {
//                 res.status(422).json({err: 'Invalid password'});
//             }
//         }
        
//         else {
//             console.log('inside main else');
//             res.status(422).json({err: 'Invalid username'});
//         }

//     }
//     catch(err) {
//         res.status(400).json(err);
//     }
// })


// module.exports = router;
