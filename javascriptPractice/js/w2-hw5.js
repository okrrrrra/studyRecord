/*	joim
for(第一層遞迴){
	依次取出陣列值
	陣列值加上字串值
}
*/
/*	repeat
for(重複n次){
	回傳
}
*/

function join(array, str){

	let joinWord = '';
	
	for( let m = 0 ; m < array.length ; m++ ){

		joinWord += array[m];
		joinWord += str;
	}

	return console.log(joinWord);

}

function repeat(str, num){
	
	let fullStr = '';
	for( let i = 1 ; i <= num ; i++ ){
		fullStr += str; 
	}

	return console.log(fullStr);

}

join([9, 8, 7, 'a', 'f', 'j'], '1');
repeat('aay', 4);