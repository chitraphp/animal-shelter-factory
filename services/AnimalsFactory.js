animalsShelter.factory('AnimalsFactory', function AnimalsFactory() {
    var factory = {};
    factory.animals = [];

    factory.addAnimal = function() {
        var animal = { type: factory.animalType, adopt:false, name:factory.animalName };
        factory.animals.push(animal);
        factory.animalType = null;
        factory.animalName = null;
    };
    factory.deleteAnimal = function(animal) {
        var index = factory.animals.indexOf(animal);
        factory.animals.splice(index,1);
    };

    return factory;

});
