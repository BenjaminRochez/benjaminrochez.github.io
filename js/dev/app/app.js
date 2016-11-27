(function($) {
  /*-----------------------------------------------------------------------------------*/
  /*	Outdated
  /*-----------------------------------------------------------------------------------*/
  //Désolé IE :(
  outdatedBrowser({
    bgColor: '#00A0E6',
    color: '#ffffff',
    lowerThan: 'transform',
    languagePath: ''
  });


  var srReveal = {
  easing   : 'ease-in-out',
  scale    : 1,
  viewFactor: 0.3,
  reset: false
  };

  var srRevealF = {
  easing   : 'ease-in-out',
  scale    : 1,
  viewFactor: 0.5,
  reset: false
  };

  window.sr = ScrollReveal();
  sr.reveal('.sr', srReveal);
  sr.reveal('.srh', srReveal);

  Pace.on("done", function(){
      $(".cover").fadeOut(1000);
  });

})(jQuery);
