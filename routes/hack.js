var express = require('express');
var router = express.Router();
var http = require('http');

var pins = [

    {
        id: 'pin0',
        title: 'GeoIp_ByIpAddress in Microsoft Interflow GeoIP Service'+
    'The new implementation has a new request URL: https://interflowinternal.azure-api.net/ata/api/geoip/byipaddress'+
    'The request headers and response are exactly the same format as before – no changes needed'
    },
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
        title: 'There has been an update in the project folder structure in the development branch for v2 dashboard in preparation for Spend.'+
        'With this change, the folder structure is more streamlined and readable.'
    },
    {
        id: 'pin4',
        title: 'Steps to set SpedIq Rest Backend' +
        '\n1. Clone the Repo from github' +
        '\n2.Install Docker'
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
        url: '/images/android.svg',
        tag: 'Android',
        count: 10
    },
    {
        id: 'tag2',
        url: '/images/python-original.svg',
        tag: 'Python',
        count: 8
    },
    {
        id: 'tag3',
        url: '/images/javascript-original.svg',
        tag: 'JavaScript',
        count: 7
    },
    {
        id: 'tag3',
        url: '/images/linux-original.svg',
        tag: 'Linux',
        count: 7
    },
    {
        id: 'tag5',
        url: '/images/cplusplus-original.svg',
        tag: 'C++',
        count: 3
    },
    {
        id: 'tag6',
        url: '/images/docker-original.svg',
        tag: 'Docker',
        count: 3
    },
    {
        id: 'tag7',
        url: '/images/angularjs-original.svg',
        tag: 'AngularJS',
        count: 3
    },
    {
        id: 'tag8',
        url: '/images/github-original.svg',
        tag: 'Github',
        count: 3
    },
    {
        id: 'tag9',
        url: '/images/html5-original.svg',
        tag: 'HTML5',
        count: 3
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
