var DATA = [
    { id: 1, name: '자켓', cost: 10 },
    { id: 2, name: '청바지', cost: 5 },
    { id: 3, name: '가방', cost: 4 },
    { id: 4, name: '모자', cost: 3 },
]

var ul = document.createElement('ul');

DATA.map(item => {
    var li = document.createElement('li')
    li.innerHTML = `${item.name}, $${item.cost} <button onclick="addToCart(${item.id})">장바구니에 추가</button>`
    ul.appendChild(li);
  })

document.getElementById('root').appendChild(ul);



function addToCart(id) {
    console.log(id)

    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', '[]');
    }
    
    var cart = JSON.parse(localStorage.getItem('cart'));
    // 장바구니에 이미 상품이 있는지 체크
    var isCart = false;
    // 카트 검사
    
    cart.forEach(function (item) {
      if (item.id === id) {
        item.q++
        isCart = true;
      }
    })
    
    // 카트에 없는 상품만 추가할 수 있다
    if (isCart === false) {
      // 상품 목록중에 인자로 넘어온 id와 일치하는 상품을 장바구니에 추가
      DATA.forEach(function (data) {
        if (data.id === id) {
          cart.push({ id: data.id, q: 1 })
        }
      })
    }
    
    // 업데이트된 카트를 localStorage에 저장
    localStorage.setItem('cart', JSON.stringify(cart))
}

