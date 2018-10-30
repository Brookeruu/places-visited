//
// var placesArray = [];
// console.log(placesArray);

function PlacesVisited() {
  this.places = []

}
//
PlacesVisited.prototype.addPlaces = function(place) {
    this.places.push(place);
}

function Place(state,landmarks,date,description) {
  this.state = state,
  this.landmarks = landmarks,
  this.date = date,
  this.description = description
}
var placesVisited = new PlacesVisited();

function displayPlaceDetails(placesVisitedToDisplay) {
var placesList = $("ul#places");
var htmlForPlacesList = "";

placesVisitedToDisplay.places.forEach(function(place) {
  htmlForPlacesList += "<li>" + place.state +  " - " + place.landmarks + " - "  + place.date + " - " + place.description + "</li>"
});
placesList.html(htmlForPlacesList)
};

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();


  var state = $("#new-state").val();
  var landmark = $("#new-landmark").val();
  var date = $("#new-date").val();
  var description = $("#new-description").val();

  var vacay = new Place(state,landmark,date,description);

  placesVisited.addPlaces(vacay);
  displayPlaceDetails(placesVisited);


  $("p").click(function() {
    $(this).slideToggle();
    $(this).siblings().slideToggle();
  });

  // placesArray.push(vacay);
  //PlacesVisited

 });

});




//$("#results-show").append("<li>" + placesArray[i].landmarks + "</li>")
