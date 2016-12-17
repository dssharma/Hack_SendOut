var App = (function() {
  'use strict';

  var tags = [
    {
      id: 'tag1',
      url: 'https://strongloop.com/wp-content/uploads/2015/12/nodejs-logo.png',
      title: 'Samsung',
      count: 10
    },
    {
      id: 'tag2',
      url: 'https://strongloop.com/wp-content/uploads/2015/12/nodejs-logo.png',
      title: 'Twitter',
      count: 5
    },
    {
      id: 'tag4',
      url: 'https://strongloop.com/wp-content/uploads/2015/12/nodejs-logo.png',
      title: 'Intel',
      count: 6
    },
    {
      id: 'tag5',
      url: 'https://strongloop.com/wp-content/uploads/2015/12/nodejs-logo.png',
      title: 'Facebook',
      count: 7
    },
    {
      id: 'tag6',
      url: 'https://strongloop.com/wp-content/uploads/2015/12/nodejs-logo.png',
      title: 'Facebook',
      count: 3
    }
  ];

  var questions = [
    {
      id: 1,
      url: 'http://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/38671949#38671949',
      title: 'Dynamically create element using jquery',
      question: 'I am trying to create element using jquery. When i click on a link, i want to create an element ' +
      '"p", give it some text, and then put it in one of my divs. Also, i want to check which link is clicked on, so ' +
      'i can put the created "p" in the right div. Any solutions on where i am doing it wrong?',
      answer: 'For a start the click function can be done like this instead of having to use .find():'
    },
    {
      id: 2,
      url: 'http://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/38671949#38671949',
      title: 'When should I use curly braces for ES6 import?',
      question: 'It seems to be obvious, but I found myself a bit confused about when to use curly braces for importing a single module in ES6. For example, in the React-Native project I am working on, I have the following file and its content:' + '' +
      'The SO post at here does not answer my question, instead I am asking when I should or should not use curly braces for importing a single module, or I should never use curly braces for importing a single module in ES6 (this is apparently not the case, as I have seen single import with curly braces required)',
      answer: 'Quoting David Herman: ECMAScript 6 favors the single/default export style, and gives the sweetest syntax to importing the default. Importing named exports can and even should be slightly less concise.' + '' +
      'However in TypeScript named export is favored because of refactoring. Example, if you default export a class and rename it, the class name will change only in that file and not in the other references, with named exports class name will be renamed in all the references. Named exports is also preferred for utilities.' +
      'Default export is actually a named export with name default, so default export can be imported.'
    },
    {
      id: 3,
      url: 'http://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/38671949#38671949',
      title: 'Dynamically create element using jquery',
      question: 'I am trying to create element using jquery. When i click on a link, i want to create an element ' +
      '"p", give it some text, and then put it in one of my divs. Also, i want to check which link is clicked on, so ' +
      'i can put the created "p" in the right div. Any solutions on where i am doing it wrong?',
      answer: 'For a start the click function can be done like this instead of having to use .find():'
    },
    {
      id: 4,
      url: 'http://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/38671949#38671949',
      title: 'Dynamically create element using jquery',
      question: 'I am trying to create element using jquery. When i click on a link, i want to create an element ' +
      '"p", give it some text, and then put it in one of my divs. Also, i want to check which link is clicked on, so ' +
      'i can put the created "p" in the right div. Any solutions on where i am doing it wrong?',
      answer: 'For a start the click function can be done like this instead of having to use .find():'
    },
    {
      id: 5,
      url: 'http://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/38671949#38671949',
      title: 'Dynamically create element using jquery',
      question: 'I am trying to create element using jquery. When i click on a link, i want to create an element ' +
      '"p", give it some text, and then put it in one of my divs. Also, i want to check which link is clicked on, so ' +
      'i can put the created "p" in the right div. Any solutions on where i am doing it wrong?',
      answer: 'For a start the click function can be done like this instead of having to use .find():'
    }
  ];

  var getChartData = function (tags) {
    var data = [];
    tags.forEach(function (tag) {
      var object = {
        name: tag.title,
        y: tag.count
      };
      data.push(object);
    });
    return data;
  };

  var getChartOptions = function (chartData) {
    return {
      chart: {
        type: 'pie',
        backgroundColor:'rgba(255, 255, 255, 0.1)',
        plotBorderWidth: null,
        plotShadow: false,
        margin: [-30, -10, -30, -10],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0
      },
      title: {
        text: null
      },
      yAxis: {
        title: {
          text: 'Total percent of total drives'
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false
          },
          verticalAlign: 'top',
          borderWidth: 0
        }
      },
      series: [
        {
          name: 'Total',
          data : chartData,
          size: '70%',
          innerSize: '40%'
        }
      ],
      credits: {
        enabled: false
      }
    }
  };

  var objectEquals = function (x, y) {
    if ( x === y ) return true;
    // if both x and y are null or undefined and exactly the same

    if ( ! ( x instanceof Object ) || ! ( y instanceof Object ) ) return false;
    // if they are not strictly equal, they both need to be Objects

    if ( x.constructor !== y.constructor ) return false;
    // they must have the exact same prototype chain, the closest we can do is
    // test there constructor.

    for ( var p in x ) {
      if ( ! x.hasOwnProperty( p ) ) continue;
      // other properties were tested using x.constructor === y.constructor

      if ( ! y.hasOwnProperty( p ) ) return false;
      // allows to compare x[ p ] and y[ p ] when set to undefined

      if ( x[ p ] === y[ p ] ) continue;
      // if they have the same strict value or identity then they are equal

      if ( typeof( x[ p ] ) !== "object" ) return false;
      // Numbers, Strings, Functions, Booleans must be strictly equal

      if ( ! objectEquals( x[ p ],  y[ p ] ) ) return false;
      // Objects and Arrays must be tested recursively
    }

    for ( p in y ) {
      if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) ) return false;
      // allows x[ p ] to be set to undefined
    }
    return true;
  };

  var $previewInstance = null;
  var $previousQuestionInstance = null;

  var init = function() {
    var $pins = $('.pin');

    $('#close').on('click', function() {
      $('.reader-view').toggleClass( "hide" );
    });

    $('.card').on('click', function () {
      $('.reader-view').toggleClass( "hide" );
      loadReader($(this));
    });

    $pins.on('click', function() {
      var $el = $(this);
      const areEqual = objectEquals($el, $previewInstance);
      areEqual ? hidePreview() : showPreview( $el );
    });

    $('.tab-links').on('click', function () {
      makeSectionVisible($('.links-section'));
      makeSectionHidden($('.pins-section'));
    });

    $('.tab-pins').on('click', function () {
      makeSectionVisible($('.pins-section'));
      makeSectionHidden($('.links-section'));
    });

    var options = getChartOptions(getChartData(tags));
    options.chart.renderTo = 'chart';
    var chart = new Highcharts.Chart(options);
  };

  var makeSectionVisible = function ($container) {
    $container.removeClass('hidden');
    $container.addClass('visible');
  };

  var makeSectionHidden = function ($container) {
    $container.removeClass('visible');
    $container.addClass('hidden');
  };


  var handleQuestionClick = function () {
    var $questionContainer = $(this);
    const areEqual = objectEquals($questionContainer, $previousQuestionInstance);
    areEqual ? hideQuestion() : showQuestion($questionContainer);
  };

  var hideQuestion = function () {
    var $answer = $previousQuestionInstance.find('.a-container');
    $answer.toggleClass('displayFlex');
    $previousQuestionInstance = null;
  };

  var showQuestion = function ($questionContainer) {
    if($previousQuestionInstance) {
      hideQuestion();
    }

    $previousQuestionInstance = $questionContainer;
    var $answer = $questionContainer.find('.a-container');
    $answer.toggleClass('displayFlex');
  };

  var loadReader = function ($el) {
    var heading = $el.find('p').text();
    var url = $el.find('img').attr('src');
    $('.section-heading').find('img').attr('src', url);
    $('.section-heading').find('p').text(heading);
    $('.questions').empty();
    addQuestions($('.questions'));
  };

  var addQuestions = function ($el) {
    questions.forEach(function (question) {
      var $questionHtml = addQuestionHTML(question);
      $el.append($questionHtml);
    });
  };

  var addQuestionHTML = function (question) {
    var $question = $('<div class="q-text">Q.</div>');
    var $heading = $('<div class="q-header"></div>');
    var $headingLink = $('<a href=' + question.url +'>' + question.title +'</a>');
    $heading.append($headingLink);
    var $questionContainer = $('<div class="qheader-container"></div>');
    $questionContainer.append($question);
    $questionContainer.append($heading);

    var $description = $('<div class="q-description">' + question.question + '</div>');

    var $answer = $('<div class="answerTitle">A.</div>');
    var $answerDescription = $('<div class="a-description">' + question.answer + '</div>');
    var $answerContainer = $('<div class="a-container"></div>');
    $answerContainer.append($answer);
    $answerContainer.append($answerDescription);

    var $container = $('<div class="question-container"></div>');
    $container.click(handleQuestionClick);
    $container.prepend($questionContainer);
    $container.append($description);
    $container.append($answerContainer);

    return $container;
  };

  var preview;
  var hidePreview = function () {
    preview = $previewInstance;
    preview.toggleClass('showPin');
    $previewInstance = null;
  };

  var showPreview = function ($el) {
    preview = $previewInstance;

    if(preview) {
      hidePreview();
    }
    $previewInstance = $el;
    preview = $previewInstance;
    preview.toggleClass('showPin');
  };

  init();

  return {
    init: init
  }
})();
