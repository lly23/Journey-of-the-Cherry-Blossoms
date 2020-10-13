$(document).ready(function() {
    //sakura petals dropping plugin
    $('#intro').sakura({
      fallSpeed: 0.3,
      newOn: 500,
      swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8']
    });

    if ($(window).scrollTop() >= $('#intro').offset().top) {
      $('#intro').sakura('stop');
    }

    // timelify plugin
    $('.timeline').timelify({
      animLeft: "fadeInLeft",
      animCenter: "fadeInUp",
      animRight: "fadeInRight",
      animSpeed: 600,
      offset: 150
    });

    // made a navigation menu that will take user to a certain section
    $('#listone').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $("#title").offset().top
      }, 500, function() {
        $('#listtwo').removeClass('active');
        $('#listthree').removeClass('active');
        $('#listfour').removeClass('active');
        $('#listfive').removeClass('active');
        $('#listone').addClass('active');
      });
    });

    $('#listtwo').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $("#intro").offset().top
      }, 500, function() {
        $('#listone').removeClass('active');
        $('#listthree').removeClass('active');
        $('#listfour').removeClass('active');
        $('#listfive').removeClass('active');
        $('#listtwo').addClass('active');
      });
    });

    $('#listthree').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $("#content").offset().top - 50
      }, 500, function() {
        $('#listone').removeClass('active');
        $('#listtwo').removeClass('active');
        $('#listfour').removeClass('active');
        $('#listfive').removeClass('active');
        $('#listthree').addClass('active');
      });
    });

    $('#listfour').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $("#quiz-box").offset().top - 100
      }, 500, function() {
        $('#listone').removeClass('active');
        $('#listtwo').removeClass('active');
        $('#listthree').removeClass('active');
        $('#listfive').removeClass('active');
        $('#listfour').addClass('active');
      });
    });

    $('#listfive').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $("#sources").offset().top
      }, 500, function() {
        $('#listfive').addClass('active');
        $('#listone').removeClass('active');
        $('#listtwo').removeClass('active');
        $('#listthree').removeClass('active');
        $('#listfour').removeClass('active');
      });
    });

    $(window).scroll(function() {
      // title will fade when scrolling down
      var scrollTop = $(window).scrollTop();
      var height = $(window).height();
  
      $('#title').css({
          'opacity': ((height - scrollTop) / height)
      }); 
      
      if ($(window).width() <= 600 && $(window).scrollTop() <= $('#title').height()) {
        $('#title').css({
            'opacity': 1
        });
      }

      // when scrolling, active sections will be highlighted with active class properties
      if ($(window).scrollTop() <= $('#title').height()) {
        $('#listone').addClass('active');
        $('#listtwo').removeClass('active');
        $('#listthree').removeClass('active');
        $('#listfour').removeClass('active');
        $('#listfive').removeClass('active');
        $('#nav').css({'background': 'none', 'width': '0'});
      } 

      if ($(window).scrollTop() >= $('#intro').offset().top) {
        $('#listtwo').addClass('active');
        $('#listone').removeClass('active');
        $('#listthree').removeClass('active');
        $('#listfour').removeClass('active');
        $('#listfive').removeClass('active');
        $('#nav').css({'background': '#FFF', 'width': '100%'});
      } 

      if ($(window).scrollTop() >= $('#content').offset().top - 50) {
        $('#listthree').addClass('active');
        $('#listone').removeClass('active');
        $('#listtwo').removeClass('active');
        $('#listfour').removeClass('active');
        $('#listfive').removeClass('active');
      } 

      if ($(window).scrollTop() >= $('#quiz-box').offset().top - 100) {
        $('#listfour').addClass('active');
        $('#listone').removeClass('active');
        $('#listtwo').removeClass('active');
        $('#listthree').removeClass('active');
        $('#listfive').removeClass('active');
      }

      if ($(window).scrollTop() >= $('#sources').offset().top) {
        $('#listfive').addClass('active');
        $('#listone').removeClass('active');
        $('#listtwo').removeClass('active');
        $('#listthree').removeClass('active');
        $('#listfour').removeClass('active');
      }

      //changes color of active date boxes
      if ($(window).scrollTop() > ($('#content').offset().top)) {
        $('#one').addClass('changed');
      } else {
        $('#one').removeClass('changed');
      } 

      if ($(window).scrollTop() >= $('#one').offset().top) {
        $('#one').removeClass('changed');
        $('#two').addClass('changed');
      } else {
        $('#two').removeClass('changed');
      }

      if ($(window).scrollTop() >= $('#two').offset().top) {
        $('#two').removeClass('changed');
        $('#three').addClass('changed');
      } else {
        $('#three').removeClass('changed');
      }

      if ($(window).scrollTop() >= $('#three').offset().top) {
        $('#three').removeClass('changed');
        $('#four').addClass('changed');
      } else {
        $('#four').removeClass('changed');
      }

      if ($(window).scrollTop() >= $('#four').offset().top) {
        $('#four').removeClass('changed');
        $('#five').addClass('changed');
      } else {
        $('#five').removeClass('changed');
      }

      if ($(window).scrollTop() >= $('#five').offset().top) {
        $('#five').removeClass('changed');
        $('#six').addClass('changed');
      } else {
        $('#six').removeClass('changed');
      }

      if ($(window).scrollTop() >= $('#six').offset().top) {
        $('#six').removeClass('changed');
        $('#seven').addClass('changed');
      } else {
        $('#seven').removeClass('changed');
      }

      if ($(window).scrollTop() >= $('#seven').offset().top) {
        $('#seven').removeClass('changed');
        $('#eight').addClass('changed');
      } else {
        $('#eight').removeClass('changed');
      }

      if ($(window).scrollTop() >= $('#eight').offset().top) {
        $('#eight').removeClass('changed');
        $('#nine').addClass('changed');
      } else {
        $('#nine').removeClass('changed');
      }
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
            'Helen Taft',
            'Jokichi Takamine',
          ],
          'correctIndex': 1,
          'correctResponse': 'Nice job! Elizah went straight to U.S government officials after her trip from Japan in 1885.',
          'incorrectResponse': 'Wrong answer.'
        },
        {
          'q': 'True or False: On Jan. 6, 1910, 2,000 Japanese cherry trees that were imported into Washington were infested with pests.',
          'options': [
            'True',
            'False'
          ],
          'correctIndex': 0,
          'correctResponse': 'Correct!',
          'incorrectResponse': 'Wrong answer.'
        },
        {
          'q': 'Which year was the year of the first National Cherry Blossom Festival?',
          'options': [
            '1920',
            '1925',
            '1934',
            '1935',
          ],
          'correctIndex': 3,
          'correctResponse': 'Correct!',
          'incorrectResponse': 'Wrong answer.'
        },
        {
          'q': 'True or False: When Scidmore was little, she wanted to become a food explorer.',
          'options': [
            'True',
            'False'
          ],
          'correctIndex': 1,
          'correctResponse': 'Correct! David Fairchild was the one who wanted to become a botanist/food explorer. Elizah Scidmore became a geographer and journalist.',
          'incorrectResponse': 'Wrong answer.'
        },
        {
          'q': 'What are Cherry Blossoms called in Japanese?',
          'options': [
            'Fuji',
            'Tsubaki',
            'Sakuras',
            'Hibiscus'
          ],
          'correctIndex': 2,
          'correctResponse': 'Correct! Cherry Blossoms are called Sakuras in Japanese.',
          'incorrectResponse': 'Wrong answer.'
        }
      ]
    });
});