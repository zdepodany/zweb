import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

//Configure connection to mailclient
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

export { transporter };
