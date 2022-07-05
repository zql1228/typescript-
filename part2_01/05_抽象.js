"use strict";
(function () {
    //以abstract 开头的类为抽象类，不能用来创建对象
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        sayHello() {
            console.log('汪汪');
        }
    }
})();
