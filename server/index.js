import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './Routes/userRoutes.js'
import eventsRouter from './Routes/eventsRoutes.js'
import organizerRouter from './Routes/organizerRoutes.js'
import paymentRouter from './Routes/paymentRoutes.js'

/* setting up server */
const app = express()
dotenv.config()
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

/* setting up database and starting the server 
  SET YOUR MONGO URL AND PORT IN .env FILE */

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  app.listen(process.env.PORT, () => console.log(`Server running on port: http://localhost:${process.env.PORT}/`))
).catch((error) => console.log(error.message))

/* setting up routes */

// set up your routes here
app.use('/api/user', userRouter)
app.use('/api/events', eventsRouter)
app.use('/api/organizer', organizerRouter)
app.use('/api/payment', paymentRouter)

export default app