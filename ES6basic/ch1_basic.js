



// 변수
let 변수렛 = 0;
const 변수콘스트 = 0;

/// 변수 var은 변수 선언 방식에서 큰 단점을 가지고 있다. 변수를 한 번 더 선언했음에도 불구하고, 각각 다른 값이 출력되는 것이 그 문제이다.
/// 이 때, let과 const는 변수를 다시 선언할 경우, 이미 선언되었다는 에러 메세지를 띄워 이러한 문제를 해결하고자 했다.
/// let과 const의 차이는 재할당(immutable)의 여부이다. > let은 재할당이 가능하지만, const는 재할당이 불가능하다. 또 let은 변수의 선언단계와 초기화단계가 분리되어 진행되지만, const는 선언과 초기화가 동시에 진행된다.
/// 정리하자면, let과 const는 1.변수의 중복 선언이 불가하고, 2. 블록 레벨의 스코프 {} 에서 작동한다.







//// 함수 선언식
선언식();   //// 호이스팅이 됨
function 선언식() {
    let 함수선언식입니다;
}

//// 함수 표현식
let 함수표현식 = function 표현식() {
    let 함수표현식입니다;
}
함수표현식();   //// 호이스팅이 되지 않음




// 화살표 함수
let 화살표 = () => {
    let 화살표함수입니다;
}
화살표();   //// 호이스팅이 되지 않음

// 파라미터와 아규먼트를 이용한 화살표 함수
let 화살표인자 = (파라미터) => {
    console.log(파라미터);
}
화살표인자('아규먼트');









// && 연산자
let car = 'car';
car && console.log(car);
//// 값이 있으면 true 출력, null이거나 undefined일 경우 
// 삼항연산자
let age = 20;
let person = age > 18 ? 'adult' : 'kids';
//// 조건에 맞으면 왼쪽, 맞지 않으면 오른쪽 값을 반환








// 인덱스를 통한 자료 접근
let cars = ['car1', 'car2', 'car3'];
let car1 = cars[0];
let car2 = cars[1];
let car3 = cars[2];

// 구조화를 통한 자료 접근
let [car10, car20, car30] = cars
console.log(car10);
console.log(car20);
console.log(car30);


// 구조화를 통한 계산기 만들기
let 계산기 = (a, b) => {
    let 더하기 = a + b;
    let 빼기 = a - b;
    let 곱하기 = a * b;
    let 나누기 = a / b;
    return [더하기, 빼기, 곱하기, 나누기]
}

let [더하기, 빼기, 곱하기, 나누기] = 계산기(8, 4);
console.log(더하기);
console.log(빼기);
console.log(곱하기);
console.log(나누기);










// 전개 연산자
//// 전개 연산자를 통한 배열 합치기
let list = ['one', 'two', 'three'];
let more = ['four'];
let list이게안되네요 = list + more;
let listmore = [...list, ...more];
console.log(list이게안되네요)
console.log(listmore)

//// 배열 자르기
let listslice = listmore.slice(0, 1);
let listsplice = listmore.splice(1, 2, 'a', 'b', 'c');
console.log(listslice);
console.log(listsplice);


//// 전개 연산자(...)를 통한 객체 합치기
let carinfo1 = {
    brand: '메르세데스',
    model: 'amg',
}
let carinfo2 = { 
    color: 'grey',
    cost: 50000,
}
let carinfo합치기 = {...carinfo1, ...carinfo2}
console.log(carinfo합치기)









// try catch 문
//// setTimeout와 같이 비동기적으로 실행되는 코드의 에러는 잡아낼 수 없다.
try {
    console.log("아직 에러 없음");
    throw "예외 처리를 던짐"; // 이후 문장이 실행이 안되는 모습
    a; // 에러 시작
    console.log("이곳은 실행 안됨");

  } catch (err) {
    console.log(err); // a is not defined
    console.log("에러가 나도 이곳의 코드는 실행됨");
  
  } finally {
    console.log("항상 실행");
  }







//   https://sdcodebase.tistory.com/22
//   자바스크립트와 타언어의 차이 - class와 prototype에 대하여

//   https://www.huskyhoochu.com/what-is-this-exactly-in-javascript/
//   파이썬 self와 자바스크립트 this의 차이

// __proto__
let apple = 'apple';
console.log(apple.__proto__);
console.log(apple.toUpperCase());

// 직접 인스턴스 만들기
let appleNew = new String("banana");
console.log(appleNew);

// class
class User {
    
}









// 비동기와 동기 (Async, Sync)
//// 동기 : 순서대로 실행된다
//// 비동기 : 빠른 것부터 실행된다 > 오래 걸리는 작업을 건너뜀 (ex. 이미지 렌더링)

// 대표적인 비동기 함수 : setTimeout (타이머)
// setTimeout(callback, seconds) : 몇 초 뒤에 callback 함수 실행
let first = () => {
    setTimeout(() => {
        console.log(1)
    }, 400)
}
let second = () => {
    setTimeout(() => {
        console.log(2)
    }, 300)
}
let third = () => {
    setTimeout(() => {
        console.log(3)
    }, 200)
}
let fourth = () => {
    setTimeout(() => {
        console.log(4)
    }, 500)
}

// first()
// second()
// third()
// fourth()

async function run() {
    await first()
    await second()
    await third()
    fourth()
}
run()









// Callback 에러 핸들링
function fetchData(cb) {
    setTimeout(() => {
        const user = { username: 'jo'}
        const error = { message: 'user not found'}
        cb(null, user)   // 정상적인 작동
        // cb(error, null)  // 에러 발생
    })
}

fetchData((err, data) => {
    // 에러가 넘어올 시, 에러메세지를 반환하는 콜백 함수
    if (err) {
        return console.error(err)
    }
    // 에러가 넘어오지 않고, 데이터가 정상적으로 넘어온다면, 데이터를 반환
    console.log(data)
})









// Promise
// 콜백 지옥에서 벗어나 코드 가독성을 위해서
const PromiseData = new Promise((res, rej) => {
    setTimeout(() => {
        const user = { username: 'jo' }
        const error = { message: 'user not found' }
        // rej(error)
        res(user)
    })
})

PromiseData.then(
    res => console.log(res),
    rej => console.error(rej)
    )


    function firstPromise() {
        return new Promise(res => {
            setTimeout(() => {
                console.log(1)
            }, 400)
        })
    }
    function secondPromise() {
        return new Promise(res => {
            setTimeout(() => {
                console.log(2)
            }, 300)
        })
    }
    function thirdPromise() {
        return new Promise(res => {
            setTimeout(() => {
                console.log(3)
            }, 200)
        })
    }
    function fourthPromise() {
        return new Promise(res => {
            setTimeout(() => {
                console.log(4)
            }, 500)
        })
    }
    
    // first().then(second()).then(third()).then(fouth())






// async / await
// 비동기 함수를 동기적으로 실행한다
const asyncData = new Promise((res, rej) => {
    setTimeout(() => {
        const user = { username: 'jo' }
        const error = { message: 'user not found' }
        // rej(error)
        res(user)
    })
})

asyncf()
async function asyncf() {
    const data = await asyncData  // await은 비동기함수를 로드할 때까지 기다린다는 의미, async 안에서만 동작
    console.log(data)
}







// 데이터 저장 및 전송 : cookie, localStorage, json
// 로그인, 장바구니


// 궁금증 1. 콜백에서 프로미스로 넘어가는 배경? > 코드의 간략화 때문인가? - 코드의 가독성
// 궁금증 2. 프로미스에서 async/await로 넘어가는 배경? > 굳이 비동기함수를 동기적으로 처리할 필요가 있는가? - 상황에 따라