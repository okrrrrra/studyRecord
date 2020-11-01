// alert & prompt 
let test = prompt('first title', );
alert(`here r a ${test}`);

let test2 = confirm("hi");
alert(`${test2}`);

let value = true;
alert(typeof value);
// 變數可用 typeof 進行查看 ex. number, srtring, null, NaN, undefined, boolean, object，symbol
// 二元運算: +, -, *, /, **, %
// "+" 可用在兩個字的連接及運算元轉化為數字 x = 1 > alert(+ｘ) >　１
// 自增自檢 ++ 前置跟後置差別在於賦值前後的回傳順序，前置會先運算再回傳，後置反之
// for (a = 1, b = 3, c = a * b; a < 10; a++) {...} 逗號在同一行上的運算只會返回最後一個
// 嚴格相等運算符 === 不會進行類型轉換， == 會
// null == undefined， 但 null !=== undefined 在進行比較大小時 null 會被轉換成 0 ， undefined 會轉為NaN
// 字串的比較僅比較首個字符 ex. "gopp" == "gids"
// 任何非空字串符的邏輯值都是 true(重要) 
// if(條件判斷內容){ 欲執行事項 } 可在後方加上 else 來進行更多情況的判斷
// 可簡化成 (條件內容) ? true事項: false事項 ex.(age<3)? "hi!baby": "h1!boy"
// 多重的問句可以可以這樣寫(條件1)? result1: (條件2)? result2: (條件3)? result3; 以此類推
// 運算符: ||(或)，&&(且)，!(非); || 運算有一個true就為true, 若皆為false則回傳最後一個值
// ||(或)也可用來獲取第一個真值 例如，我們有firstName、lastName和nickName變量，都是可選的。我們用或運算||來選擇有值的那一個，並顯示出來(如果沒有設置，則用匿名(anonymous))
// 還有一種是"短路求值"，當運算的左方是false時會執行右方指令 ex. true||alert(...) false||alert(...)會跳過第一項執行第二項false的指令
// &&(且): 布林值兩邊必須都為true才會回傳true，只有一邊true就會回傳false ，若都是真值即回傳最後一個數值，一出現假值即回傳第一個假值
// !(非): 將操作數的布林值進行反轉，!!兩個非運算可用來將數值轉換成布林值，也就是，第一個非運算將該值轉化為布爾類型並取反，第二個非運算再次取反。最後我們就得到了一個任意值到布爾值的轉化
// ex. 求回傳值 alert( null || 2 && 3 || 4 );?
// 空值合併運算符?? : x = a ?? b 結果是 a: a 不為null或undefined， b: 其他情況;所以??其實等於 x = (a !== null && a !== undefined)? a: b;
// ??返回第一個已定義的值，如果沒有添加括號，??不可與||及&&一起使用(優先級不同)
// while : while(condition){...} 當condition為true時執行內部程序 單次執行視為一次迭代
// 使用 do...while 可將 condition 移至程序下方，先執行一次程序才進行條件判定
// for :for(begin; condition; step){...} for 迴圈預先定義了初始值，以及完成條件判斷後再進行更新的初始值 其中在循環內定義之變量視為內聯變量，只在循環中可見
// 循環可以透過 break 強制跳出
// continue可以跳過當前剩餘的循環重新開啟一個循環
// 標籤 labelname: 標籤是在循環之前的標示符號，break labelname 即可從迴圈內部 break 外部我們想跳出的地方
// ex.	 outer: for (let i = 0; i < 3; i++) {

//   for (let j = 0; j < 3; j++) {

//     let input = prompt(`Value at coords (${i},${j})`, '');

//     // 如果是空字符串或被取消，则中断并跳出这两个循环。
//     if (!input) break outer; // (*)

//     // 用得到的值做些事……
//   }
// }
// alert('Done!');
// ex. 輸出質數
// 大於1且不能被除了1和它本身以外的任何數整除的整數叫做素數。

// 換句話說， n > 1 且不能被1和n以外的任何數整除的整數， 被稱為素數。

// 例如， 5 是素數， 因為它不能被2、 3 和4整除， 會產生餘數。

// 寫一個可以輸出2到n之間的所有素數的代碼。

// 當n = 10， 結果輸出2、 3、 5、 7。

// PS代碼應適用於任何n， 而不是對任何固定值進行硬性調整。
// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // 对每个自然数 i

//   for (let j = 2; j < i; j++) { // 寻找一个除数……
//     if (i % j == 0) continue nextPrime; // 不是素数，则继续检查下一个
//   }

//   alert( i ); // 输出素数
// }
// switch: 語法的部分需要有一個判斷condition 的區塊跟程序內容的區塊，根據不同case 執行不同的程序內容
/*switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}*/
// 比較x值是否相等於case值，以此類推
// case 當然也可以進行分組，
// case3:
// case5:
// 		alert(...);
// 		break;
// 在這裡case3跟5都進行一樣的程序
// case比較的類型是嚴格相等，所以比較的值必須是相同的類型才可以進行匹配
// 函式: 看起來是長這樣的
/*
function name(){
	..body..
}
*/
// 可透過名稱調用函式
/*
function funcOne(){
	...
}
funcOne();
*/
// 局部變量: 函式內部定義之變量只在其內部有效
/*
function funcTwo(){
	let message = "good morning!"
}
funcTwo(); //可正常呼叫
alert(message) //無法引用該變數值
*/
// 但是函式針對外部的變量擁有完全的訪問權限，亦可進行更改
/*
let username = "andy"
function funcThree(){
	username = "bob";
	alert(username);
}
alert(username); //andy
funcThree(); //username更改為bob
alert(username); //bob
*/
// 函式內外部的同名變量是獨立互不干擾的
// 函式也可以透過參數進行數據傳遞
/*
function showMessage(from, text) { // 参数：from 和 text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)
*/
// 如果函式未提供參數其值將是undefined
// 我們也可以為參數提供後備值
/*
function showMessage(text) {
  if (text === undefined) {
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message
*/
// 返回值 可返回參數中的值並輸出
/*
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
*/
// 函式表達式: 透過將函式賦值給一個變量來進行
/*
let exp = function(){
	...
};
*/
// 回調函式
/*讓我們多舉幾個例子，看看如何將函數作為值來傳遞以及如何使用函數表達式。

我們寫一個包含三個參數的函數ask(question, yes, no)：

question
關於問題的文本
yes
當回答為“Yes” 時，要運行的腳本
no
當回答為“No” 時，要運行的腳本
函數需要提出question（問題），並根據用戶的回答，調用yes()或no()：
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// 用法：函数 showOk 和 showCancel 被作为参数传入到 ask
ask("Do you agree?", showOk, showCancel);*/
/* 函數表達式跟函式聲明差別在於，創建的先後，函數表達式是在代碼執行到達時被創建，並且僅從那一刻起可用。

一旦代碼執行到賦值表達式let sum = function…的右側，此時就會開始創建該函數，並且可以從現在開始使用（分配，調用等）。

函數聲明則不同。

在函數聲明被定義之前，它就可以被調用。

例如，一個全局函數聲明對整個腳本來說都是可見的，無論它被寫在這個腳本的哪個位置。

這是內部算法的原故。當JavaScript準備運行腳本時，首先會在腳本中尋找全局函數聲明，並創建這些函數。我們可以將其視為“初始化階段”。

在處理完所有函數聲明後，代碼才被執行。所以運行時能夠使用這些函數。

例如下面的代碼會正常工作：
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
函數聲明sayHi是在JavaScript準備運行腳本時被創建的，在這個腳本的任何位置都可見。

……如果它是一個函數表達式，它就不會工作：
sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};
*/
// 箭頭函數看起來像這樣: let func = (arg1, arg2, ...argN) => expression 
// 換句話說，它是下面這段代碼的更短的版本：
/*
let func = function(arg1, arg2, ...argN) {
  return expression;
};
*/
// 多行的箭頭函式
/*
let sum = (a, b) => {  // 花括号表示开始一个多行函数
  let result = a + b;
  return result; // 如果我们使用了花括号，那么我们需要一个显式的 “return”
};

alert( sum(1, 2) ); // 3
*/
