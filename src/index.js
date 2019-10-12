function eval() {
    // Do not use eval!!!
    return;
}




function expressionCalculator(expr) {
    // write your solution here
   return plusExpression(expr);
}
function divisionExpression(expr){
    const numbersString=expr.split('/');
    const numbers=numbersString.map( noStr => +noStr);
    console.log(numbers);
    for(let i=0;i<numbers.length;i++){
        if(numbers[i+1]==0){
            throw new TypeError('TypeError: Division by zero.');
        }
    }
    const result=numbers.reduce((acc,no)=>acc/no);
    return result;
}
function multiplyExpression(expr){
    const numbersString=expr.split('*');
    const numbers=numbersString.map( noStr => divisionExpression(noStr));
    console.log(numbers);
    const count=1.0;
    const result=numbers.reduce((acc,no)=>acc*no,count);
    return result;
}
function minusExpression(expr){
    const numbersString=expr.split('-');
    const numbers=numbersString.map( noStr => multiplyExpression(noStr));
    const count=numbers[0];
    const result=numbers.slice(1).reduce((acc,no)=>acc-no, count);
    return result;
}

function plusExpression(expr){
    const numbersString=expr.split('+');
    const numbers=numbersString.map( noStr => minusExpression(noStr));
    const count=0.0;
    const result=numbers.reduce((acc,no)=>acc+no,count);
    console.log(result);
    return result;
};

module.exports = {
    expressionCalculator
}