app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login/login.html",
        controller : "loginCtrl"
    })
    .when("/registration", {
        templateUrl : "registration/registration.html",
        controller : "registrationCtrl"
    })
    .when("/content", {
        templateUrl : "content/content.html",
        controller : "contentCtrl"
    });
});