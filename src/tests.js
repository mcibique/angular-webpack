import 'angular';
import 'angular-mocks/angular-mocks';

let testsContext = require.context('./', true, /.spec.js$/);
testsContext.keys().forEach(testsContext);
