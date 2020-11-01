// let firstLetterUpper = function(str){
// 	return str.charAt(0).toUpperCase()+str.slice(1);
// }
// console.log(firstLetterUpper('asdfgfdh'))
// console.log(firstLetterUpper('.jhgjghuyti'))
let testWord = function(str){
	let uniFirst = str.charCodeAt(0)	//轉換成unicode	
	if( uniFirst >= 97 && uniFirst <= 122 ){	//轉換成大寫
		uniFirst -= 32;
	}
	
	let bigFirst = String.fromCharCode(uniFirst);	//轉換回字串
	let lng = str.length;	//取得輸入字串長度並將轉換後字串重新連結
	for(let i = 1 ; i < lng ; i++ ){
		bigFirst += str[i];
	}
	

	return console.log(bigFirst);	//回傳轉換完畢的值
}
testWord('asdasd');
testWord(',asdasd');