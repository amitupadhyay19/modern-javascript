// functions

// functions that are invoked immediately (IIFEs)
// Immediately invoked function expression

(function(){
    console.log('Yes!! this is an IIFE');
})();

(function(technology){
    console.log('Learning ' + technology);
})('Javascript'); // (); this for calling and parameters

// property methods

const musicPlayer = {
    play: function(id){
        console.log(`Playing song with the ID: ${id}`);
    },
    pause: function() {
        console.log('Pause...');
    }
}

musicPlayer.play(30);
musicPlayer.pause();

// methods can be outside of the object
musicPlayer.remove = function(id) {
    console.log(`Removed from the playlist, ID: ${id}`);
}

musicPlayer.remove(20);

// in bulit js functions they all are functions

console.log('Javascript');
alert();
// prompt();
// confirm();