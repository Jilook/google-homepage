var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        var messageHit = document.getElementById(location);
        messageHit.setAttribute('class', 'hit');
        
    },
    displayMiss: function(location) {
        var messageMiss = document.getElementById(location);
        messageMiss.setAttribute('class', 'miss');
        
    },
}


var model = {
    boarsSize: 7,
    shipLength: 3,
    shipSunk: 0,
    numShips: 3,
    ships: [ { locations: ['06', '16', '26'], hits: ['', '', ''] },
            { locations: ['24' , '34', '44'], hits: ['', '', ''] },
            { locations: ['10', '11', '12'], hits: ['', '', ''] } ],
    
    fire: function(guess) {
        for (i=0; i <= numShips; i++) {
            var ship = this.ships[i]; 
            var index = ship.locations.indexOf(guess);
            
            if (index >= 0) {
                ship.hits[i] = 'hit';
            }
        return false;
            
        }
    },





};



