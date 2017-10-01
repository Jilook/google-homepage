var arrayTest = [];

for (i = 0; i<20; i++) {
	arrayTest[i] = Math.floor(Math.random() * 10);
}

console.log(arrayTest);

var index = arrayTest.indexOf(8);

console.log(index);