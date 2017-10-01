function boardCell(cell) {
	this.id = cell;
	this.status = 0; 
}

function newShip(shipNumber) {
	this.id = shipNumber;
	this.startPosition = Math.floor(Math.random() * 49);
	this.vertHor = Math.floor(Math.random() * 2);	 
}

function shipOnBoard (argument) {
	var shipOn = newShip[argument];
	if (shipOn.vertHor == 1) {
		
	}
}


var boardGame = [];
var shipFleat = [];


for (i = 0; i<49; i++) {
	boardGame[i] = new boardCell(i);
}

for (i = 1; i<4; i++) {
	
	var shipShipyard = new newShip(i);
	if (boardGame[shipShipyard.startPosition].status == 0) {
		
		
		shipFleat[i] = shipShipyard;
	} else {
		console.log('Здесь уже есть корабль');
	  };

}





console.log(boardGame);
console.log(shipFleat);
