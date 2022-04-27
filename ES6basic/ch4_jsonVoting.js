let data = [
    { id:1, name: "메르세데스", count:0 },
    { id:2, name: "레드불", count:0 },
    { id:3, name: "페라리", count:0 },
    { id:4, name: "맥라렌", count:0 },
];

// data 객체를 json 포맷으로 변환 > json 메소드 활용을 위해서
if (localStorage.getItem('vote') === null) {
    localStorage.setItem('vote', JSON.stringify(data));
}

function voting(id) {
    // data json 포맷을 자바스크립트 객체로 변환
    let arr = JSON.parse(localStorage.getItem('vote'));

    // arr의 아이템 id와 인자로 넘어온 id를(클릭시) 비교하여 일치하면 count 증가 
    arr.forEach(function (item) {
        if (item.id == id) {
            item.count++;
        }
    })

    // count가 증가한 채로 객체를 json 포맷으로 변환 후, localstorage에 저장
    localStorage.setItem('vote', JSON.stringify(arr));

    console.log(id);
}