function getHelloworld(){
    console.log("Hello World")
}
getHelloworld();
function number(a, b){
    return a+b;
}console.log(number(5, 10));
//  function express
const seleor= function(){
    console.log("funksiya obyektni qaytaradi");
}
seleor();

const price= function(a, b){
    return a+b;
};
price(10, 20)
price(100, 200)

console.log(price(10, 20))
console.log(price(100, 200))

// function expression

const jumps= function(){
    console.log("jumping");
};
jumps();

// arrow function (ES6)
//Zamonaviy Java Script' da ko'p ishlatiladi.
const add= (a, b)=> {
    return a+b;
};
console.log(add(10, 38));
console.log(add(100, 380));