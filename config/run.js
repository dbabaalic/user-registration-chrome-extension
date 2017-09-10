app.run(function($rootScope, $location) {
    $rootScope.go = function (path) {
        $location.path(path)
    }
})