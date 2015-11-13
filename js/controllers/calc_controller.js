let CalcController = function($scope){
  $scope.title= 'Calculators'
  $scope.answer= 0;
  $scope.ibuCalc = function(w, z, u, b){
    
    $scope.answer= (w*z*u)/(1.34*b) + $scope.answer; 
  }
  $scope.reset = function(){
    $scope.answer = 0;
  }
 $scope.mashCalc = function(a, b, c, d){
    let r = c/d;
    let x = a-b;
    let mashy = (.2/r)
    let uhh = mashy*x;
    $scope.mash = "Your Target Temp: "+(Number(a)+uhh)+"F";
    
  }
};

CalcController.$inject = ['$scope'];

export default CalcController;