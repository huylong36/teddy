const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();
const productRouter = require('./routes/product');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');

const connectDB = async () =>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}nile.t9pjs.mongodb.net/Nill?retryWrites=true&w=majority`,{
           
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
        });

        console.log('Mongoose connected');
    } catch (error) {
        console.log('error' ,error);
        process.exit(1)
    }
} 
connectDB();
const app = express();
app.use(cors());
app.use(express.json())
// app.use(bodyParser.json()) // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/auth' ,authRouter)
app.use('/api/post' ,postRouter)
app.use('/api/product',productRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log(`Sever started on PORT ${PORT}`));
 