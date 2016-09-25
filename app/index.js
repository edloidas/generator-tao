'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  constructor: function constructor() {
    yeoman.Base.apply(this, arguments);
  },
  dummy: function dummy() {
    console.log('Dummy method ran.');
  },
});
