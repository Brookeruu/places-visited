//
// var placesArray = [];
// console.log(placesArray);

function PlacesVisited() {
  this.places = []
}
//
PlacesVisited.prototype.addPlaces = function(vacay) {
    this.places.push(vacay);
}

function Location(state,landmarks,date,description) {
  this.state = state,
  this.landmarks = landmarks,
  this.date = date,
  this.description = description
}
var placesVisited = new PlacesVisited();

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
debugger;
  var state = $("#state").val();
  var landmark = $("#landmark").val();
  var date = $("#date").val();
  var description = $("#description").val();
  var vacay = new Location(state,landmark,date,description);
  placesVisited.addPlaces(vacay);

  // placesArray.push(vacay);
  //PlacesVisited

 });

});

//$("#results-show").append("<li>" + placesArray[i].landmarks + "</li>")
