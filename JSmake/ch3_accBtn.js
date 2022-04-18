var accBtns = document.getElementsByClassName('acc-btn');

// accBtn을 처음에 display:none;으로 설정
for (accBtn of accBtns) {
    accBtn.addEventListener('click', function(e){  
        //addEventListener 'click'으로 불러옴

        var panel = e.target.nextElementSibling
        //e.target의 다음 노드 = div.panel
        
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
        console.log(panel.style.display)
    })
}

// display가 none이면 > block을
// display가 block이면 > none을