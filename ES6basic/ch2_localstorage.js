let count = document.getElementById('count');
let btn = document.getElementById('btn');
let num = 0;

count.innerHTML = num;

// key의 localStorage를 가져옴 (데이터 취득하기)
if (localStorage.getItem('count') === null) {
    num = 0;
} else {
    num = localStorage.getItem('count');
}

btn.addEventListener('click', () => {
    num++;

    // 새로운 localstorage 생성 (데이터 추가하기)
    localStorage.setItem('count', num);

    count.innerHTML = num;
})







// //자바스크립트를 사용하면서 값을 저장해야 하는 경우 변수를 사용합니다.
// 화면 이동이 있거나 영구적으로 저장해야 하는 경우 DB에 저장을 하거나 임시적으로 저장하고 싶은 경우 쿠키(cookie)를 사용하기도 합니다.
// 이처럼 일정 시간 또는 영구적으로 값을 저장하고 싶은 경우에 사용할 수 있는 것이 WebStorage API인 로컬 스토리지(LocalStorage)가 있습니다.

// ・데이터를 사용자 로컬에 보존하는 방식.
// ・데이터를 저장, 덮어쓰기, 삭제 등 조작 가능.
// ・자바스크립트(JavaScript)로 조작.
// ・모바일에서도 사용 가능

////// 쿠키와의 차이점
// ・유효 기간이 없고 영구적으로 이용 가능
// ・5MB까지 사용 가능 (쿠키는 4KB까지)
// ・필요할 때 언제든 사용 가능 (쿠키는 서버 접속시에 자동 송신)

