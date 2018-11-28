
$( ".mybutton" ).mouseover(function() {
  var topPosition = getRandomNumber(1,95);
  var leftPosition = getRandomNumber(1,95);
  $(this).css({
    'font-size':'1em',
    'top': topPosition + '%',
    'left': leftPosition + '%',
    'position':'absolute',
    'background-color':'hsla(' + getRandomNumber(0, 10) + ',100%, 45%, 1)'


  });
});


function getRandomNumber(from, to) {
  return Math.floor((Math.random() * to) + from);

}

var keyState = '';
var texts = [];

var container = $('.container');
//container.hide();
var index = 0;


document.body.onkeyup = function(e){
    if(e.keyCode == 13){
      console.log('space');
      console.log(e.target);
      e.target.value='';
}

function onKeyUp() {
  keyState = '';
  container.hide();
}


  }

// });
