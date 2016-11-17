'use strict';

const angular = require('angular');
const yepNope = require('./yep-nope.directive');

angular.module('dashboard').directive('yepNope', yepNope);
