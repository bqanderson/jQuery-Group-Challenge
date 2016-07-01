$(function(){
  var carsList = [];
  var carNum = 0;
  $('#carInfo').on("submit", function(event){
    event.preventDefault();
    var serialized = $('#carInfo').serializeObject();
    carsList.push(serialized);
    carNum = carsList.length-1;
    carsList[carNum].price = parseInt(carsList[carNum].price);
    $('.cars').append('<div class="rate' + carsList[carNum].rating + '"><h3>' +
    carsList[carNum].make + ' ' + carsList[carNum].model + '</h3><ul>' +
    '<li>Year: ' + carsList[carNum].year + '</li>' +
    '<li>Color: ' + carsList[carNum].color +
    '</li><li>Customer Rating: ' + carsList[carNum].rating +
    '</li>' + '<li>Price: ' + carsList[carNum].price.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) +
    '<button class="remove">Remove</button></li></div>');
    $('#carInfo').trigger("reset");
    console.log(carsList);

  });

  $('.cars').on('click', '.remove', function () {
    $(this).closest("div").remove();
});
});
  // function Car(make, model, year, color, rating, price){
  //   this.make = make;
  //   this.model = model;
  //   this.year = year;
  //   this.color = color;
  //   this.rating = rating;
  //   this.price = price;
// }
