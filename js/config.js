let config = function ($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'

    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      controller: 'RecipeController',
      templateUrl: 'templates/recipes.tpl.html'
    })
    .state('root.build', {
      url: '/build',
      controller: 'BuildController',
      templateUrl: 'templates/build.tpl.html'
    })


};

config.$inject = ['$stateProvider', '$urlRouterProvider'];
 
export default config;