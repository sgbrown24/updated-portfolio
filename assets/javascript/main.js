// ScrollMagic function
function splitScroll(){
   const controller = new ScrollMagic.Controller();
   new ScrollMagic.Scene({
       duration:'200%',
       //having it target the about me title
       triggerElement: '.about-title',
       triggerHook: 0
   })
   .setPin('.about-title')
.addIndicators()
.addTo(controller);
}
splitScroll();