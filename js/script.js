$(document).ready(function() {
    // var scene = document.getElementById('scene');
    // var parallaxInstance = new Parallax(scene);

    // $.jInvertScroll(['.scroll']);
    $('.timeline').timelify({
        // animation types
        animLeft: "bounceInLeft",
        animRight: "bounceInRight",
        animCenter: "bounceInUp",
        // animation speed
        animSpeed: 300,
        // trigger position in pixels
        offset: 150
      });
      
});