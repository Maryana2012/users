import dotenv from 'dotenv';
import cors from 'cors';
import logger from 'morgan';
import express from 'express';

dotenv.config();
const app = express();

const formatLogger = app.get('env')==='development' ? 'dev' : 'short'

app.use(logger(formatLogger))
app.use(cors())
app.use(express.json())

app.use(express.static('public'))

app.use((req, res)=>{
    res.status(404).json({messge: 'Not found'})
})

app.use((err, req, res, next)=>{
    res.status(500).json({message: err.message})
})

export default app;