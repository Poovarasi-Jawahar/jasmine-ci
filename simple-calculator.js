// JavaScript source code
function calculator(){
this.total=0;
this.test; //for test purpose. not used
}
calculator.prototype.add=function(number1,number2){
return this.total=number1+number2;
}
calculator.prototype.subtract=function(number1,number2){
return this.total=number1-number2;
}
calculator.prototype.multiply=function(number1,number2){
return this.total=number1*number2;
}
calculator.prototype.divide=function(number1,number2){
if(number2===0){
	throw new Error('cannot divide by zero');
}
return this.total=number1/number2;
}
Object.defineProperty(calculator.prototype,'version',{
get:function(){ 
return fetch('https://poovarasi-jawahar.github.io/common/JSON.json')
.then(function(result){
	return result.json();
})
.then(function(json){
	return json.version;
})
},
enumerable:true,
configurable:true
});

