var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
// 라우팅 : 요청이 들어온 주소에 맞는 페이지를 렌더링한다.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/create', function(req, res, next) {
  res.render('blog_form', { title: 'Blog form' });
});

// 블로그 글을 post 방식으로 전달
// 새로운 파일을 만듦
// fs.appendFile(파일이름, 파일내용, callback)
router.post('/create', function(req, res, next) {
  // return console.log(req.body)
  fs.appendFile(`./data/${req.body.title}.txt`, req.body.content, (err) => {
    if (err) {
      return console.error(err);
    }
    res.redirect('/');
  })
});

module.exports = router;
