function sum(a,b){
    return a + b;
}

console.log(sum(10,5));

function sum1(a){
    return function(b){
        return a + b;
    }
}

const sumArrow = a => b => a+b;

const sumFive = sumArrow(5);

console.log(sumFive(10));
console.log(sumFive(15));
console.log(sumFive(25));