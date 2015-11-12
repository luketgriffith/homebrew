let BuildService = function($http, PARSE, $stateParams){
    let url = PARSE.URL + 'classes/recipes';

    this.buildBeer = function(url, x, PARSE){
      return $http.post(url, x, PARSE.CONFIG)
    }

 
};

BuildService.$inject = ['$http', 'PARSE', '$stateParams'];

export default BuildService;