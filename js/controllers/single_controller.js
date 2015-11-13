import $ from 'jquery';
let SingleController = function($scope, $stateParams, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/recipes/' + $stateParams.id;

  $http.get(url, PARSE.CONFIG).then( (res) => {

    $scope.recipe = res.data;
    
  $scope.delete= function(){
    $http.delete(url, PARSE.CONFIG).then((res)=>{
      console.log(res);
    })
  }      
});
}
SingleController.$inject = ['$scope', '$stateParams', '$http', 'PARSE'];

export default SingleController;