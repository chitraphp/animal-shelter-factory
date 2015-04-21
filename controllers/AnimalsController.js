//create first controller and populare some date to have animals to list
//calling the method on studentRoster app, creates a controller
//function holds the controller's logic
animalsShelter.controller('AnimalsCtrl', function AnimalsCtrl($scope, AnimalsFactory) {
    $scope.animals = AnimalsFactory.animals;
    $scope.AnimalsFactory = AnimalsFactory;
});
