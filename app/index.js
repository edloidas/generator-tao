/* eslint no-underscore-dangle: ["off", { "allow": ["foo_", "_bar"] }] */
const yeoman = require( 'yeoman-generator' );
const R = require( 'ramda' );
const kebabCase = require( 'lodash.kebabcase' );
const capitalize = require( 'lodash.capitalize' );
const superb = require( 'superb' );
const normalizeUrl = require( 'normalize-url' );
const mkdirp = require( 'mkdirp' );
const text = require( './text' );

module.exports = yeoman.Base.extend({
  constructor: function constructor( ...args ) {
    yeoman.Base.apply( this, args );

    // arguments
    this.argument( 'name', { type: String, required: false,
      desc: text.name,
    });

    // options
    this.option( 'debug', { type: Boolean, required: false, alias: 'd', defaults: false,
      desc: 'Debug mode',
    });
    this.option( 'all', { type: Boolean, required: false, alias: 'a', defaults: false,
      desc: 'Ask all questions',
    });
    this.option( 'skip', { type: Boolean, required: false, alias: 's', defaults: false,
      desc: 'Ask required questions only',
    });
    this.option( 'yarn', { type: Boolean, required: false, alias: 'y', defaults: false,
      desc: 'Yarn install, ensure you have yarn installed',
    });

    // helpers

    // logValues :: Object -> String -> undefined
    this.logValues = obj => key => this.log( `\t${ key }:\t${ obj[ key ] }` );

    // logByKeys :: Object -> Array -> undefined
    this.logByKeys = obj => R.forEach( this.logValues( obj ));

    // logObject :: Object -> undefined
    this.logObject = obj => this.logByKeys( obj )( R.keys( obj ));
  },
  initializing: function initializing() {
    this.firstTime = !this._globalConfig.getAll().promptValues;
    this.savedAnswers = this._globalConfig.getAll().promptValues || {};
    this.shouldAskAll = !!( this.options.all || this.options.a );
    this.shouldSkipAll = !!( this.options.skip || this.options.s );

    if ( this.options.debug ) {
      this.log( 'ARGUMENTS' );
      this.logByKeys( this )([ 'name' ]);
      this.log( 'OPTIONS' );
      this.logByKeys( this.options )([ 'all', 'skip', 'debug', 'yarn' ]);
      this.log( '' );
      this.log( `shouldAskAll:\t${ this.shouldAskAll }` );
      this.log( `shouldSkipAll:\t${ this.shouldSkipAll }` );
      this.log( '' );
    }

    if ( this.shouldAskAll && this.shouldSkipAll ) {
      this.log( text.conflict );
    }
  },
  prompting: function prompting() {
    const ifEmpty = R.uncurryN( 2, reason => value => !!value || reason );
    const shouldAskPersonPrompts = prop => R.or(
        R.pipe( R.prop( prop ), R.isNil )( this.savedAnswers ), this.shouldAskAll
      );
    const shouldAskPrefPrompts = R.or( this.firstTime, this.shouldAskAll );
    const splitKeywords = words => R.filter( R.pipe( R.isEmpty, R.not ), R.map( R.trim, R.split( ',', words )));
    const mapDefaults = R.pipe(
      R.filter( R.hasIn( 'default' )),
      R.reduce(( acc, value ) => R.assoc( value.name, value.default, acc ), {})
    );
    const rejectNil = R.reject( R.isNil );

    const questions = [ {
      name: 'name',
      message: '道  your name:',
      store: true,
      validate: ifEmpty( 'You have to provide name' ),
      when: shouldAskPersonPrompts( 'name' ),
    }, {
      name: 'email',
      message: '道  your email:',
      store: true,
      validate: ifEmpty( 'You have to provide email' ),
      when: shouldAskPersonPrompts( 'email' ),
    }, {
      name: 'website',
      message: '道  your website:',
      store: true,
      validate: ifEmpty( 'You have to provide website' ),
      filter: normalizeUrl,
      when: shouldAskPersonPrompts( 'website' ),
    }, {
      name: 'githubUsername',
      message: '道  github username:',
      store: true,
      validate: ifEmpty( 'You have to provide a username' ),
      when: shouldAskPersonPrompts( 'githubUsername' ),
    }, {
      name: 'appveyorSupport',
      message: '道  appveyor CI:',
      type: 'confirm',
      default: true,
      store: true,
      when: shouldAskPrefPrompts,
    }, {
      name: 'ternSupport',
      message: '道  Tern:',
      type: 'confirm',
      default: true,
      store: true,
      when: shouldAskPrefPrompts,
    }, {
      name: 'moduleName',
      message: '道  module name:',
      default: kebabCase( this.name || this.appname ),
      filter: kebabCase,
      when: !this.shouldSkipAll,
    }, {
      name: 'moduleVersion',
      message: '道  module version:',
      store: true,
      default: '0.0.1',
      when: shouldAskPrefPrompts,
    }, {
      name: 'moduleDesc',
      message: '道  description:',
      when: !this.shouldSkipAll,
    }, {
      name: 'moduleKeywords',
      message: '道  keywords:',
      filter: splitKeywords,
      when: !this.shouldSkipAll,
    }, {
      name: 'moduleLicense',
      message: '道  preferred license:',
      store: true,
      default: 'MIT',
      when: shouldAskPrefPrompts,
    } ];

    return this.prompt( questions )
    .then(( answers ) => {
      // Overwrite in the following order:
      //   defaults < saved < arguments < input
      this.props = R.mergeAll([
        mapDefaults( questions ),
        this.savedAnswers,
        { moduleName: this.name },
        rejectNil( answers ),
      ]);

      if ( this.options.debug ) {
        this.log( 'ANSWERS' );
        this.log( '  STORED' );
        this.logObject( mapDefaults( questions ));
        this.log( '  SAVED' );
        this.logObject( this.savedAnswers );
        this.log( '  INPUT' );
        this.logObject( answers );
        this.log( '  RESULT' );
        this.logObject( this.props );
        this.log( '' );
      }

      // Overwrite in case of conflict
      if ( this.shouldSkipAll ) {
        this.conflicter.force = true;
      }
    });
  },
  configuring: function configuring() {
    this.moduleDesc = this.shouldSkipAll || !this.props.moduleDesc ?
      ( `${ capitalize( superb()) } module ` ) :
      this.props.moduleDesc;
    this.moduleKeywords = this.props.moduleKeywords || [];
    this.camelModuleName = kebabCase( this.props.moduleName );
  },
  writing: function writing() {
    if ( this.name ) {
      mkdirp( this.props.moduleName );
      this.destinationRoot( this.destinationPath( this.props.moduleName ));
    }

    const template = {
      moduleName: this.props.moduleName,
      moduleDesc: this.moduleDesc,           //
      moduleKeywords: this.moduleKeywords,   //
      moduleVersion: this.props.moduleVersion,
      moduleLicense: this.props.moduleLicense,
      appveyorSupport: this.props.appveyorSupport,
      camelModuleName: this.camelModuleName, //
      githubUsername: this.props.githubUsername,
      name: this.props.name,
      email: this.props.email,
      website: this.props.website,
    };

    const cpTpl = ( from, to ) => {
      this.fs.copyTpl( this.templatePath( from ), this.destinationPath( to ), template );
    };

    cpTpl( 'index.js', 'index.js' );
    cpTpl( '_package.json', 'package.json' );
    cpTpl( '_README.md', 'README.md' );
    cpTpl( '_CONTRIBUTING.md', 'CONTRIBUTING.md' );
    cpTpl( 'editorconfig', '.editorconfig' );
    cpTpl( 'gitignore', '.gitignore' );
    cpTpl( 'eslintrc.json', '.eslintrc.json' );
    cpTpl( 'eslintignore', '.eslintignore' );
    cpTpl( 'travis.yml', '.travis.yml' );

    if ( this.props.appveyorSupport ) {
      cpTpl( 'appveyor.yml', 'appveyor.yml' );
    }

    if ( this.props.ternSupport ) {
      cpTpl( 'tern-project', '.tern-project' );
    }
  },
  install: function install() {
    if ( !this.options[ 'skip-install' ]) {
      if ( this.options.yarn ) {
        this.spawnCommandSync( 'yarn', []);
      } else {
        this.npmInstall();
      }
    }
  },
  end: function end() {
    this.log( text.tao );
    this.log( 'All done.' );
    this.log( '' );
  },
});
