
// Event : 사용자의 모든 행동
// addEventListener(event, callback) : event 발생 시에 callback 실행
// 폼 이벤트 (reset, submit)
// 뷰 이벤트 (scroll, resize)
// 마우스 이벤트 (mouseenter, mouseover, click, dbclick, mouseleave)
// 키보드 이벤트 (keydown, keyup)
// 포커스 이벤트 (focus, blur)
// 드래그 앤 드롭 이벤트 (dragstart, drag, dragleave, drop)

addEventListener('load', function() {
    // alert('welcome');
})

addEventListener('resize', function() {
    // console.log('resized...');
    // console.log(window.innerWidth);
    // console.log(window.innerHeight);
    // console.log(window.outerWidth);
    // console.log(window.outerHeight);
})

var btn = document.querySelector('button');
btn.addEventListener('click', function() {
    btn.innerHTML = 'clicked';
})

function myFunction() {

}

function myFunction(el) {
    if (el.style.color == '') {
        document.querySelector('button').style.width = '200px';
        document.querySelector('button').style.height = '50px';
        document.querySelector('button').style.padding = '10px';
        document.querySelector('button').style.border = '1px solid #ddd';
        document.querySelector('button').style.borderRadius = '10px';
        document.querySelector('button').style.backgroundColor = '#000';
        document.querySelector('button').style.color = '#ddd';
        document.querySelector('button').style.fontSize = '28px';
    }
    else {
        el.style.color = ''
    }
}