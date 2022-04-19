var accBtns = document.querySelectorAll('.acc-btn');

// for of를 이용한 scrollHeight 컨트롤
// for (accBtn of accBtns) {
//     accBtn.addEventListener('click', function(e) {
//         var panel = e.target.nextElementSibling

//         if (panel.style.height === '') {
//             panel.style.height = panel.scrollHeight + 'px';
//         }
//         else {
//             panel.style.height = ''
//         }
//     })
// }


//forEach를 이용한 scrollHeight 컨트롤
accBtns.forEach(function(accBtn) {
    accBtn.addEventListener('click', function(e) {
        var panel = e.target.nextElementSibling

        if (panel.style.height === '') {
            panel.style.height = panel.scrollHeight + 'px'
        }
        else {
            panel.style.height = ''
        }
    })
})
