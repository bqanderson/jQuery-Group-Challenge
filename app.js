$(function(){
  var carsList = [];
  $('form').on("submit", function(event){
    event.preventDefault();
    var serialized = $('form').serializeArray;
    console.log($('form').serializeArray());
    // carsList.push(serialized);
  });

});
