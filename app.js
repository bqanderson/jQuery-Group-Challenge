$(function(){
  var carsList = [];
  $('form').on("submit", function(event)){
    event.preventDefault();
    var serialized = $('form').serializedArray();
    carsList.push(serialized);
  };
  
});
