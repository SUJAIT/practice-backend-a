import cors from 'cors'
import express, { Application, Request, Response } from "express"
import { StudentRoutes } from './modules/student/student.route'
const app:Application = express()


//parsers
app.use(express.json())
app.use(cors())


//application routes 
app.use('/api/v1/students', StudentRoutes);


app.get('/', (req:Request, res:Response) => {
  res.send('Hi Iam Server 1.O')
})



export default app;