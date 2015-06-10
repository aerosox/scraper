var scrape = require("../scrape");

module.exports = function(req, reply) {
   var url = "http://" + req.payload.url;
   console.log(url, req.payload);
   scrape({
     url: url,
     cookie: req.payload.cookie,
     selector: req.payload.selector
   }, function(err, result) {
    return reply.view("result", {
      result: result
    });
   })
};