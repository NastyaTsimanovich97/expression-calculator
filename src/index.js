function eval() {
    // Do not use eval!!!
    return;
}




function expressionCalculator(expr) {
    // write your solution here
    
    let brackets=0;
    for(let i=0;i<expr.length;++i){
        const item=expr[i];
        if (item=='('){
            brackets++;
        }
        else if (item==')'){
            brackets--;
        }
    }
    if(brackets!=0){
        throw new TypeError('ExpressionError: Brackets must be paired');
    }
   return plusExpression(expr);
}
function split(expr, operator){
    const result=[];
    let brackets=0;
    let current="";
    for(let i=0;i<expr.length;++i){
        const item=expr[i];
        if (item=='('){
            brackets++;
        }
        else if (item==')'){
            brackets--;
        }
        if(brackets==0 && operator==item){
            result.push(current);
            current="";
        }else{
            current+=item;
        }
    }
    if(current!=""){
        result.push(current);
    }
    return result;
};
function divisionExpression(expr){
    const numbersString=split(expr,'/');
    const numbers=numbersString.map( noStr => {
        if (noStr.match(/\(/)){
            console.log(noStr);
            const expression=noStr.slice(2,noStr.length-2);
            console.log(expression);
            if(expression.match(/\(/)){
                console.log('more than 1')
                const expression1=expression.substr(1,expression.length-2);
                console.log(expression1);
                return plusExpression(expression1);
            }
            else return plusExpression(expression);
        }
        {return +noStr;}
});
    for(let i=0;i<numbersString.length;i++){

    }
    for(let i=0;i<numbers.length;i++){
        if(numbers[i+1]==0){
            throw new TypeError('TypeError: Division by zero.');
        }
    }
    const result=numbers.reduce((acc,no)=>acc/no);
    return result;
}
function multiplyExpression(expr){
    const numbersString=split(expr,'*');
    const numbers=numbersString.map( noStr => divisionExpression(noStr));;
    const count=1.0;
    const result=numbers.reduce((acc,no)=>acc*no,count);
    return result;
}
function minusExpression(expr){
    const numbersString=split(expr,'-');
    const numbers=numbersString.map( noStr => multiplyExpression(noStr));
    const count=numbers[0];
    const result=numbers.slice(1).reduce((acc,no)=>acc-no, count);
    return result;
}

function plusExpression(expr){
    const numbersString=split(expr,'+');
    const numbers=numbersString.map( noStr => minusExpression(noStr));
    const count=0.0;
    const result=numbers.reduce((acc,no)=>acc+no,count);
    console.log(result)
    return result;
};


module.exports = {
    expressionCalculator
}