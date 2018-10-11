$(document).ready(function() {
    // var scene = document.getElementById('#title');
    // var parallaxInstance = new Parallax(scene);

    $('.timeline').timelify({
      animLeft: "fadeInLeft",
      animCenter: "fadeInUp",
      animRight: "fadeInRight",
      animSpeed: 600,
      offset: 150
    });

    $(window).scroll(function () {
      // sakura drop



      var scrollTop = $(window).scrollTop();
      var height = $(window).height();
      var topOfTimeline = $('#content').offset().top;
  
      $('#title').css({
          'opacity': ((height - scrollTop) / height)
      }); 

      if ($(window).scrollTop() > ($('#content').offset().top)) {
        console.log('window: ' + $(window).scrollTop());
        console.log('panel one: ' + $('#content').offset().top);
        $('#one').addClass('changed');
      } 

      if ($(window).scrollTop() > ($('#content').offset().bottom) / 2) {
        console.log('window: ' + $(window).scrollTop());
        console.log('half of panel one: ' + $('#one').offset().bottom);
        $('#two').addClass('changed');
      }

      // if ($(window).scrollTop() > $('#panelOne').offset().top) {
      //   $('#one').fadeTo("slow" , 0.5);
      // }

      if($(window).scrollTop() > topOfTimeline) { //scrolled past the other div?
        // $('#title').css('display', 'none');
        // $('#title').hide();
        // $('#content').css('margin-top', 0);
      } else if ($(window).scrollTop() < topOfTimeline) {
        // $('#title').css('display', 'flex');
        // $('#title').show();
        // $('#content').css('margin-top', '100vh');
      }
    });
});