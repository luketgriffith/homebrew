import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import angular from "angular";
import 'angular-ui-router';
import 'angular-foundation';
import 'sweetalert';
import 'angular-h-sweetalert';
import configFunction from './config';
import HomeController from './controllers/home_controller';
import RecipeController from './controllers/recipe_controller';
import BuildController from './controllers/build_controller';
import SingleController from './controllers/single_controller';
import BeerService from './services/beer_service';
import RecipeService from './services/recipe_service';
import BuildService from './services/build_service';
import CalcController from './controllers/calc_controller';
import EditController from './controllers/edit_controller';
angular
  .module('app', ['ui.router', 'mm.foundation', 'hSweetAlert'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG:{
      headers: {
        'X-Parse-Application-Id': '8jLPkb2vdiG0qiCW0DhbJZvRMPSUU6ILdDfXm74F',
        'X-Parse-REST-API-Key': '0ZfhWw9HzAVBKwwLqWLUNxDSiZwgd56GWd92WHSU'
      }
    }
  })
  .config(configFunction)
  .controller('HomeController', HomeController)
  .controller('RecipeController', RecipeController)
  .controller('BuildController', BuildController)
  .controller('SingleController', SingleController)
  .controller('CalcController', CalcController)
  .controller('EditController', EditController)
  .service('BeerService', BeerService)
  .service('RecipeService', RecipeService)
  .service('BuildService', BuildService)