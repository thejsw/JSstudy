let tabBtns = document.querySelectorAll('.tabBtns');
let contents = document.querySelectorAll('.contents');

tabBtns.forEach(function(tabBtn, index) {
    tabBtn.addEventListener('click', function() {
        // display 초기화를 위한 for문
        for (content of contents) {
            content.style.display = 'none';
        }

        // click 시에 display block으로 변환
        contents[index].style.display = 'block';
    })
})
