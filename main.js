// JavaScript source code
function calculate(inputValue){
const expression=/\+|\-|\*|\//;
const numbers=inputValue.split(expression);
const numberA=parseInt(numbers[0]);
const numberB=parseInt(numbers[1]);
const operation=inputValue.match(expression);
if(Number.isNaN(numberA) || Number.isNaN(numberB) || operation===null){
	updateResult('operation not recognised');
	return;
}
const calculate=new calculator;
let result;
switch(operation[0]){
case '+':
result=calculate.add(numberA,numberB);
break;
case '-':
result=calculate.subtract(numberA,numberB);
break;
case '*':
result=calculate.multiply(numberA,numberB);
break;
case '/':
result=calculate.divide(numberA,numberB);
break;

}
updateResult(result);
}

function updateResult(result){
const element=document.getElementById('result');
if(element)
element.innerText=result;

}

function showVersion(){
const cal=new calculator();
const element=document.getElementById('version');

cal.version.then(function(version){
element.innerText=version;
})
.catch(function(error){
element.innerText='unknown';
});

}