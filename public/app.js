// Require CSS
require('plugins/wazuh/less/main.less');
require('plugins/wazuh/less/ui_framework.less');

// Set up Wazuh app
var app = require('ui/modules').get('app/wazuh', ['ngCookies','ngMaterial', 'infinite-scroll'])
  .config(['$compileProvider', function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|data|blob):/);
  }])
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.useApplyAsync(true);
  }]);

// Require services and factories
require('plugins/wazuh/objects/theming.js');
require('plugins/wazuh/objects/apiReq.js');
require('plugins/wazuh/objects/genericReq.js');
require('plugins/wazuh/objects/dataFactory.js');
require('plugins/wazuh/objects/sharedProperties.js');
require('plugins/wazuh/objects/appState.js');
require('plugins/wazuh/objects/tabProvider.js');
require('plugins/wazuh/objects/testConnection.js');
require('plugins/wazuh/objects/errlog.js');

// Require directives
require('plugins/wazuh/objects/autoSizeContainer.js');

// Set up routes and views
require('plugins/wazuh/objects/routes.js');

// Require Kibana integrations
require('plugins/wazuh/directives/kibanaExternalImports.js');
require('plugins/wazuh/directives/kibanaVisualizationDirective.js');
require('plugins/wazuh/directives/kibanaDiscoverDirective.js');
require('plugins/wazuh/directives/kibanaSearchbarDirective.js');

// Require controllers

// Overview
require('plugins/wazuh/controllers/overview.js');

// Dashboard
require('plugins/wazuh/controllers/dashboard.js');

// Manager
require('plugins/wazuh/controllers/manager.js');
require('plugins/wazuh/controllers/ruleset.js');
require('plugins/wazuh/controllers/osseclog.js');

// Agents
require('plugins/wazuh/controllers/agents.js');
require('plugins/wazuh/controllers/agentsOverview.js');
require('plugins/wazuh/controllers/agentsPreview.js');
require('plugins/wazuh/controllers/agentsFim.js');
require('plugins/wazuh/controllers/agentsPm.js');
require('plugins/wazuh/controllers/agentsOscap.js');
require('plugins/wazuh/controllers/agentsAudit.js');
require('plugins/wazuh/controllers/agentsPci.js');

// Settings
require('plugins/wazuh/controllers/settings.js');
require('plugins/wazuh/controllers/testController.js');

//Bootstrap and font awesome
require('plugins/wazuh/../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('plugins/wazuh/../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('plugins/wazuh/utils/fontawesome/css/font-awesome.min.css');
require('plugins/wazuh/utils/infinite_scroll/infinite-scroll.js');
require('../../../ui_framework/dist/ui_framework.css');

//Material
require('plugins/wazuh/../node_modules/angular-material/angular-material.css');
require('plugins/wazuh/../node_modules/angular-aria/angular-aria.js');
require('plugins/wazuh/../node_modules/angular-animate/angular-animate.js');
require('plugins/wazuh/../node_modules/angular-material/angular-material.js');

//Cookies
require('plugins/wazuh/../node_modules/angular-cookies/angular-cookies.min.js');
