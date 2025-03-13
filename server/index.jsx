// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const next = require('next');
const NextAuth = require('next-auth').default;
const db = require('../utils/db.jsx');
// const { authOptions } = require('../app/api/auth/[...nextauth]/options.jsx'); // We'll create this file next

const app = express();
const PORT = 3001;

// Middleware setup
app.use(cors({
    origin: 'http://localhost:3000', // Adjust this if needed
    credentials: true,
})); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies
app.use(expressSession({
    secret: 'your-secret-key', // Replace with a strong secret
    resave: false,
    saveUninitialized: true,
}));

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// User registration route
app.post('/register', (req, res) => {
    const user = req.body;

    console.log('Received Data Register: ', user);
    // res.status(200).send('Data received successfully!');

    const query = "INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)";
    const query2 = "SELECT * FROM users WHERE username = ?";

    // Check if the username already exists
    db.query(query2, [user.username], (err, results) => {
        if (err) {
            console.error(err); // Log the error
            return res.status(500).send({ message: "Database error" });
        }
        if (results.length > 0) {
            return res.status(400).send({ message: "Username already exists" });
        }
        if (results.length === 0) {
            // Hash the password before storing it
            const hashedPassword = bcrypt.hashSync(user.password, 10);
            db.query(query, [user.name, user.username, user.email, hashedPassword], (err, insertResult) => {
                if (err) {
                    console.error(err); // Log the error
                    return res.status(500).send({ message: "Database error" });
                }
                return res.status(200).send({ message: "Data Successfully Added to DB!", user: user });
            });
        }
    });
});

// //use auth to login
// server.use('/api/auth', (req, res) => NextAuth(req, res, authOptions));


// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});