const path = require('path');
const express = require('express');

const app = express();

const PORT = 5000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', 'views')



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));