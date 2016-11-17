'use strict';

const angular = require('angular');
const githubStatus = require('./github-status.service');

angular.module('dashboard').service('GithubStatusService', githubStatus);
