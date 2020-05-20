const path = require('path');
const express = require('express');
const router = require('./router')

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Hbs Config
app.set('views', 'views');
app.set('view engine', 'hbs')

app.use('/', router)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));