import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/ovarunendra/angular1-webpack';
  }
}

const MODULE_NAME = 'angularfireSlackApp';

angular.module(MODULE_NAME, [uiRouter])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        template: require('./home/home.html')
      })
      .state('login', {
        url: '/login',
        template: require('./auth/login.html')
      })
      .state('register', {
        url: '/register',
        template: require('./auth/register.html')
      })

    $urlRouterProvider.otherwise('/');
  })
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;