import express from 'express'
import env from './config/env.js';
import booksRoute from './routes/books.routes.js'
const app = express();


app.use(express.json())

app.use('/api/books', booksRoute)

// let us bind the port to the server 

app.listen(env.port, () => {
    console.log(`Server running on port ${env.port}`)
})
