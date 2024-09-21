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

const sendFurnitureEmail = asyncHandler(async({ email }) => {
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
            } else {
              console.log("Server is ready to take our messages");
            }
          });

        // Create body of email
        let mailBody = `
            <div>
                <p>Hi! <strong>${email}</strong></p>
                <p>Thank you for your purchase at Furniture Shop</p>
            </div>
            <div>
                <p>Sincerely,<br /><strong>John Hawke</strong></p>
            </div>
        `;

        // - Create All of email
        let mailOptions = {
            from: `Furniture Shop Orders <${SENDER_EMAIL}>`,
            to: email,
            subject: `[Your Order]`,
            html: mailBody
        };

        // Send email
        return await transporter.sendMail(mailOptions)
        .then(success => 'Successful!')
        .catch(err => 'Unsuccessful!');
});

export { sendFurnitureEmail };
