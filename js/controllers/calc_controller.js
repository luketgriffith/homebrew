let CalcController = function($scope){
  $scope.title= 'Calculators'
  $scope.answer= 0;
  $scope.ibuCalc = function(w, a, u, b){
    
    $scope.answer= (w*a*u)/(1.34*b) + $scope.answer; 
  }
  $scope.reset = function(){
    $scope.answer = 0;
  }
 $scope.mashCalc = function(a, b, c, d){
    $scope.mash= ((.2/(c/d))*(a-b)) + a;
    console.log(a, b, c, d);
  }
};

CalcController.$inject = ['$scope'];

export default CalcController;