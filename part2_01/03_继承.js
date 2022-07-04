"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('叫叫叫');
        }
    }
    class Dog extends Animal {
        //Animal被称为父类
        run() {
            console.log(`${this.name}在跑`);
        }
        sayHello() {
            console.log('汪汪汪');
        }
    }
    class Cat extends Animal {
    }
    const dog = new Dog('小黄', 2);
    const cat = new Cat('小白', 3);
    dog.run();
    dog.sayHello();
})();
