let count = document.getElementById('count');
let btn = document.getElementById('btn');
let num = 0;

count.innerHTML = num;

btn.addEventListener('click', () => {
    num++;
    count.innerHTML = num;
})