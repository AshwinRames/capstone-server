var express = require('express')
var router = express.Router();
const sendmail = require("../middleware/nodemailer");


router.post('/',async(req,res) => {
console.log(req.body);

    const mailOptions = {
        to:req.body.email,
        subject:"Ticket Confirmation",
        html:`<h3>Ticket Confirmation</h3>
        <br/>
        <h3>Name:${req.body.username}</h3>
        <h3>Start Place:${req.body.from}</h3>
        <h3>Destination Place:${req.body.to}</h3>
        <h3>Seat Allocated:${req.body.allo}</h3>
        <h3>Date of Travel:${req.body.date}</h3>
        <h1>Happy Travel <p>	
        &#128640;</p></h1>
        `,

    };
    await sendmail(mailOptions);
})

module.exports = router;