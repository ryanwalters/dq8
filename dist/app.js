"use strict";angular.module("Dragon",["ui.router","Dragon.character"]).config(["$stateProvider","$locationProvider",function(r,a){a.html5Mode(!0),r.state("home",{controller:"DragonCtrl",templateUrl:"/app/app.html",url:"/"})}]),angular.module("Dragon.character",[]).config(["$stateProvider",function(r){r.state("character",{controller:"CharacterCtrl",templateUrl:"/app/character/character.html",url:"/character"})}]),angular.module("Dragon").controller("DragonCtrl",["$scope",function(r){r.testing="Hello there!"}]),angular.module("Dragon.character").controller("CharacterCtrl",["$scope",function(r){r.characters="Characters will go here",console.log("character loading")}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuanMiLCJjaGFyYWN0ZXIvX2NoYXJhY3Rlci5qcyIsImFwcC1jb250cm9sbGVyLmpzIiwiY2hhcmFjdGVyL2NoYXJhY3Rlci1jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25maWciLCIkc3RhdGVQcm92aWRlciIsIiRsb2NhdGlvblByb3ZpZGVyIiwiaHRtbDVNb2RlIiwic3RhdGUiLCJjb250cm9sbGVyIiwidGVtcGxhdGVVcmwiLCJ1cmwiLCIkc2NvcGUiLCJ0ZXN0aW5nIiwiY2hhcmFjdGVycyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBLFlBRUFBLFNBQUFDLE9BQUEsVUFHQSxZQUdBLHFCQUdBQyxRQUFBLGlCQUFBLG9CQUFBLFNBQUFDLEVBQUFDLEdBRUFBLEVBQUFDLFdBQUEsR0FFQUYsRUFDQUcsTUFBQSxRQUNBQyxXQUFBLGFBQ0FDLFlBQUEsZ0JBQ0FDLElBQUEsU0NsQkFULFFBQUFDLE9BQUEsdUJBQ0FDLFFBQUEsaUJBQUEsU0FBQUMsR0FFQUEsRUFDQUcsTUFBQSxhQUNBQyxXQUFBLGdCQUNBQyxZQUFBLGdDQUNBQyxJQUFBLGtCQ1BBVCxRQUFBQyxPQUFBLFVBQ0FNLFdBQUEsY0FBQSxTQUFBLFNBQUFHLEdBQ0FBLEVBQUFDLFFBQUEsa0JDRkFYLFFBQUFDLE9BQUEsb0JBQ0FNLFdBQUEsaUJBQUEsU0FBQSxTQUFBRyxHQUNBQSxFQUFBRSxXQUFBLDBCQUNBQyxRQUFBQyxJQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ0RyYWdvbicsIFtcblxuICAgIC8vIEFwcGxpY2F0aW9uIGRlcGVuZGVuY2llc1xuICAgICd1aS5yb3V0ZXInLFxuXG4gICAgLy8gTW9kdWxlc1xuICAgICdEcmFnb24uY2hhcmFjdGVyJ1xuXG5dKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckbG9jYXRpb25Qcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcblxuICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG5cbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnRHJhZ29uQ3RybCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL2FwcC5odG1sJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcvJ1xuICAgICAgICAgICAgfSk7XG4gICAgfV0pOyIsIlxuYW5ndWxhci5tb2R1bGUoJ0RyYWdvbi5jaGFyYWN0ZXInLCBbXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcblxuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdjaGFyYWN0ZXInLCB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0NoYXJhY3RlckN0cmwnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9jaGFyYWN0ZXIvY2hhcmFjdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgIHVybDogJy9jaGFyYWN0ZXInXG4gICAgICAgICAgICB9KTtcbiAgICB9XSk7IiwiXG5hbmd1bGFyLm1vZHVsZSgnRHJhZ29uJylcbiAgICAuY29udHJvbGxlcignRHJhZ29uQ3RybCcsIFsnJHNjb3BlJywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICAgICAkc2NvcGUudGVzdGluZyA9ICdIZWxsbyB0aGVyZSEnO1xuICAgIH1dKTsiLCJcbmFuZ3VsYXIubW9kdWxlKCdEcmFnb24uY2hhcmFjdGVyJylcbiAgICAuY29udHJvbGxlcignQ2hhcmFjdGVyQ3RybCcsIFsnJHNjb3BlJywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICAgICAkc2NvcGUuY2hhcmFjdGVycyA9ICdDaGFyYWN0ZXJzIHdpbGwgZ28gaGVyZSc7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGFyYWN0ZXIgbG9hZGluZycpO1xuICAgIH1dKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=