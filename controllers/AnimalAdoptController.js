animalsShelter.controller('AnimalAdoptCtrl',function AnimalAdoptCtrl($scope, AnimalsFactory) {
    $scope.animals = AnimalsFactory.animals;
        $scope.addAnimalToAdopt = function(animal) {
            animal.adopt = true;

        };
});
