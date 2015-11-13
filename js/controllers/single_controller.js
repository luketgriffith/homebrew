import $ from 'jquery';
let SingleController = function($scope, $stateParams, $state, $http, PARSE, sweet) {
  
  let url = PARSE.URL + 'classes/recipes/' + $stateParams.id;

  $http.get(url, PARSE.CONFIG).then( (res) => {
    
    $scope.recipe = res.data;

    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

      $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
      };

      $scope.ratingStates = [
        {stateOn: 'fa-check-circle', stateOff: 'fa-check-circle-o'},
        {stateOn: 'fa-star', stateOff: 'fa-start-o'},
        {stateOn: 'fa-heart', stateOff: 'fa-ban'},
        {stateOn: 'fa-heart'},
        {stateOff: 'fa-power-off'}
      ];

      console.log($scope.x);
    $scope.basic = function() {
        sweet.show({
          title:'Are you sure?',
          text: 'It will be gone forever.',
          showCancelButton: true,
          confirmButtonText: "I hate it make it die",
      },
      function(){
        $http.delete(url, PARSE.CONFIG).then((res)=>{
          $state.go('root.about');
      });
    })  
  };


       
});
}
SingleController.$inject = ['$scope', '$stateParams', '$state', '$http', 'PARSE', 'sweet'];

export default SingleController;