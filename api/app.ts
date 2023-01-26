import express from 'express'
import { serverConfig as config } from '../config/config'
import userRouter from './components/user/network'
const app = express()

app.use(express.json())

//routes 
app.use('/api/user',userRouter)

app.listen(config.port,()=>{
    console.log(`server corriendo en puerto [${config.port}]`)
})
