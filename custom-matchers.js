// JavaScript source code
const customMatchers={
toBeCalculator:function(){
	return{
		compare:function(actual){
			const result={
				pass:actual instanceof calculator,
				message:''
			}
			if(result.pass){
				result.message='Expected '+ actual+' not to be instanceof calculator';
			} else{
			result.message='Expected '+actual+' to be instanceof calculator';
			}
			return result;
		}
	}
}

}