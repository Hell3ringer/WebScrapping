const express = require('express')
const app = express();
const mongoose = require('mongoose')
const routeURL = require('./routes/route')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 4000

mongoose.connect(process.env.database, () => console.log('database connected --------------------------------------------') )
app.disable("x-powered-by");

app.use(express.json())
app.use(cors())
app.use('/app',routeURL)



app.listen(PORT,console.log(`server running at ${PORT}`));