'use strict'

var ViewActor = '_view/byActor';
var c = console; 
c.log("movie");

angular.module('movieApp', ['ngRoute'])

	.config(function($routeProvider) {
	    $routeProvider
	        .when('/home', {
	            templateUrl: 'assets/views/home.html',
	            controller: 'homeCtrl'
	        })
	           .otherwise({
                redirectTo: '/home'
            });
	     
	})
	
	.controller('homeCtrl', function($scope, actorSrv) {
		;
		$scope.Actor = "jim Carrey";
		$scope.movieButton = function(){
			var actorVal =  $('#ActorText').val();
			/*$scope.acteur = actorVal;
			c.log(actorVal);*/
			
			actorSrv.getActorList(actorVal).then(function(data){
				c.log("test");
				
				$scope.acteur = data;
	
				
			 	
			})
			
			}
		

    })
   
    .service('actorSrv', function($http, $q) {
		this.getActorList = function(actorVal) {
    		var q = $q.defer();
    		var url = 'http://theimdbapi.org/api/find/person?name=' + encodeURIComponent(actorVal) + '&format=json';
			
    		$http.get(url)
    			.then(function(data){
    				q.resolve(data);
    			}, function error(err) {
    				q.reject(err);
    			});
    			
    			return q.promise;
    		};

    })

		


    
