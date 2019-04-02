# Class Helper

I got tired of waiting around for classes at random, so I made this tool to alert me when classes open up.

## Packages Used

NodeJS, ExpressJS, Request, and Cheerio

## Project Flow

1. Launch web server
2. Visit a URL on our server that activates the web scraper
3. The scraper will make a request to the website we want to scrape
4. The request will capture the HTML of the website and pass it along to our server
5. We will traverse the DOM and extract the information we want
6. Next, we will format the extracted data into a format we need
7. Finally, we will save this formatted data into a JSON file on our machine
