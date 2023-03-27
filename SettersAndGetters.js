class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }


  set firstName(fName) {
    this._firstName = fName;
  }

  get firstName() {
    return this._firstName
  }

  set lastName(lName) {
    this._lastName = lName;
  }

  get lastName() {
    return this._lastName
  }

  set age(newVal) {
    if (newVal < 18) {
      this._age = 1;
    }
    else {
      this._age = newVal;
    }
  }

  get age() {
    return this._age;
  }


  get fullName() {
    return this._firstName + " " + this._lastName
  }
}


const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);