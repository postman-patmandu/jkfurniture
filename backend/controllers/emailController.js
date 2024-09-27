import nodemailer from "nodemailer";
import asyncHandler from "../middleware/asyncHandler.js";

// Env Variables
const {
    // Gmail email
    GMAIL_EMAIL = process.env.GMAIL_EMAIL,
    // Sender Email
    SENDER_EMAIL = process.env.SENDER_EMAIL,
    // Gmail's Client Id
    CLIENT_ID = process.env.GMAIL_CLIENT_ID,
    // Gmail's Client Secret
    CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET,
    // Gmail's Refresh Token
    REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN,
    // Mail Password
    MAIL_PASS = process.env.MAIL_PASS,
} = process.env;

const emailReceipt = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
};

const sendEmail = asyncHandler(async (req, res, next) => {
    const { firstName, lastName, email, phone, message } = req.body;
    console.log('Email is ready to send!', email, );
    // const { nodemailer } = nodemailer();
    // - Create NodeMailer TRANSPORT INFO
    const transporter = nodemailer.createTransport({
        // Service
        // service: 'Gmail',
            // Auth
            // auth: { 
                // type: 'OAuth2',
                // // From email
                // user: GMAIL_EMAIL,
                // // Send Email
                // // Client ID - Google Console API
                // clientId: CLIENT_ID,
                // // Client Secret - Google Console API
                // clientSecret: CLIENT_SECRET,
                // // Refresh Token - OAuth 2.0 Playground
                // refreshToken: REFRESH_TOKEN

                host:"mx1.titan.email",
                port: 465,
                secure: true, // upgrade later with STARTTLS
                auth: {
                    user: SENDER_EMAIL,
                    pass: MAIL_PASS,
                },
                tls: {
                    // do not fail on invalid certs
                    rejectUnauthorized: false,
                  },
            // }
        });
        transporter.verify(function (error, success) {
            if (error) {
              console.log(error);
            } else if(success) {
              console.log("Server is ready to take our messages");
            }
          });

        // Create body of email
        let mailBody = `
            <div>
                <p>Hi! <strong>${email}</strong></p>
                <p>Thank you for your purchase at Furniture Shop</p>
                <p>${message}</p>
                <p>From: ${firstName} ${lastName}</p>
                <p>From: ${phone}</p>
            </div>
            <div>
                <p>Sincerely,<br /><strong>John Hawke</strong></p>
            </div>
        `;

        // - Create All of email
        let mailOptions = {
            from: `Furniture Shop Orders <${email}>`,
            to: SENDER_EMAIL,
            subject: `[Furniture Shop Product Enquiry]`,
            html: mailBody
        };

        // Send email
        return await transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log("error is "+error);
                res.status(500).send({success: false, message: 'Email Not Sent! '});
                // resolve(false); // or use rejcet(false) but then you will have to handle errors
            } 
           else {
               console.log('Email sent: ' + info.response);
               res.status(200).send({success: true, message: 'Email Sent!'});
            //    resolve(true);
            }
        });
        // .then(success => 'Successful!')
        // .catch(err => 'Unsuccessful!');
});

export { sendEmail };
