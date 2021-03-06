// entrypoint : 서버의 시작점

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// express에서 정적 파일 제공
app.use('/static/', express.static(path.resolve(__dirname, 'public')));

// Posts
// app.get('/posts', (req, res) => {
//     const cars = ['제네시스', '스타리아', '아이오닉', '캐스퍼'];
//     res.json(cars);
// })

// 라우팅
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

// 서버가 제대로 작동 시 출력 
app.listen(port, () => {
    console.log('Example app listening on port ' + port);
})