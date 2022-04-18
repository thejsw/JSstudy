// toggleStar 함수의 classList remove와 add를 통해 리뷰 별 색깔 다르게 하기
var stars = document.querySelectorAll('.fa-star');
function toggleStar(data) {
    // 별 초기화하기
    for (star of stars) {
        star.classList.remove('active');
    }
    // 별 추가하기
    for (i=0; i<data; i++) {
        stars[i].classList.add('active');
    }
}

// setTimeout(callback, seconds)를 이용해서 몇 초 후에 loader를 사라지게 하기
setTimeout(function () {
    document.getElementById('loader').style.display = 'none';
}, 5000)