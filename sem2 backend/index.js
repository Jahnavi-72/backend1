import express from 'express';
import dotenv from 'dotenv';

import router from './src/router/Userrouter.js'

dotenv.config();
const app = express();

const port = process.env.PORT

app.use('/api',router)

app.listen(port,()=>{
    console.log(`Server ruuning on port ${port}`);
})
