document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
        // preventDefault() : 기본값 실행 x > 서버에 페이지 렌더링 요청 x
        e.preventDefault();
    
        const url = e.target.getAttribute('href')
    
        console.log(url)
        // history.pushState(null, null, url) : 주소창의 사용자 로그기록 변경
        history.pushState(null, null, url);
    }
})

function router() {
    const routes = [
        { path: '/', view: () => console.log('Home')},
        { path: '/about', view: () => console.log('About')},
        { path: '/posts', view: () => console.log('Posts')}
    ]

    console.log(location.pathname)
}
