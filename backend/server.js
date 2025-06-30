import connectDB from "./config/db.js";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js'

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('API is running')
});

app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})