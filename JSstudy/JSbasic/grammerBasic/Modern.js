// let isNumber = 7;
// let isString = "00";
// let NumPlusString = isString + isNumber;
// console.log(NumPlusString);

// let pair = [1, 2];
// let [first, second] = pair;
// console.log(first, second);

// let arr = [1, 2, 3];
// for (let i of arr) {
//   console.log(i);
// }

// let harry = { name: "h.smith", age: 36 };
// for (let i in harry) {
//   console.log(`${i}: ${harry[i]}`);
// }

// const average = (x, y) => {tqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtqtq
//   return (x + y) / 2;
// };

// let result = average(2, 4);
// console.log(result);

// map을 활용하여 배열에 담긴 요소를 HTML li로 만드는 예제
// const enclose = (tag, content) => {
//   `<${tag}>${content}</${tag}>`;
// };
// const listItems = items.map((i) => enclose(li, "i"));

// const sayLater = (text, when) => {
//   let task = () => {
//     console.log(text);
//   };
//   setTimeout(task, when);
// };

// sayLater("Hello", 1000);
// sayLater("GoodBye", 10000);

// function Card(suit, rank) {
//   this.suit = suit;
//   this.rank = rank;
//   this.description = () => {
//     return `이 카드는 ${this.suit}, ${this.rank} 카드입니다.`;
//   };
// }

// let cardHeart = new Card("하트", 16);
// let cardSpade = new Card("스페이드", 16);
// let cardKlub = new Card("클럽", 16);
// console.log(cardHeart.description());
// console.log(cardSpade.description());
// console.log(cardKlub.description());

// let tom = {
//   name: "Tom",
//   sayHello: function () {
//     let func2 = () => {
//       console.log("Hello", this.name);
//     };
//     return func2();
//   },
// };

// tom.sayHello();

let james = {
  name: "james",
  parents: {
    name: "Tom",
    son: this.name,
  },
  son: function () {
    console.log(this.name);
  },
};


let he = james.parents.son;
console.log(he);
