var userList = [
    { name: 'Kim', age: 34 },
    { name: 'Lee', age: 23 },
    { name: 'Park', age: 16 },
    { name: 'Choi', age: 29 },
];

var newUserList = userList.filter(function (item) {
    if (item.age > 18) {
        return item;
    }
});

console.log(newUserList);