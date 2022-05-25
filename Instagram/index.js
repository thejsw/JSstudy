const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// app.use() 미들웨어
app.use(cors())

// 라우팅
app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/users', (req, res) => {
    res.send(req.body.username)
    
})

app.listen(port, () => {
    console.log(`${port} 포트에서 실행중 ... `)
})