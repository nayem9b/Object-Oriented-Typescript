// Key of guard
type Alphaneumeric = number | string;

function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}
add("1", "2");
add(1, 2);

// In gurad
type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUser | AdminUser) {
  if ("role" in user) {
    //!Key in here
    return "I'm an Admin User";
  } else {
    return "I'm a normal user";
  }
}

const normalUser1: NormalUser = { name: "Mr Reshob" };
const adminUser1: AdminUser = { name: "Mr Reshob", role: "admin" };
console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

//! Instance of Guard
class Animals {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log("I'm making sound");
  }
}
class Dog extends Animals {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log("I'm barking");
  }
}
class Cat extends Animals {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeCall() {
    console.log("I'm meowing");
  }
}

function getAnimal(obj: Animals) {
  if (obj instanceof Dog) {
    obj.makeBark();
  } else if (obj instanceof Cat) {
    obj.makeCall();
  } else {
    obj.makeSound();
  }
}

const animal1 = new Dog("German Bhai", "dog"); //!Dog er instance
const animal2 = new Cat("Persian Bhai", "cat");

getAnimal(animal2);
