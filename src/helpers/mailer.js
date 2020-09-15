const fs = require("fs");
const mustache = require("mustache");
const nodemailer = require("nodemailer");

const sendMailRegister = async (payload) => {
  const template = fs.readFileSync("./src/resources/views/mail.html", "utf8");

  const config = {
    service: "gmail",
    auth: {
      user: process.env.Email,
      pass: process.env.Password,
    },
  };

  const transporter = await nodemailer.createTransport(config);
  const mail = {
    to: payload.email,
    from: payload.from,
    subject: payload.subject,
    html: mustache.render(template, { ...payload }),
  };
  transporter.sendMail(mail);
};

module.exports = sendMailRegister;
