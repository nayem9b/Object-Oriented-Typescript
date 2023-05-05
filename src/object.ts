class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`this ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("German Shepard", "dog", "Ghew Ghew");
const cat = new Animal("Persian", "cat", "Meow Meow");
dog.makeSound();
cat.makeSound();
