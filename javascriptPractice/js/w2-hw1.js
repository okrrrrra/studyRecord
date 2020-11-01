function printStars(n){
	if( n >= 1 && n <= 30){
		for( let m = 1 ; m <= n ; m++ ){	//遞迴的去進行影印的動作
			console.log('*');
		}
	}else
		return console.log('pls input AC number');
}
printStars(6);