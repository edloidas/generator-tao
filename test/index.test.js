const path = require( 'path' );
const helpers = require( 'yeoman-test' );
const assert = require( 'yeoman-assert' );
const R = require( 'ramda' );

it( 'initializes', () => {
  const index = require( '../app/index' ); // eslint-disable-line global-require
  expect( !!index ).toBe( true );
});

const defaults = {
  moduleName: 'module',
  moduleDesc: 'Superb module.',
  moduleKeywords: [ 'module', 'superb', 'simple keyword' ],
  appveyorSupport: false,
  ternSupport: false,
  githubUsername: 'username',
  name: 'username',
  email: 'username@email.com',
  website: 'https://username.com',
};

const files = [
  '.editorconfig',
  '.gitignore',
  '.travis.yml',
  'package.json',
  'index.js',
  'README.md',
  'CONTRIBUTING.md',
  '.eslintrc',
  '.eslintignore',
];

const optFiles = [
  'appveyor.yml',
  '.tern-project',
];

it( 'generates expected _minimum_ of files', () =>
  helpers.run( path.join( __dirname, '../app' ))
    .withOptions({ all: true })
    .withPrompts( defaults )
    .toPromise()
    .then(() => {
      expect(() => {
        assert.file( files );
        assert.noFile( optFiles );
        assert.noFileContent( 'README.md', '[![AppVeyor Build Status][appveyor-image]][appveyor-url]' );
      }).not.toThrow();
    })
);

it( 'generates expected _maximum_ of files', () =>
  helpers.run( path.join( __dirname, '../app' ))
    .withOptions({ all: true })
    .withPrompts( R.merge( defaults, { appveyorSupport: true, ternSupport: true }))
    .toPromise()
    .then(() => {
      expect(() => {
        assert.file( R.concat( files, optFiles ));
        assert.fileContent( 'README.md', '[![AppVeyor Build Status][appveyor-image]][appveyor-url]' );
      }).not.toThrow();
    })
);
