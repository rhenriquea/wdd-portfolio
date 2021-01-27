```js
class Person {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = new Person(5566, "John", "Doe");
const person2 = new Person(7788, "Walter", "White");

console.log(person1.id); // Will print 5566
console.log(person2.id); // Will print 7788
console.log(person1.fullName()); // Will print 'John Doe'
console.log(person2.fullName()); // Will print 'Walter White'
```
