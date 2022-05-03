var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
// 라우팅 : 요청이 들어온 주소에 맞는 페이지를 렌더링한다.
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Blog' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

// Create
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



// Read : 블로그 글 렌더링
router.get('/', function(req, res, next) {
  fs.readdir('data/', (err, posts) => {
    res.render('index', { title: 'Blog', posts: posts })
  })
});

router.get('/p/:postId', function(req, res, next) {
  fs.readFile(`./data/${req.params.postId}`, (err, content) => {
    if (err) {
      return console.error(err)
    }
    const post = { title: req.params.postId, content: content }
    res.render('blog_detail', { title: 'Blog', post: post })
  })
})




// Delete
router.post('/p/:postId', function(req, res, next) {
  console.log(req.params.postId)
  // fs.unlink(삭제할파일, callback)
  fs.unlink(`data/${req.params.postId}`, (err) => {
    if (err) {
      return console.error(err)
    }
    // 클라이언트에게 json 데이터를 전송한다
    res.json({ message: 'success' })
  })
})
module.exports = router;
