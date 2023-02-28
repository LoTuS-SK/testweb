const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport(
  {
  host: "smtp.mail.ru",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "lotus.magic@mail.ru", // generated ethereal user
      pass: "kPL5rxxzETHj0dT9016J", // generated ethereal password
    },
  },
    {
      from:"mailer test <lotus.magic@mail.ru>"
    }
  
  );

  const mailer = messege => {
    transporter.sendMail(messege,(err,info)=>{
        if(err) return console.log(err)
        console.log("email send",info)
    })
  }

module.exports = mailer