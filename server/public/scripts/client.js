$(document).on(onReady);

function onReady() {
    console.log('hay jquery');
    
// TO DO - set up form
    // TO DO - get all music
    getAllMusic();
    
}

function getAllMusic() {
   // make ajax get request
    $.ajax({
        method: 'GET',
        url: '/music',

    }).then( function(response){
        console.log('back from server with:', response);
        
    }).catch(function(error) {
        console.log('error getting music, yo', error);
        alert('sorry, could not get music. now go away');
    })
}