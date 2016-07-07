$(document).ready(() => {
  var keyboard = $("div#keyboard").first();
  $(document).keypress((e) => {
    var character = String.fromCharCode(event.which);
    var key = $(`div.letter:contains(${character.toUpperCase()})`).first();
    key.addClass('shake-slow shake-constant');
    window.setTimeout(() => {
      key.removeClass('shake-slow shake-constant');
    }, 500);
  });
});
