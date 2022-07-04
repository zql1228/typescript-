"use strict";
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log('汪汪汪 ' + this.name);
    }
}
const dog = new Dog('旺财', 3);
const dog2 = new Dog('小黑', 4);
