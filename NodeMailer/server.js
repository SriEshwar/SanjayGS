var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587, // SMTP port
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'sanjudddd400@gmail.com',
    pass: 'mhyk twkc iisc tupi'
  }
});

var mailOptions = {
  from: 'sanjudddd400@gmail.com',
  to: 'sanjudddd400@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
