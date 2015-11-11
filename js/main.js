import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import angular from "angular";
import 'angular-ui-router';
import configFunction from './config';
import HomeController from './controllers/home_controller';
import RecipeController from './controllers/recipe_controller';
import BuildController from './controllers/build_controller';
import SingleController from './controllers/single_controller';



angular
  .module('app', ['ui.router'])
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