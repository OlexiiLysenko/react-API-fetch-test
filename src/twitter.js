// connecting to the twitter with npm tvit packaje
var Twit = require('twit')
    
var T = new Twit({
  consumer_key:         'PD0Wv1mqBzAb990b0buxHr8A3',
  consumer_secret:      'awOdLyAYj1FysdQBFvpqHQHlksVaYyEuKqhguG9Mjh3HdwFCDI',
  access_token:         '968576147247239168-vOK36aPJdqmqJDsvNDLG2HaD4ciqWYF',
  access_token_secret:  '0dEnuyX3yqNv6KNHzhrtIZ8ZNF9p2yl53oV1r9CGQreoH',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
});

//  search twitter for all tweets containing the word 'banana' since July 11, 2011 
var params = {
q: 'angular',
count: 5
};

T.get('search/tweets', params, gotData); 

function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }
};