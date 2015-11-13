let EditController = function($scope, $http, PARSE, $stateParams, $state){
  $scope.title= 'Edit'
  
  let url = PARSE.URL + 'classes/recipes/' + $stateParams.id;
  $http.get(url, PARSE.CONFIG).then( (res) => {
    $scope.recipe = res.data;
    
  })
  $scope.update = function(recipe){
    console.log(recipe);
    $http.put(url, recipe, PARSE.CONFIG).then((res)=>{
      $state.go('root.about');
    })
  }
 
};

EditController.$inject = ['$scope', '$http', 'PARSE', '$stateParams', '$state'];

export default EditController;