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
    .state('root.single',{
      url: '/single/:id',
      controller: 'SingleController',
      templateUrl: 'templates/single.tpl.html'
    })
    .state('root.calcs',{
      url: '/calcs',
      controller: 'CalcController',
      templateUrl: 'templates/calcs.tpl.html'
    })
    .state('root.edit',{
      url: '/edit/:id',
      controller: 'EditController',
      templateUrl: 'templates/edit.tpl.html'
    })


};

config.$inject = ['$stateProvider', '$urlRouterProvider'];
 
export default config;