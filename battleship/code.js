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

view.displayHit('00');

view.displayMiss('02');



