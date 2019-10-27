var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/rules.html',
    controller  : 'RulesController'
  })

  .when('/chat', {
    templateUrl : 'pages/chat.html',
    controller  : 'ChatController'
  })

  .when('/map', {
    templateUrl : 'pages/map.html',
    controller  : 'MapController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('RulesController', function($scope) {
  $scope.message = 'Если вы видите этот текст,то я поставил Русскую кодировку';
});

app.controller('ChatController', function($scope) {
  $scope.message = 'А ещё я сегодня узнал что TS-не только формат видеофайлов,но и typescript';
});

app.controller('MapController', function($scope) {
  $scope.message = 'И к сожалению,не смотря на схожие названия его синтаксис отличается,не то что бы я сильно продвинулся в изучении JS,но...обидно';
});
