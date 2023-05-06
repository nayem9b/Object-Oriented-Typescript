class Counter {
  static counter: number = 0;

  static increment(): number {
    return (Counter.counter = Counter.counter + 1);
  }
  static decrement(): number {
    return (Counter.counter = Counter.counter - 1);
  }
}
const instance1 = Counter.increment();
const instance2 = Counter.increment();
console.log(instance1, instance2);
