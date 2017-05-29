### Gulp

Pre-requisites

```
npm init
```
It will create the package.json on your project folder

###### installation  ######

* Install Gulp Globally
* Install Gulp In devDependencies
* Create a gulpfile.js

```
$ npm install --global gulp
$ npm install --save-dev gulp
```
In the gulpfile.js file that you just created, we'll make a simple gulp task like below

```
var gulp  = require('gulp');

gulp.task('default', function() {
  console.log('Gulp is running!')
});
```

Once you are done with this go to command prompt(your project folder) and type 'gulp'

> gulp

You will get a output similar to this

```javascript
[12:32:08] Using gulpfile ~/samples/myproject/gulpfile.js
[12:32:08] Starting 'default'...
[12:32:08] Gulp is running!
[12:32:08] Finished 'default' after 1 ms
```

some more useful gulp task(s) has been added in this repository. Please fork/download for more information :+1:
