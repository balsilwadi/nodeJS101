const express = require('express');
const morgan = require('morgan')

const app = express();


app.use(morgan('tiny'))

app.get('/', (req,res)=>{
    res.send("welcome")
})
app.get('/users', (req,res)=>{

res.send('Hello users')
})

app.listen(5000)