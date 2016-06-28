$(function(){
  var carsList = [];
  var carNum = 0;
  $('#carInfo').on("submit", function(event){
    event.preventDefault();
    var serialized = $('#carInfo').serializeArray();
    carsList.push(serialized);
    carNum = carsList.length-1;
    $('.cars').append('<p>' + carsList[carNum][0]['make'] + '</p>')
    console.log(carsList);

  });

  // function Car(make, model, year, color, rating, price){
  //   this.make = make;
  //   this.model = model;
  //   this.year = year;
  //   this.color = color;
  //   this.rating = rating;
  //   this.price = price;
// }
});
