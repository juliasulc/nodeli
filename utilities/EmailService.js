const nodemailer = require('nodemailer');

class EmailService {
    constructor(service, authObject) {
        this.transport = nodemailer.createTransport({
            service: service,
            auth: {
              user: authObject.user,
              pass: authObject.pass,
            }
        })
    }

    sendMail(subject, text) {
        const mailOptions = {
            from: 'Botli',
            to: 'manelpavon10@gmail.com',
            subject,
            text
        }

        this.transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('error ', error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

}

module.exports = exports = EmailService;
