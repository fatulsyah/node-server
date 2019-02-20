const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");
const express = require("express");
const app = express();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "fatulsyah@gmail.com",
    clientId:
      "1013569269519-ch3hpsa383ojvvsphstlimhgseimo4m8.apps.googleusercontent.com",
    clientSecret: "h-2l5CeFPmHQCxpZbqmgU8yG",
    refreshToken: "1/OOoUfYTg_lfz9eU2VxHMqEscXqUM-mTzpv0YinFPtBA"
  }
});

const mailOptions = {
  from: "Tes Node JS <arifatul.ronansyah@go-jek.com>",
  to: "fatulsyah@gmail.com",
  cc: "damianus.deni@gmail.com",
  subject: "Tes Email NodeJS",
  text: "Halo Dunia!",
  html: "<h1><i>Ini Email ya gaes!</i></h1>",
  attachments: [
    {
      filename: "halo.txt",
      content: "Halo Dunia!"
    },
    {
      filename: "google.png",
      path:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    }
  ]
};

app.get("/", (req, res) => {
  transporter.sendMail(mailOptions, (err, res2) => {
    if (err) {
      console.log("Error gan!");
      res.send("Error gan!");
    } else {
      console.log("Email sukses terkirim!");
      res.send("Email sukses terkirim!");
    }
  });
});

app.listen(3210, () => {
  console.log("Run @3210");
});
