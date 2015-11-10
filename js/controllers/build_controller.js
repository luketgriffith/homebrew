let BuildController = function($scope){
  $scope.title= 'Build'
  //adding grain function
  $scope.grainList=[];

  function Grain (obj){
      this.grain = obj.grain;
      this.weight = obj.weight;
  }  

  $scope.addGrain = function (ing) {
    let x = new Grain(ing);
    $scope.grainList.push(x);
    $scope.ing.grain= '';
    $scope.ing.weight= '';
  }

  //adding hops function
  $scope.hopList=[];

  function Hop (obj){
    this.name = obj.name;
    this.weight = obj.weight;
    this.acid = obj.acid;
    this.boil = obj.boil;
  }   
  $scope.addHops = function(hop){
    let x = new Hop(hop);
    $scope.hopList.push(x);
    $scope.hop.name= '';
    $scope.hop.weight= '';
    $scope.hop.acid= '';
    $scope.hop.boil= '';
  }
  //adding yeast function
  $scope.yeastList=[];

  function Yeast (obj){
    this.name = obj.name;
  }
  $scope.addYeast = function(yeast){
    let x = new Yeast(yeast);
    $scope.yeastList.push(x);
    $scope.yeast.name= '';
  }
};

 
BuildController.$inject = ['$scope'];

export default BuildController;