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
    $('#title').sakura({
          fallSpeed: 0.5,
          maxSize: 24, // Maximum petal size
          minSize: 9, // Minimum petal size
          newOn: 300,
          swayAnimations: ['sway-0', 'sway-4', 'sway-5', 'sway-8'] // Swaying animation names
    });

    $(window).scroll(function () {
      // fade when scrolling down
      var scrollTop = $(window).scrollTop();
      var height = $(window).height();
  
      $('#title').css({
          'opacity': ((height - scrollTop) / height)
      });    

      if ($(window).scrollTop() > ($('#title').offset().bottom)) {
        var scrollTop = $(window).scrollTop();
        var height = $(window).height() + $('#title').height();
        console.log('height' + height);
        $('#intro').css({
          'opacity': ((height - scrollTop) / height)
        });    
      }

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

    // quiz plugin
    $('#quiz').quiz({
      //resultsScreen: '#results-screen',
      //counter: false,
      //homeButton: '#custom-home',
      counterFormat: 'Question %current of %total',
      questions: [
        {
          'q': 'A smaple question?',
          'options': [
            'Answer 1',
            'Answer 2',
            'Answer 3',
            'Answer 4'
          ],
          'correctIndex': 1,
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