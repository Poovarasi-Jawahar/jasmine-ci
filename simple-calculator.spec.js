describe('simple-calculator.js',function(){
let cal;
let cal1;
describe('Calculator',function(){

beforeEach(function(){
cal=new calculator;
cal1=new calculator;
});

afterEach(function(){

});

it('has constructor',function(){

expect(cal).toEqual(cal1)

});

it('can be instantiated',function(){
jasmine.addMatchers(customMatchers);
cal.total=0;
expect(cal).toBeTruthy();
expect(cal.total).toBeFalsy();
expect(cal.constructor.name).toContain('calc');
expect(2).not.toBeCalculator();
expect(cal).toBeCalculator();
});

it('has common operations',function(){

expect(cal.add).toBeDefined();
expect(cal.test).toBeUndefined();
});

it('has null value',function(){

cal.test=null;
expect(cal.test).toBeNull();
});

describe('add()',function(){
it('add numbers',function(){
	
	cal.add(5,4);
	expect(cal.total).toBe(9);
});



it('toMatch, 3rd party, asymmetric matchers test',function(){
cal.add(5,6);
expect(cal.total).toBe(11);
expect(cal.total).toMatch(/-?\d+/);
expect(typeof cal.total).toMatch('number');
expect(cal.total).toEqual(jasmine.anything());
expect(cal.total).toBeNumber();

});

});


describe('subtract()',function(){

it('subtract numbers',function(){
	cal.subtract(5,4);
	expect(cal.total).toBe(1);
});

});


describe('multiply()',function(){
it('multiply numbers',function(){
	cal.multiply(5,4);
	expect(cal.total).toBe(20);
});

it('does not handle NaN',function(){
cal.multiply(5,'a');
expect(cal.total).toBeNaN();
});

});


describe('divide()',function(){
it('divide numbers',function(){
	cal.divide(16,4);
	expect(cal.total).toBe(4);
});

it('throw check divide',function(){
expect(function(){cal.divide(9,0)}).toThrow();
expect(function(){cal.divide(9,0)}).toThrowError(Error);
expect(function(){cal.divide(9,0)}).toThrowError(Error,'cannot divide by zero');
});

});

describe('get version',function(){
it('fetches version from external source', async function(done){
spyOn(window,'fetch').and.returnValue(Promise.resolve(
	new Response('{"version":"0.1"}')
));
const version= await cal.version;
expect(version).toBe('0.1');
done();

});
});

});

});