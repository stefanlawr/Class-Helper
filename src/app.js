const request = require("request");
const cheerio = require("cheerio");

request(
  "https://ssb.ramapo.edu/pls/RCNJ/twbkwbis.P_GenMenu?name=homepage",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const bannerCopyright = $(".banner_copyright");
      // console.log(bannerCopyright.html());
      // console.log(bannerCopyright.text());

      // const output = bannerCopyright.find('h5').text();
      // console.log(output);

      $(".mpdefault a").each((i, element) => {
        const item = $(element).text();
        console.log(item);
      });
    }
  },
);
