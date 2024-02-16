let express = require('express')
let app = express()
const bodyParser = require('body-parser')
const cors=require('cors')
app.use(cors())
app.use(bodyParser.json())



app.use('/Register',require('./Components/Register'))
app.use('/login',require('./Components/Login'))
app.use('/insert',require('./Components/Insert'))


app.use('/htr',require('./Components/Htr'))
app.use('/water',require('./Components/Waterrides'))
app.use('/kid',require('./Components/Kidrides'))
app.use('/land',require('./Components/Landrides'))


app.listen(3004,()=>{
    console.log("server running")
})


