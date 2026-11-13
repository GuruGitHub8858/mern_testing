import { postTodo } from "../Controller/todoController.js";

import express from 'express'

const route = express.Router()

route.post('/post', postTodo)


export default route