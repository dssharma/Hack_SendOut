var express = require('express');
var router = express.Router();

var pins = [
    {
        id: 'pin1',
        title: 'License key: 1234567891054564564878798745465'
    },
    {
        id: 'pin2',
        title: 'Steps to set up SpendIQ on Windows Machine as compared to Mac'
    },
    {
        id: 'pin3',
        title: 'On Wednesday, Mr Gandhi was picked by opposition leaders from ' +
        'as many as 15 parties to speak on their behalf.'
    },
    {
        id: 'pin4',
        title: 'On Wednesday, Mr Gandhi was picked by opposition leaders from ' +
        'as many as 15 parties to speak on their behalf.' +
        'as many as 15 parties to speak on their behalf.'
    },
    {
        id: 'pin5',
        title: 'On Wednesday, Mr Gandhi was picked by opposition leaders from ' +
        'as many as 15 parties to speak on their behalf.' +
        'as many as 15 parties to speak on their behalf.'
    },
    {
        id: 'pin6',
        title: 'On Wednesday, Mr Gandhi was picked by opposition leaders from ' +
        'as many as 15 parties to speak on their behalf.' +
        'as many as 15 parties to speak on their behalf.' +
        'as many as 15 parties to speak on their behalf.'
    },
    {
        id: 'pin7',
        title: 'On Wednesday, Mr Gandhi was picked by opposition leaders from ' +
        'as many as 15 parties to speak on their behalf.'
    }
];

var tags = [
    {
        id: 'tag1',
        url: 'https://strongloop.com/wp-content/uploads/2015/12/nodejs-logo.png',
        title: 'Samsung'
    },
    {
        id: 'tag2',
        url: 'https://strongloop.com/wp-content/uploads/2015/12/nodejs-logo.png',
        title: 'Twitter'
    },
    {
        id: 'tag4',
        url: 'https://strongloop.com/wp-content/uploads/2015/12/nodejs-logo.png',
        title: 'Intel'
    },
    {
        id: 'tag5',
        url: 'https://strongloop.com/wp-content/uploads/2015/12/nodejs-logo.png',
        title: 'Facebook'
    },
    {
        id: 'tag6',
        url: 'https://strongloop.com/wp-content/uploads/2015/12/nodejs-logo.png',
        title: 'Facebook'
    }
];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('hack', {
        pins: pins,
        tags: tags
    });
});

module.exports = router;
