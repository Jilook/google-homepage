var stringTest = "Обращаем массив вспять. Напишите две функции, reverseArray и reverseArrayInPlace";
var arrayTest = [];

// Функция очистки массива от (. , и пробелов)
function clearArray (arrayD) {
	for (var i = 0; i < arrayD.length; i++) {
		if (arrayD[i] == ' ' || arrayD[i] == '.' || arrayD[i] == ',') {
			arrayD.splice(i, 1);
		}
		
	}
	return arrayD;
}

// Функция разбивка строки на символы и записи в массив с очисткой
function reverseArray (stringV) {
	var stringA = stringV.split('');
	for (var i = 0; i < stringA.length; i++) {
		if (stringA[i] == ' ' || stringA[i] == '.' || stringA[i] == ',') {
			clearArray(stringA);
		}
	}
	arrayTest = stringA;
}

// Функция сортировки

function arraySort (array) {
	array.sort();
	return array;
}

function arrayRevers (array) {
	array.reverse();
	return array;
}

reverseArray(stringTest);
console.log(arraySort(arrayTest));
console.log(arrayRevers(arrayTest));







