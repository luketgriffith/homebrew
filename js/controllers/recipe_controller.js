import _ from 'underscore';

let RecipeController = function($scope, $http, PARSE){
  $scope.title= 'Recipes'
  $scope.nameList= [];

  let url = PARSE.URL + 'classes/recipes';
  $http.get(url, PARSE.CONFIG).then( (res)=>{
    
    let wat = res.data.results;
    
    wat.map( function(x){
      let y = {
        name: x.name.map(function(y){
          return y.name}),
        id: x.objectId
      }
      $scope.nameList.push(y);
      console.log($scope.nameList)
    })


  })
};

RecipeController.$inject = ['$scope', '$http', 'PARSE'];

export default RecipeController;