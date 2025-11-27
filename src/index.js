import dotenv from 'dotenv';
import ConnectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: './env'
})

const PORT = process.env.PORT || 5000;


app.get('/test', (req, res) => {
    res.send("app is working properly");
})

ConnectDB()
.then(()=> {
    app.listen(PORT, ()=>{
        console.log(`server is running on port ${PORT}`);
        
    })
})
.catch((error)=>{
    console.log(`mongoDB connection failed`, error);
})