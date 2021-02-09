
var ghpages = require('gh-pages');

var nombre = __dirname + '/dist/static';

ghpages.publish( nombre, {

    branch: 'master',
    repo: 'https://example.com/other/repo.git'
    
}, function(err) {

    console.log(err)
});