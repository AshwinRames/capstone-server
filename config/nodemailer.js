const nodemailer = require('nodemailer');
require('dotenv').config();

exports.createTransport = nodemailer.createTransport({
    port:465,
    host:"smtp.gmail.com",
    service:"gmail",
    auth:{
        user:process.env.NODEMAILER_EMAIL,
        pass:process.env.NODEMAILER_PASS,
    },
    secure: true,
    tls:{
        rejectUnauthorized:false,

    },
});