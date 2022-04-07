const { createTransport} =  require("../config/nodemailer");

const sendMail = (mailOptions) => {
    return new Promise(async (resolve,reject) => {
        try{
            let info = await createTransport.sendMail(mailOptions);
            if(info) resolve("sent");
            else reject ("error in sending");

        }catch(err){
            console.log(err);
            reject("mail not sent");
        }
    });
};

module.exports = sendMail;