app.controller('MainController', ['$scope', function($scope) {

    $scope.exercises = [{
        icon: 'img/pushup.jpg',
        name: 'Pushups',
        count: 20
    }, {
        icon: 'img/squat.jpg',
        name: 'Squats',
        count: 15
    }, {
        icon: 'img/pullup.jpg',
        name: 'Pullups',
        count: 10
    }, {
        icon: 'img/row.jpg',
        name: 'Rows',
        count: 10
    }, {
        icon: 'img/lunge.jpg',
        name: 'Lunges',
        count: 10
    }, {
        icon: 'img/stepup.jpg',
        name: 'Step Ups',
        count: 10
    }, {
        icon: 'img/situp.jpg',
        name: 'Sit Ups',
        count: 15
    }];


    // These two functions are bound to $scope, meaning that we can call them in the view like plusOne() or minusOne().
    $scope.plusOne = function(index) {

        // This will access the above $scope.exercises array of objects. index is passed in from the view. In this project, it is set equal it $index, which is a ng-repeat loop counter. Therefore, the line below will select the correct individual exercise, find its count property, and up it by one.
        $scope.exercises[index].count += 1;
    };

    $scope.minusOne = function(index) {
        $scope.exercises[index].count -= 1;
    };

}]);
