const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const {dbConnection} =require('./dbConnection')


const userRoutes = require('./routes/userRoutes')
const itemRoutes = require('./routes/ItermRoutes')

const app = express();

app.use(express.json())
app.use(bodyParser.json())
app.use(cors());

app.use('/user',userRoutes)
app.use('/item',itemRoutes)

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    dbConnection();
})