$(document).ready(function() {
    // var scene = document.getElementById('scene');
    // var parallaxInstance = new Parallax(scene);

    $('.timeline').timelify({
      animLeft: "fadeInLeft",
      animCenter: "fadeInUp",
      animRight: "fadeInRight",
      animSpeed: 600,
      offset: 150
    });

    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var height = $(window).height();
      var topOfTimeline = $('#content').offset().top;
  
      $('#title').css({
          'opacity': ((height - scrollTop) / height)
      }); 

      if($(window).scrollTop() > topOfTimeline) { //scrolled past the other div?
        // $('#title').css('display', 'none');
        // $('#title').hide();
        // $('#content').css('margin-top', 0);
      } else if ($(window).scrollTop() == topOfTimeline) {
        // $('#title').css('display', 'flex');
        // $('#title').show();
        $('#content').css('margin-top', '100vh');
      }
    });
});