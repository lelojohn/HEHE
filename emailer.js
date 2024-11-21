const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Route to send email
app.post('/send-email', (req, res) => {
    const { email, subject, message } = req.body;

    // Create a transporter using a service (like Gmail)
    const transporter = nodemailer.createTransport({
        service: 'gmail',  // You can use other services like 'smtp.mailtrap.io' or 'sendgrid'
        auth: {
            user: 'lelojohn.dagamer@gmail.com',  // Your email address
            pass: 'doofiwithers'  // Your email password (use environment variables for security)
        }
    });

    // Set up email data
    const mailOptions = {
        from: 'lelojohn.dagamer@gmail.com',
        to: 'lelojohn.dagamer@gmail.com',  // You can change this to where you want the email sent
        subject: subject,
        text: message
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send({ message: 'Error sending email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send({ message: 'Email sent successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
