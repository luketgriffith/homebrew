import _ from 'underscore';

let RecipeController = function($scope, $http, PARSE, BeerService){
  $scope.title= 'Recipes'
  $scope.nameList= [];
  
  let url = PARSE.URL + 'classes/recipes';
  $http.get(url, PARSE.CONFIG).then( (res)=>{
    
    let wat = res.data.results;
    console.log(wat);
      wat.map( function(x){
        let y = x.name.name.name;
        let z = x.style;
        let id = x.objectId;
        let nameObj={
          name: y,
          style: z.style,

          id: id
        }
        
        $scope.nameList.push(nameObj)
          console.log($scope.nameList);
          }) 

      
    


  })

};

RecipeController.$inject = ['$scope', '$http', 'PARSE', 'BeerService'];

export default RecipeController;