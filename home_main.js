
$(()=>{

  var date = new Date();
  var current_hour = date.getHours();

  console.log(date);
  console.log(current_hour);


  if (current_hour === 22 || 23 || 0 || 1 || 2 || 3 || 4 || 5){
    $('.menus').css({
      "background-color": "#19191a",
      "color": "white"
    });
  }
  else if (current_hour === 6 || 7 || 8 || 19 || 20 || 21){
    $('.menus').css({
      "background-color": "#b7b3c4",
      "color": "#b7b3c4"
    });
  }
  else {
    $('.menus').css({
      "background-color": "white",
      "color": "black"
    });
  }

  $('.contact').on("touchstart touchend", function(e){
    e.preventDefault();
    $('.contact').css({
      "flex": "2",
      "font-family": "Major Mono Display, monospace",
      "background-color": "#ea99a6",
      "transition": "1s"
    });
  });
  // $('.contact')..bind("touchend", ()=>{
  //   $('.contact').css({
  //     "flex": "1",
  //     "background-color": "#747679",
  //     "transition": "1s",
  //     "font-family": "Rye, cursive"
  //   })
  // });


});
