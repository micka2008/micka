$(function () {
  const texte = "Bienvenue à vous";
  const $target = $("#welcome");
  let i = 0;

  function taper() {
    if (i < texte.length) {
      $target.text($target.text() + texte[i]);
      i++;
      setTimeout(taper, 110);
    }
  }

  taper();

  $(".stat").each(function(){

    let element = $(this);
    let target = parseInt(element.attr("style").match(/\d+/)[0]);
    let current = 0;

    let interval = setInterval(function(){

      if(current >= target){
        clearInterval(interval);
      } else {
        current++;
        element.css("--p", current);
        element.find("span").text(current + "%");
      }

    }, 20); // vitesse animation (plus petit = plus rapide)

  });

  $(".langBar").each(function () {
    const bar = $(this);
    const target = parseInt(bar.attr("style").match(/\d+/)[0], 10);
    let current = 0;

    const interval = setInterval(function () {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        bar.css("--p", current);
        bar.closest(".langRow").find(".langPercent").text(current + "%");
      }
    }, 15); // vitesse (plus petit = plus rapide)
  });

});