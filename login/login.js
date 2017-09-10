app.controller("loginCtrl", function ($scope) {
    $scope.credentials = { email:'', password:''}

    $scope.doLogin = function(){
        var isUserFound = false;

        chrome.storage.sync.get('users', function(data) {
            angular.forEach(data.users, function(user, key){
                if(user.email === $scope.credentials.email && user.password === $scope.credentials.password){
                    $scope.go('/content');
                    isUserFound = true;
                }
            })
            if(!isUserFound) {
                alert("We didn't found this user.");
            }
        });


    }
});