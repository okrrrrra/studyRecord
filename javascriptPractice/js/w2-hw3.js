// pseudo code
// let 取得字串長度
// for(從字串長度-1開始影印){ 重新組合印出 }

function reverse(str){

	let strLength = str.length;
	let revStr = '';

	for( let i = strLength - 1 ; i >= 0 ; i-- ){
		revStr += str[i];
	}

	console.log(revStr);

}

reverse('abcdefg');
reverse('a,g,h,j,,,kj,k,l')