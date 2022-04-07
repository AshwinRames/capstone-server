const nodemailer = require('nodemailer');

exports.createTransport = nodemailer.createTransport({
    port:465,
    host:"smtp.gmail.com",
    service:"gmail",
    auth:{
        user:"ashwinr1357@gmail.com",
        pass:"cabtdsosjbyxjdzf",
    },
    secure: true,
    tls:{
        rejectUnauthorized:false,

    },
});