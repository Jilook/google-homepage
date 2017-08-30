var searchBubble = [];
var numResearch = [];
var maxBubble = 0;


function searchQB (numberSearch) {
	for (var i = 0; i < numberSearch; i++) {
	 	var k = Math.floor(Math.random()*2);
	 	searchBubble.push(k);
	 	if (k > maxBubble) {
	 		maxBubble = k;
	 	}

	 }
		for (var i = 0; i <= searchBubble.length - 1; i++) {
			if (searchBubble[i] == maxBubble) {
				numResearch.push(i);
			}
		}


}
searchQB(20);
console.log(searchBubble);
console.log(maxBubble);
console.log(numResearch);