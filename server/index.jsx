// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
// const next = require('next');
// const NextAuth = require('next-auth').default;
const  prisma = require('db/index');
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
app.post('/action',  async (req, res) => {
    const {data} = req.body;

    console.log('Received Data : ', data.title);

    try {
        const newToDo = await prisma.todoLists.create({
            data: {
                userId: data.userId,
                title: data.title,
                content: data.content,
            }
        });
        
        console.log("Data prisma: ", newToDo);
        if(newToDo){
            return res.status(200).send({ message: "Data Successfully Added to DB from server!", data: newToDo });
        } else {
            return res.status(500).send({ message: "Database error" });
        }

    } catch (error) {
        console.error("Error connecting to the database:", error);
        return res.status(500).send({ message: "Database connection error" });
    }


});

app.get('/preview', async (req, res) => {
    const { limit, page } = req.query;

    try {
        // const getToDoList = await prisma.todoLists.findMany({
        //     take: parseInt(limit) || 5,
        //     // where: {
        //     //     id: {
        //     //         ...(cursorId < 0 && {
        //     //             lt: cursorId,
        //     //         }),
        //     //          ...(cursorId > 0 && {
        //     //             gt: cursorId,
        //     //         })
        //     //     },
        //     // },
        //     skip: parseInt(limit * (page - 1)) || 0,
        //     select: {
        //         id: true,
        //         title: true,
        //         content: true,
        //         users: {
        //             select: {
        //                 name: true,
        //             }
        //         }
        //     },
        //     // _count: true,
        // });

        const [getToDoList, totalCountData] = await prisma.$transaction([
            prisma.todoLists.findMany({
                take: parseInt(limit) || 5,
                skip: parseInt(limit * (page - 1)) || 0,
                select: {
                    id: true,
                    title: true,
                    content: true,
                    users: {
                        select: {
                            name: true,
                        }
                    }
                },
            }),
            prisma.todoLists.count(),
        ]);
        console.log("Data ToDOList: ", getToDoList, totalCountData);

        if(getToDoList){
            return res.status(200).json({getToDoList: getToDoList, totalCountData: totalCountData});
        } else {
            return res.status(404).send({ message: "No data found" });
        }
    } catch(error){
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