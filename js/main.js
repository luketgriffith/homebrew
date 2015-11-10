import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import angular from "angular";
import 'angular-ui-router';
import configFunction from './config';
import HomeController from './controllers/home_controller';
import RecipeController from './controllers/recipe_controller';
import BuildController from './controllers/build_controller';



angular
  .module('app', ['ui.router'])
  .config(configFunction)
  .controller('HomeController', HomeController)
  .controller('RecipeController', RecipeController)
  .controller('BuildController', BuildController)