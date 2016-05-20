'use strict';

var app = angular.module('app', ['ngRoute', 'ngWebSocket', 'ngCookies']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/auth', {
            templateUrl: '/auth.html',
            controller: 'authController'
        });
    $routeProvider
        .when('/test', {
            templateUrl: '/test.html',
            controller: 'testController'
        });
}]);

app.controller('authController', function($scope){
    $scope.submitAuth = function(){
        console.log('submit');
    }
});

app.directive('passwordValidator', function(){
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl){
            function passwordValidator(value){

            }
        }
    }
});



app.factory('comm', function($rootScope, $websocket, $cookies){
    var stream = $websocket('ws://localhost:9000');
    var collection = [];

    stream.onMessage(function(response){
        var data = JSON.parse(response.data);

        switch (data.action){
            case 'gotUserId': {
                $rootScope.$broadcast('gotUserId', data.userId);
                break;
            }
            case 'message': {
                collection.push(JSON.parse(response.data));
            }
        }
    });

    function sendToServer(dataObj, callback){
        if ()
    }

    return {
        messages: collection,
        send: function(user, msg){
            var data = JSON.stringify({
                user: user,
                text: msg
            });
            stream.send(data);
            console.log(data)
        }
    };


});



app.controller('mainController', function($rootScope){
    $rootScope.userEmail = null;
    $rootScope.userPassword = null;
    $rootScope.userToken = 2323;
});



app.controller('chatController', function($rootScope, $scope, comm){
    $scope.displayChat = false;
    $scope.messages = comm.messages;
    $scope.send = comm.send;
    $scope.userId = null;
    $scope.inputKeyDown = function(e){
        var chatMsg = e.target.value.trim();
        if (chatMsg && e.keyCode == 13) {
            $scope.send($scope.userId, chatMsg);
            e.target.value = '';
        }
    };

    $rootScope.$on('gotUserId', function (e, data) {
        $scope.userId = data;
    })

});

app.controller('testController', function($scope){
    $scope.var1 = 'A cup of coffee';
});













//
// // создать подключение SOCKET CONNECTION
// var sc = new WebSocket("ws://localhost:9000");
//
//
// // отправляем данные формы
// $('.chat__input').on('keyup', function(e){
//     if (e.keyCode == 13) {
//         console.log(8);
//         sc.send(this.value.trim());
//         this.value = null;
//     }
// });
//
// // принимаем сообщения
// sc.onmessage = function(m){
//     console.log(m.data);
//     renderMsg(JSON.parse(m.data));
// };
//
// function renderMsg(m){
//     var patt = `
//         <div class="message">
//             <div class="message__author">${ m.user }</div>
//             <div class="message__text">${ m.text }</div>
//             <div class="message__time">${ m.time }/div>
//         </div>
//     `;
//     $(patt).appendTo($('.chat__history'));
// }