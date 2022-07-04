"use strict";
class Person {
    constructor() {
        this.name = 'lili';
        this.age = 33;
    }
    sayHello() {
        console.log('hello 大家好');
    }
}
//在属性前使用static关键字可以定义类属性,也叫静态属性
Person.gender = "男";
const obj = new Person();
console.log(Person.gender);
obj.sayHello();
