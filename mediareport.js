// USER ACTIONS
// 1. sort 50 cards by important and not important until max 10 important
// 2. Rank (max) 10 cards by important
// 3. profit
// FEATURES
// * Make own cards

var db = [
  {}
];

var cards = {};

var dropzones = {};

// EVENT - open drawer
$('.dropzone').on('click', function(){
  // el
  var drawer = $(this).find('.drawer');
  // dom
  drawer.slideToggle();
});

// EVENTS - dragging card
$(".card").draggable({
  // test
  //helper: "clone",
  containment: 'document',
  revert: "invalid",
  revertDuration: 200,
  start: function( event, ui ) {
    $(this).addClass('card-dragging');
    //$(this).text('foo');
  },
  stop: function( event, ui ) {
    $(this).removeClass('card-dragging');
  }
});
$(".dropzone").droppable({
  hoverClass: "drop-hover",
  tolerance: "pointer",
  drop: function() {
    alert( "dropped" );
  }
});
