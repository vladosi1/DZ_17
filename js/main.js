// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const calculateAverage = (arr) => {

	const filteredArr = arr.filter((element) => typeof element === 'number');
	const sum = filteredArr.reduce((acc, curr) => acc + curr, 0);
	const meaning = sum / filteredArr.length;
	return meaning;
 };
 

 const arr = [1, 2, '3', 'four','Apple','Yellow', 5,6,8,789];
 const result = calculateAverage(arr);
 console.log(result); // 135.16666666666666

 // 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
 function doMath() {
	const x = Number(prompt("Введите первое число:"));
	const znak = prompt("Введите оператор (+, -, *, /, %, or ^):");
	const y = Number(prompt("Введите второе число:"));
	
 
	let result;
 
	switch (znak) {
	  case "+":
			 result = x + y;
		 break;
	  case "-":
		 	result = x - y;
		 break;
	  case "*":
			 result = x * y;
		 break;
	  case "/":
			 result = x / y;
		 break;
	  case "%":
		 	result = x % y;
		 break;
	  case "^":
		 	result = Math.pow(x, y);
		 break;
	  default:
		 	console.log("Невідомий оператор");
		 return;
	}
	
	console.log(`${x} ${znak} ${y} = ${result}`);
	alert(result)
 }
 doMath();
  

 // 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

 function myArray() {
	const firstArray = parseInt(prompt("Введите длину первого массива:"));
	const secondArray = parseInt(prompt("Введите длину второго массиваy:") || 0);
	const arr = [];
 
	for (let i = 0; i < firstArray; i++) {
	  arr[i] = [];
	  for (let j = 0; j < secondArray; j++) {
		 let input = prompt(`Enter a value for index (${i},${j}):`);
		 arr[i][j] = input ? input : null;
	  }
	}
 
	console.table(arr);
 }
 
 myArray();

 

// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач. 

function remove(str, valueToRemove) {
	return str.split('').filter(char => !valueToRemove.includes(char)).join('');
 }
 const fourResultFunc = remove(" hello world", ['l', 'd']);
console.log(fourResultFunc); // "heo wor"
 


 