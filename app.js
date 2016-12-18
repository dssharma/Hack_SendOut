var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _ = require('lodash');
var index = require('./routes/index');
var users = require('./routes/users');
var hack = require('./routes/hack');

var app = express();

var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

/* mongoose setup */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/sendOutDummy')
    .then(() =>  console.log('connection succesful, run on sendout now'))
    .catch((err) => console.error(err));

// Create schemas
var LinksObject = new mongoose.Schema({title: String,  question: String,  tags: [],  answer: String,  url: String,  createdDateTime: { "type": Date, "default": Date.now }});
var Tags = new mongoose.Schema({ tag: String,  count: Number});

var SendOutTable = mongoose.model('sendouts', LinksObject);
var TagsTable = mongoose.model('tags', Tags);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'FunctionFile')));

app.use('/', index);
app.use('/users', users);
app.use('/hack', hack);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

//curl -i -X POST -H 'Content-Type: application/json' -d '{"url": "http://stackoverflow.com/questions/23595282/error-no-default-engine-was-specified-and-no-extension-was-provided"}' http://localhost:3000/site
//curl -i -X GET http://localhost:3000/saveLink?url=http://stackoverflow.com/questions/23595282/error-no-default-engine-was-specified-and-no-extension-was-provided
app.get('/saveLink', function (req, res) {
  var json = {title: "", question: "", tags: [], answer: ""};
  var query = req.query;
  if (query.hasOwnProperty("url")){
    console.log("URL: ", query.url);
    json.url = query.url;
    json.createdDateTime = new Date();

    request(query.url, function(error, response, html) {
      var $ = cheerio.load(html);
      if (!error) {

        if(_.includes(query.url,"stackoverflow.com"))
        {

          $('#question-header h1 a').filter(function () {
            json.title = $(this).text();
          });

          $('.question .post-text').filter(function() {
            json.question = $(this).text();
          });

          $('.post-taglist a').filter(function() {
            json.tags.push($(this).text());
          });

          $('.accepted-answer .post-text').filter(function() {
            json.answer = $(this).text();
          });
        }
        else {
          $('h1').filter(function () {
            json.title = json.title.concat($(this).text());
          });

          $('#readme').filter(function() {
            json.answer = json.answer.concat($(this).text());
          });

          if(json.answer.length == 0) {
            $('.itemlist').filter(function() {
              json.answer = json.answer.concat($(this).text());
            });
          }
        }}

      //We have got the JSON out of the http link
      json.tags.forEach(function (tagName) {
        console.log(tagName);

        TagsTable.find({tag:tagName}, function(err, result){
          if(err) console.log(err);
          else {
            if(result.length >= 1) {
              console.log("result count:", result[0].count);
              var newCount = result[0].count + 1;
              TagsTable.update({tag:tagName}, {$set:{count:newCount}}, function(err, result1){
                if(err) console.log(err);
                else console.log("Tag Item Updated with Count", result1);
              });
            } else {
              console.log("result does not have anything");
              TagsTable.create({tag: tagName, count: '1'}, function(err, result2){
                if(err) console.log(err);
                else console.log("Tag Item Added with Count 1", result2);
              });
            }
          }
        });
      });
      SendOutTable.create(json, function(err, sendOut){
        if(err) console.log(err);
        else console.log("SendOut Item Added");
      });
      res.send(json);
    });
  }
});

//curl -i -X GET http://localhost:3000/tags
app.get('/tags', function (req, res) {
  TagsTable.find().sort({count: -1}).limit(10).exec(function(err, result){
    if(err) console.log(err);
    else {
      res.json(result);
      console.log(result);
    }
  });
});

//curl -i -X GET http://localhost:3000/links?tags=express
app.get('/links', function (req, res) {
  console.log("Query: ", req.query);
  SendOutTable.find(req.query, function(err, result){
    if(err) console.log(err);
    else {
      res.json(result);
      //console.log(result);
    }
  });
});

module.exports = app;
