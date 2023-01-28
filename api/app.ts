import express from 'express'
import { config } from '../config/config'
import userRouter from './components/user/network'
import authRouter from './components/auth/network';
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
//routes 
app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)

app.listen(config.port,()=>{
    console.log(`server corriendo en puerto [${config.port}]`)
})
