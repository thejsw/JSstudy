var slideItem = document.querySelectorAll('.slide-item');
var dots = document.querySelectorAll('.dot');
var layer = document.querySelectorAll('.layer');
var modal = document.querySelectorAll('.modal');
var navbarItem = document.querySelector('.navbar-item').children;

// NavItem
function showNav() {
    for (item of navbarItem) {
        item.classList.toggle('active');
    }
}


// Modal
layer.addEventListener('click', () => {
    closeModal();
})

function showModal() {
    modal.style.display = 'block';
    layer.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
    layer.style.display = 'none';
}


// Carousal
var index = -1;

setInterval(slide, 3000)
slide()

function slide() {
    index ++
    console.log(index)

    if (index == slideItem.length) {
        index = 0;
    }

    for (img of slideItem) {
        img.style.display = 'none';
    }
    slideItem[index].style.display = 'block';

    // indicator
    dots.forEach(dots => {
        dot.style.backgroundColor ='#ddd';
    })
    dots[index].style.backgroundColor = '#555';
}