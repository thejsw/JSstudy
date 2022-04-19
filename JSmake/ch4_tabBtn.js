let tabBtns = document.querySelectorAll('.tabBtns');
let contents = document.querySelectorAll('.contents');

tabBtns.forEach(function(tabBtn, index) {
    tabBtn.addEventListener('click', function() {
        for (let i=0; i<3; i++) {
            contents[i].style.display = 'none';
        }
        if (contents[index].style.display === 'block') {
            contents[index].style.display = 'none';
        }
        else {
            contents[index].style.display = 'block';
        }
    })
})
