$(document).ready(function() {
    // timelify plugin
    $('.timeline').timelify({
      animLeft: "fadeInLeft",
      animCenter: "fadeInUp",
      animRight: "fadeInRight",
      animSpeed: 600,
      offset: 150
    });

    // sakura drop on title page
    // $('#title').sakura({
    //       fallSpeed: 0.5,
    //       maxSize: 24, // Maximum petal size
    //       minSize: 9, // Minimum petal size
    //       newOn: 300,
    //       swayAnimations: ['sway-0', 'sway-4', 'sway-5', 'sway-8'] // Swaying animation names
    // });

    // made a navigation menu that will take user to a certain section
    $('#listone').click(function() {
      $('#listone').addClass('active');
      $('#listtwo').removeClass('active');
      $('#listthree').removeClass('active');
      $('#listfour').removeClass('active');
      $('#listfive').removeClass('active');
    });

    $('#listtwo').click(function() {
      $('#listtwo').addClass('active');
      $('#listone').removeClass('active');
      $('#listthree').removeClass('active');
      $('#listfour').removeClass('active');
      $('#listfive').removeClass('active');
    });

    $('#listthree').click(function() {
      $('#listthree').addClass('active');
      $('#listone').removeClass('active');
      $('#listtwo').removeClass('active');
      $('#listfour').removeClass('active');
      $('#listfive').removeClass('active');
    });

    $('#listfour').click(function() {
      $('#listfour').addClass('active');
      $('#listone').removeClass('active');
      $('#listtwo').removeClass('active');
      $('#listthree').removeClass('active');
      $('#listfive').removeClass('active');
    });

    $('#listfive').click(function() {
      $('#listfive').addClass('active');
      $('#listone').removeClass('active');
      $('#listtwo').removeClass('active');
      $('#listthree').removeClass('active');
      $('#listfour').removeClass('active');
    });

    $(window).scroll(function() {
      // $('#title').animate({
      //   scrollTop: $('#intro').offset().top
      // }, 1000);

      // fade when scrolling down
      var scrollTop = $(window).scrollTop();
      var height = $(window).height();
  
      $('#title').css({
          'opacity': ((height - scrollTop) / height)
      });    

      if ($(window).scrollTop() <= $('#title').height()) {
        $('#listone').addClass('active');
        $('#listtwo').removeClass('active');
        $('#listthree').removeClass('active');
        $('#listfour').removeClass('active');
        $('#listfive').removeClass('active');
      }

      if ($(window).scrollTop() >= $('#intro').offset().top) {
        $('#listtwo').addClass('active');
        $('#listone').removeClass('active');
        $('#listthree').removeClass('active');
        $('#listfour').removeClass('active');
        $('#listfive').removeClass('active');
        // $('html, body').animate({
        //   scrollTop: $('#intro').offset().top
        // }, 1000);
        // $('#title').sakura('stop');
      }

      if ($(window).scrollTop() >= $('#content').offset().top) {
        $('#listthree').addClass('active');
        $('#listone').removeClass('active');
        $('#listtwo').removeClass('active');
        $('#listfour').removeClass('active');
        $('#listfive').removeClass('active');
      }

      if ($(window).scrollTop() >= $('#festival').offset().top) {
        $('#listfour').addClass('active');
        $('#listone').removeClass('active');
        $('#listtwo').removeClass('active');
        $('#listthree').removeClass('active');
        $('#listfive').removeClass('active');
      }

      if ($(window).scrollTop() >= $('#quiz').offset().top) {
        $('#listfive').addClass('active');
        $('#listone').removeClass('active');
        $('#listtwo').removeClass('active');
        $('#listthree').removeClass('active');
        $('#listfour').removeClass('active');
      }

      //changes color of scrolled date boxes
      // if ($(window).scrollTop() > ($('#content').offset().top)) {
      //   console.log('window: ' + $(window).scrollTop());
      //   console.log('panel one: ' + $('#content').offset().top);
      //   $('#one').addClass('changed');
      // } 

      // $('#one').fadeOut('slow', 'linear');

      // if ($(window).scrollTop() > ($('#one').height()) / 2) {
      //   console.log('window: ' + $(window).scrollTop());
      //   console.log('half of panel one: ' + $('#one').height());
      //   $('#two').addClass('changed');
      // }

    });

    // quiz plugin
    $('#quiz').quiz({
      resultsScreen: '#results-screen',
      // counter: false,
      // homeButton: '#custom-home',
      counterFormat: 'Question %current of %total',
      questions: [
        {
          'q': 'Who advocated for the Cherry Blossoms first?',
          'options': [
            'David Fairchild',
            'Elizah Scidmore',
            'Answer 3',
            'Answer 4'
          ],
          'correctIndex': 1,
          'correctResponse': 'Nice job! Elizah went straight to U.S government officials after her trip from Japan in 1885.',
          'incorrectResponse': 'Wrong answer. Try again.'
        },
        {
          'q': 'A smaple question?',
          'options': [
            'Answer 1',
            'Answer 2'
          ],
          'correctIndex': 1,
          'correctResponse': 'Custom correct response.',
          'incorrectResponse': 'Custom incorrect response.'
        },
        {
          'q': 'A smaple question?',
          'options': [
            'Answer 1',
            'Answer 2',
            'Answer 3',
            'Answer 4'
          ],
          'correctIndex': 2,
          'correctResponse': 'Custom correct response.',
          'incorrectResponse': 'Custom incorrect response.'
        },
        {
          'q': 'A smaple question?',
          'options': [
            'Answer 1',
            'Answer 2'
          ],
          'correctIndex': 1,
          'correctResponse': 'Custom correct response.',
          'incorrectResponse': 'Custom incorrect response.'
        },
        {
          'q': 'A smaple question?',
          'options': [
            'Answer 1',
            'Answer 2',
            'Answer 3',
            'Answer 4'
          ],
          'correctIndex': 3,
          'correctResponse': 'Custom correct response.',
          'incorrectResponse': 'Custom incorrect response.'
        }
      ]
    });
});