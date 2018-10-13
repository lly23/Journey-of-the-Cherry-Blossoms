$(document).ready(function() {
    // timelify plugin
    $('.timeline').timelify({
      animLeft: "fadeInLeft",
      animCenter: "fadeInUp",
      animRight: "fadeInRight",
      animSpeed: 600,
      offset: 150
    });

    // sakura drop
    // $('#title').sakura({
    //   //blow<a href="https://www.jqueryscript.net/animation/">Animation</a>s: ['blow-soft-left', 'blow-medium-left', 'blow-hard-left', 'blow-soft-right', 'blow-medium-right', 'blow-hard-right'], // Horizontal movement animation names
    //   className: 'sakura', // Class name to use
    //   fallSpeed: 1, // Factor for petal fall speed
    //   maxSize: 14, // Maximum petal size
    //   minSize: 9, // Minimum petal size
    //   newOn: 300, // Interval after which a new petal is added
    //   swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8'] // Swaying animation names
    // });

    // sakura drop
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