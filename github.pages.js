
var ghpages = require('gh-pages');

ghpages.publish('dist/static', {
    branch: 'gh-pages',
    repo: 'git@github.com:mateolowenthal101/mateolowenthal101.github.io.git'
  },  (err)=>{
      if (err) console.log(err);
      console.log("did it");
  });