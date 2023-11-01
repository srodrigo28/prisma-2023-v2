import express from 'express'
import { router } from './routes';
import cors from 'cors';

const port = 3333


const app = express()

app.use(express.json())

app.use(cors); 
app.use(router)

app.listen(port, () => {
    console.log('Server is running! ' + port)
});