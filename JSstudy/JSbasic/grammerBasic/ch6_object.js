// Object 객체
// 속성(Property) - 키(key): 값(value)
var car = {
    Name: 'genesis',
    Year: 2022,
    Color: 'white',
    Brand: function() {   // 함수가 속성이면, 메소드(Method)라고 한다.
        return 'HD'
    }
}

console.log(car)
console.log(car.Name)
console.log(car.Year)
console.log(car.Color)
console.log(car.Brand())