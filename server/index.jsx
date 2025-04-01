// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const next = require('next');
const NextAuth = require('next-auth').default;
const { PrismaClient } = require('@prisma/client');
// const { authOptions } = require('../app/api/auth/[...nextauth]/options.jsx'); // We'll create this file next

const app = express();
const prisma = new PrismaClient();
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
app.post('/register',  async (req, res) => {
    const user = req.body;

    console.log('Received Data Register: ', user);

    try {
        const existingUser = await prisma.users.findUnique({
            where: { 
                username: user.username
            },
            select: {
                username: true,
                email: true,
            }
        });


        if (existingUser) {
            return res.status(400).send({ message: "Username already exists" });
        }

        const hashedPassword = bcrypt.hashSync(user.password, 10);

        const newUser = await prisma.users.create({
            data: {
                name: user.name,
                username: user.username,
                email: user.email,
                password: hashedPassword,
            }
        });
    
        if(newUser){
            return res.status(200).send({ message: "Data Successfully Added to DB!", user: user });
        } else {
            return res.status(500).send({ message: "Database error" });
        }

    } catch (error) {
        console.error("Error connecting to the database:", error);
        return res.status(500).send({ message: "Database connection error" });
    }


});

// //use auth to login
// server.use('/api/auth', (req, res) => NextAuth(req, res, authOptions));


// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});