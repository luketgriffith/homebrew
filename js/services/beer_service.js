let BeerService = function($http, PARSE, $stateParams){
    let url = PARSE.URL + 'classes/recipes/' + $stateParams.id;
    this.getBeer = function(){
      return $http({
        url: url,
        headers: PARSE.CONFIG.headers,
        method: 'GET',
        cache: true
      })
    }

 
};

BeerService.$inject = ['$http', 'PARSE', '$stateParams'];

export default BeerService;