var webPage = require('webpage');
var page = webPage.create();

page.open('http://localhost:8080/', function(status) {
  setTimeout(function(){
    console.log('Stripped down page text:\n' + page.plainText);
    phantom.exit();
  }, 2000);
});