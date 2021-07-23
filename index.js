//1.)
var user = {
    name: "John",
    surname: "Mike"
};

console.log(user);

//modify value of name attribute
user.name = "Peter";

console.log(user);

//delete name attribute
delete user.name;

console.log(user);

//2.)
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

allFruits = fruit.apple + fruit.peach + fruit.pear;

console.log(allFruits);

