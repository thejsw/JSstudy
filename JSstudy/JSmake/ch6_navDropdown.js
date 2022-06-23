let dropBtn = document.getElementsByClassName('dropBtn')

function myFunction() {
    dropBtn.classList.toggle("active");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropBtn')) {
        let dropcontents = document.querySelectorAll('section');
        if (dropcontents.classList.contains('active')) {
          dropcontents.classList.remove('active');
        }
      }
    }
  }