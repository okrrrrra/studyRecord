// pseudo code 
// if( n % m == 0) 印出數字

let printFactor = function(n){
	for( let i = 1 ; i <= n ; i++ ){
		if( n % i == 0){
			console.log(i);
		}
	}
}

printFactor(100);