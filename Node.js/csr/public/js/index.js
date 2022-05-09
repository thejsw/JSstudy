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

    const element = {
        type: 'ul',
        props: {},
        children: [
            { type: 'li', props: { class: 'title' }, children: ['item1'] },
            { type: 'li', props: { class: 'MainContents' }, children: ['item2'] },
            { type: 'li', props: { class: 'SubContents' }, children: ['item3'] },
            { type: 'li', props: { class: 'footer' }, children: ['item4'] },
        ]
    }
    document.getElementById('root').replaceChildren(createElement(element))   // replaceChilderen

function createElement(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node)   // createTextNode(String): text node를 만듦
    }

    const $el = document.createElement(node.type)

    Object.keys(node.props).map(prop => {   // array.map(callback): array의 length만큼 callback 반복
        if (prop.match(/^en/)) {    // props.match(/^en/) - 정규표현식: e로 시작하는 문자열 찾기
            $el.addEventListener(prop.slice(2).toLocaleLowerCase(), node.props[prop])
        } else if (typeof node.props[prop] === 'boolean') {
            if (node.props[prop]) {
                $el.setAttribute(prop, '')
            }
        } else {
            $el.setAttribute(prop, node.props[prop])
        }
    })

    node.children.map(children => {
        $el.appendChild(createElement(children))
    })

    return $el;
}

console.log(createElement(element))


// React Component
function Home() { 
    return {
        type: 'div',
        props: {}, 
        children: [
            { type: 'h1', props: {}, children: ['Home']},
            { type: 'p', props: {}, children: ['Welcome to Home']}
        ]
    }
}


const layout = {
    type: 'div',
    props: { 'class': 'nav' },
    children: [
        { type: 'ul', props: {}, children: [
            { type: 'li', props: {}, children: [{ type: 'a', props: { 'href': '/', 'class': 'nav__link', 'data-link': '' }, children: ['Home']}
            ]},
            { type: 'li', props: {}, children: [{ type: 'a', props: { 'href': '/', 'class': 'nav__link', 'data-link': '' }, children: ['Home']}
            ]},
            { type: 'li', props: {}, children: [{ type: 'a', props: { 'href': '/', 'class': 'nav__link', 'data-link': '' }, children: ['Home']}
            ]},
        ]},
        element
    ]
}

document.getElementById('root').replaceChildren
    createElement(layout);
