import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import { transporter } from "./mailTransporter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//Force HTTPS
app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        res.redirect(`https://${req.headers.host}${req.url}`);
    } else {
        next();
    }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Set EJS as template module, paths to templates
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Middleware for static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));

//Paths for rendering pages ---------

//Index
app.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Zdeněk Podaný - UI/UX Design' });
});

//Portfolio
app.get('/portfolio', (req, res) => {
    res.render('portfolio', { pageTitle: 'Portfolio - Zdeněk Podaný' });
});

//Sent contact form
app.post('/send', (req, res) => {
    const { email, message, tel } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'zdepodany@gmail.com',
        subject: '💸 zdenda.xyz zpráva! 💸',
        text: `E-mail od: ${email}\nTelefonní číslo odesílatele: ${tel}\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('E-mail byl odeslán ' + info.response);
            res.redirect('/');
        }
    });
});

//404 Handling
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: '404 - Stránka nenalezena!' });
});

//-------------------------------------

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})