let EditController = function($scope, $http, PARSE, $stateParams){
  $scope.title= 'Edit'
  
  let url = PARSE.URL + 'classes/recipes/' + $stateParams.id;
  $http.get(url, PARSE.CONFIG).then( (res) => {
    $scope.recipe = res.data;
    
  })
  $scope.update = function(recipe){
    console.log(recipe);
    $http.put(url, recipe, PARSE.CONFIG).then((res)=>{
      console.log(res);
    })
  }
 
};

EditController.$inject = ['$scope', '$http', 'PARSE', '$stateParams'];

export default EditController;