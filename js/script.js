$(document).ready(function() {
    // waypoints plugin
    var waypoint = new Waypoint({
      element: document.getElementById('panelOne'),
      handler: function() {
        notify('Basic waypoint triggered')
      }
    })

    // timelify plugin
    $('.timeline').timelify({
      animLeft: "fadeInLeft",
      animCenter: "fadeInUp",
      animRight: "fadeInRight",
      animSpeed: 600,
      offset: 150
    });

    $(window).scroll(function () {
      // sakura drop


      // fade when scrolling down
      var scrollTop = $(window).scrollTop();
      var height = $(window).height();
  
      $('#title').css({
          'opacity': ((height - scrollTop) / height)
      });    

      //changes color of scrolled date boxes
      if ($(window).scrollTop() > ($('#content').offset().top)) {
        console.log('window: ' + $(window).scrollTop());
        console.log('panel one: ' + $('#content').offset().top);
        $('#one').addClass('changed');
      } 

      // $('#one').fadeOut('slow', 'linear');

      if ($(window).scrollTop() > ($('#one').height()) / 2) {
        console.log('window: ' + $(window).scrollTop());
        console.log('half of panel one: ' + $('#one').height());
        $('#two').addClass('changed');
      }

    });
});