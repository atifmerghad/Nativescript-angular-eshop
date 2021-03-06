module.exports = {
  packages: {
    "@nativescript/angular": {
      entryPoints: {
        ".": {
          override: {
            main: "./index.js",
            typings: "./index.d.ts",
          },
          ignoreMissingDependencies: true,
        }
      },
      ignorableDeepImportMatchers: [
        /tns-core-modules\//,
        /@nativescript\/core\//,
        /@nativescript\/angular\//,
        /nativescript-angular\//,
        /nativescript-angular\/forms\//,
        /@angular\/core\//,
        /@angular\/forms\//,
      ]
    }
  }
};