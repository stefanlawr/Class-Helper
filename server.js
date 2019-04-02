let express = require('express');
let fs = require('fs');
let request = require('request');
let cheerio = require('cheerio');

let app = express();

app.get('/scrape', (req, res) => {

  // URL we will be scraping
  url = 'http://www.imdb.com/title/tt1229340/';

  // Structure for our request
  request(url, (error, response, html) => {
    if (!error) {
      let $ = cheerio.load(html);

      let title, release, rating;
      let json = {
        title: "",
        release: "",
        rating: ""
      };
    }
  })

});

app.listen('8080');

console.log('Test on port 8080');

exports = module.exports = app;
