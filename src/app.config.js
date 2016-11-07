/* @ngInject */
export default function appConfig($urlRouterProvider, $locationProvider, $logProvider, $compileProvider, config) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $logProvider.debugEnabled(config.debug);
  $compileProvider.debugInfoEnabled(config.debug);
}
