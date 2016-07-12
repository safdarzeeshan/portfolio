// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {

  'rxjs': 'vendor/rxjs',
  '@angular/core': 'vendor/@angular/core/bundles/core.umd.js',
  '@angular/common': 'vendor/@angular/common/bundles/common.umd.js',
  '@angular/compiler': 'vendor/@angular/compiler/bundles/compiler.umd.js',
  '@angular/platform-browser': 'vendor/@angular/platform-browser/bundles/platform-browser.umd.js',
  '@angular/platform-browser-dynamic': 'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
  // '@angular/router': 'vendor/@angular/router/bundles/router.umd.js',
  'angular2-modal': 'vendor/angular2-modal',
  'angular2-modal/platform-browser': 'vendor/angular2-modal/platform-browser'
};

/** User packages configuration. */
const packages: any = {

  'rxjs': {main: 'index'},
  'demo': {defaultExtension: 'js'},

  'angular2-modal': {main: 'index.js', defaultExtension: 'js'},
  'angular2-modal/platform-browser': {main: 'index.js', defaultExtension: 'js'},
  'vendor/angular2-modal/plugins/bootstrap': {main: 'index.js', defaultExtension: 'js'},
  'vendor/angular2-modal/plugins/vex': {main: 'index.js', defaultExtension: 'js'},
  'vendor/angular2-modal/plugins/js-native': {main: 'index.js', defaultExtension: 'js'}
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/about',
  'app/home',
  'app/blog',
  'app/gallery',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
