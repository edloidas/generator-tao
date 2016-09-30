const yeoman = require( 'yeoman-generator' );
const description = require( './description' );

module.exports = yeoman.Base.extend({
  constructor: function constructor( ...args ) {
    yeoman.Base.apply( this, args );
    this.argument( 'name', {
      type: String, required: false,
      desc: description.name,
    });
    this.option( 'debug', {
      type: Boolean, required: false, alias: 'd', defaults: false,
      desc: 'Debug mode',
    });
  },
  initialize: function initialize() {
    if ( this.options.debug ) {
      this.log( `ARGUMENT: name ${ this.name }` );
    }
  },
});
