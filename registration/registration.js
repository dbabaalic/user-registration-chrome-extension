app.controller("registrationCtrl", function ($scope) {

    $scope.doRegister = function(){
        var users = [];
        chrome.storage.sync.get('users', function(data) {
            if(data.users){
                users = data.users;
            }
            users.push($scope.user);
            chrome.storage.sync.set({users: users}, function() {
                $scope.go('/content');
            });
        });
    }

});