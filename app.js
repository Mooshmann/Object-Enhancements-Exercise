function createInstructor(firstName, lastName){
    return{
        firstName,
        lastName
    }
};
//
let favoriteNumber = 42
const instructor = {
    firstName : "Colt",
    [favoriteNumber] : "That is my favorite!"
};
//
const instructor1 = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says Bye!";
    }
};
//
function createAnimal(species, verb, noise){
    return{
        species,
        [verb](){
            return noise;
        }
    }
};
const d = createAnimal("dog", "bark", "Woooof!")
const s = createAnimal("sheep", "bleet", "BAAAAaaaa")