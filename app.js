import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

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

//Contact
app.get('/contact', (req, res) => {
    res.render('contact', { pageTitle: 'Kontakt - Zdeněk Podaný' });
});

//-------------------------------------

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})