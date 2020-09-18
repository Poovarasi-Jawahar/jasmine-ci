// JavaScript source code
describe('main.js',function(){

describe('calculate()',function(){
it('validates expression when 1st num is NaN',function(){
spyOn(window,'updateResult').and.stub();
calculate('a+5');
expect(window.updateResult).toHaveBeenCalled();
expect(window.updateResult).toHaveBeenCalledWith('operation not recognised');
expect(window.updateResult).toHaveBeenCalledTimes(1);
});

it('validates expression when 2nd num is NaN',function(){
spyOn(window,'updateResult'); //.and.stub() is default and can be omitted
calculate('5+b');
expect(window.updateResult).toHaveBeenCalled();
expect(window.updateResult).toHaveBeenCalledWith('operation not recognised');
expect(window.updateResult).toHaveBeenCalledTimes(1);
});

it('validates expression when operation is not valid',function(){
spyOn(window,'updateResult').and.stub();
calculate('5_5');
expect(window.updateResult).toHaveBeenCalled();
expect(window.updateResult).toHaveBeenCalledWith('operation not recognised');
expect(window.updateResult).toHaveBeenCalledTimes(1);
});

it('calls add', function(){
spyOn(calculator.prototype,'add');
calculate('2+3');
expect(calculator.prototype.add).toHaveBeenCalledTimes(1);
expect(calculator.prototype.add).toHaveBeenCalledWith(2,3);
});

it('calls subtract',function(){
const spy=spyOn(calculator.prototype,'subtract');
calculate('3-2');
expect(spy).toHaveBeenCalledTimes(1);
expect(spy).toHaveBeenCalledWith(3,2);
});

it('calls multiply',function(){
const spy=spyOn(calculator.prototype,'multiply');
calculate('3*2');
expect(spy).toHaveBeenCalledTimes(1);
expect(spy).toHaveBeenCalledWith(3,2);
});

it('calls divide',function(){
const spy=spyOn(calculator.prototype,'divide');
calculate('4/2');
expect(spy).toHaveBeenCalledTimes(1);
expect(spy).toHaveBeenCalledWith(4,2);
});


it('calls updateResult',function(){
spyOn(window,'updateResult');
spyOn(calculator.prototype,'multiply').and.callThrough();
calculate('5*5');
expect(window.updateResult).toHaveBeenCalledTimes(1);
expect(window.updateResult).toHaveBeenCalledWith(25);

});

it('calls fake',function(){
spyOn(window,'updateResult');
spyOn(calculator.prototype,'multiply').and.callFake(function(){
return('it works');
});
calculate('5*5');
expect(window.updateResult).toHaveBeenCalledTimes(1);
expect(window.updateResult).toHaveBeenCalledWith('it works');

});

it('and.returnValue test',function(){
spyOn(window,'updateResult');
spyOn(calculator.prototype,'multiply').and.returnValue('whatever multiply returns');
calculate('5*5');
expect(window.updateResult).toHaveBeenCalledTimes(1);
expect(window.updateResult).toHaveBeenCalledWith('whatever multiply returns');

});

/*it('and.returnValues test',function(){
spyOn(window,'updateResult');
spyOn(calculator.prototype,'multiply').and.returnValues(null,'whatever multiply returns');
calculate('5*5');
expect(window.updateResult).toHaveBeenCalledTimes(1);
expect(window.updateResult).toHaveBeenCalledWith('whatever multiply returns');

});*/


it('does not handle errors',function(){
spyOn(calculator.prototype,'multiply').and.throwError('some error');

expect(function(){calculate('5*5')}).toThrowError('some error');
});

});

describe('updateResult()',function(){

beforeAll(function(){
const element=document.createElement('div');
element.setAttribute('id','result');
document.body.appendChild(element);
this.element=element;
});

afterAll(function(){

document.body.removeChild(this.element);

});
it('adds result to DOM element',function(){

updateResult('5');
expect(this.element.innerText).toBe('5');
});
});


describe('showVersion()',function(){
it('calls calculator.version',function(done){
	spyOn(document,'getElementById').and.returnValue({
    innerText:null
	});

const spy=spyOnProperty(calculator.prototype,'version','get').and.returnValue(
Promise.resolve()
);
showVersion();
expect(spy).toHaveBeenCalled();
done();
});
});


});