/*
  Источник:
  https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
*/

$(function(){
  $('#disable').on('click', function() {
    if($("html").css("position") != "fixed") {
      
      var top = $("html").scrollTop() ? $("html").scrollTop() : $("body").scrollTop();
      
      if(window.innerWidth > $("html").width()) {
          $("html").css("overflow-y", "scroll");      
      }
      
      $("html").css({"width": "100%", "height": "100%", "position": "fixed", "top": -top});
    }
  });

  $('#enable').on('click', function() {
    if($("html").css("position") == "fixed") {
        $("html").css("position", "static");
        $("html, body").scrollTop(-parseInt($("html").css("top")));
        $("html").css({"position": "", "width": "", "height": "", "top": "", "overflow-y": ""});
    }
  });
});