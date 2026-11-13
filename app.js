import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import route from './Routes/todoRoutes.js'
dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())

app.use('/todo', route)

export default app;