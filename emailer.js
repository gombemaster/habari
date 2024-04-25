var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'krishypoo123@gmail.com',
        pass: 'nuuo ffyl xnrx pals'
    }
});

var mailOptions = {
    from: 'krishypoo123@gmail.com',
    to: 'ridermanpatel@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});