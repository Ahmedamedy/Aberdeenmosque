angular
    .module('comicsApp')
    .controller('ComicsController', function(Comics, $scope, $ionicLoading) {
        var _this = this;

        $scope.$on('$ionicView.enter', function(){
            $ionicLoading.show();

            Comics.getComics().then(function(response){
                _this.comics = response.data;
            }).catch(function(response){
                //request was not successful
                //handle the error
            }).finally(function(){
                $ionicLoading.hide();
            });
        });
    })
;