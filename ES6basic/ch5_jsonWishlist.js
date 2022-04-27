let data = [
    { id:1, name: "자켓", cost:60 },
    { id:2, name: "청바지", cost:30 },
    { id:3, name: "가방", cost:20 },
    { id:4, name: "모자", cost:10 },
];


let ul = document.createElement("ul");
data.map(item => {
    let li = document.createElement("li");
    li.innerHTML = `${item.name}, ${item.cost} <button onclick="addtoCart(${item.id})">장바구니에 추가</button>`; 
    ul.appendChild(li);
})

document.getElementById('root').appendChild(ul);

function addtoCart(id) {
    if (localStorage.getItem('cart') === null) {
        localStorage.setItem('cart', '[]');
    }
    let cart = JSON.parse(localStorage.getItem('cart'));
    // 장바구니에 이미 상품이 있는지 체크
    let isCart = false;
    
    cart.forEach(function (item) {
        if (item.id === id) {
            item.q++;
            isCart = true;
        }
    })

    if (isCart === false) {
        data.forEach(function (item) {
            if (item.id === id) {
                cart.push({id: data.id, q: 1});
            }
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}
