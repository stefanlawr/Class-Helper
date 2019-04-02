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

      let title, release;
      let output = {
        title: "",
        release: "",
        rating: ""
      };

      // Unique header class as a starting point; This is the CSS class we're filtering by
      $('.header').filter(() => {
        // Data we filtered is stored here
        let data = $(this);
        // Title information relates to it's location in the HTML file
        title = data.children().first().text();

        // Release information happens to be at the end
        release = data.children().last().children().text();

        output.title = title;
        output.release = release;
      });
    }

    fs.writeFile('output.json', JSON.stringify(this.output, null, 4), (err) => {
      console.log('Output written to output.json');
    });

    res.send('Check the console.');

  });

});

app.listen('8080');

console.log('Test on port 8080');

exports = module.exports = app;
