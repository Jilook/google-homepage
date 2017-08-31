var searchBubble = [];
var numResearch = [];
var quantyStuff = [];
var numEffection = [];
var maxBubble = 0;
var maxEffection = 0;


function searchQB (numberSearch) {
	for (var i = 0; i < numberSearch; i++) {
	 	var k = Math.floor(Math.random()*60);
	 	var j = (Math.floor(Math.random()*20)) + 1;
	 	searchBubble.push(k);
	 	quantyStuff.push(j);
	 	if (k > maxBubble) {
	 		maxBubble = k;
	 	}
	 	if ( k / j > maxEffection) {
	 		maxEffection = k / j;
	 	}

	 }
		for (var i = 0; i <= searchBubble.length - 1; i++) {
			if (searchBubble[i] == maxBubble) {
				numResearch.push(i);
			}
			if (searchBubble[i]/quantyStuff[i] == maxEffection) {
				numEffection.push(i);

			}

		}



}
searchQB(5);
console.log(searchBubble);
console.log(quantyStuff);
console.log("Наибольшее количество пузырей = " + maxBubble + " в растворе = " + numResearch);
console.log("Максимальная эффективность = " + maxEffection + " в растворе = " + numEffection);