let BuildController = function($scope, $http, PARSE){
  $scope.title= 'Build'
  let url = PARSE.URL + 'classes/recipes';
  
  $scope.wholeRecipe=[];

  //add title of beer function
  $scope.beerName=[];


  function Name (obj){
    this.name= obj.name
  }
  $scope.addTitle = function (name) {
    let x = new Name(name)
    return x;
  }

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
  $scope.saveRecipe = function(){

    
    let recipe= {
      name: x.name,
      grains: $scope.grainList,
      hops: $scope.hopList,
      yeast: $scope.yeastList
      
    }
    console.log(recipe);
    $http.post(url, recipe, PARSE.CONFIG).then( (res)=>{
      console.log(res);
    })

  };
};

 
BuildController.$inject = ['$scope', '$http', 'PARSE'];

export default BuildController;