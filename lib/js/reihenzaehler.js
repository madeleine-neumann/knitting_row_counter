var $ = require('./lib/js/jquery')

/**
 * Created by madeleine on 09.03.15.
 */
$(document).ready(function(){
  if (localStorage.getItem("count")) {
    var count = parseInt(localStorage.getItem("count")); }
  else {
    var count = 0; }

  $('.hochzaehlen').click(function(){
    count = count + 1;
    localStorage.setItem("count", count);
    $('.ausgabe').html(count);
  });

  $('.runterzaehlen').click(function(){
    count = count - 1;
    localStorage.setItem("count", count);
    $('.ausgabe').html(count);
  });
  $('.loeschen').click(function(){
    count = 0;
    localStorage.setItem("count", count);
    $('.ausgabe').html(count);
  });

  $('.ausgabe').html(localStorage.getItem("count"));
});