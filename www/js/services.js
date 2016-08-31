angular
    .module('comicsApp')
    .factory('Comics', function($http) {
        var dataSource = 'https://aberdeenmosque.org/PrayerTimesApi/todaysprayertimes/json/data?callback=jsonpexp';

        return {
            getComics: function() {
                return $http.jsonp(dataSource);
            },
        }
    });