it( 'should be initialized', () => {
  const index = require( '../app/index' ); // eslint-disable-line global-require
  expect( !!index ).toBe( true );
});
