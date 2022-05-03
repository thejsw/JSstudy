var express = require('express');
var router = express.Router();

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

module.exports = router;
