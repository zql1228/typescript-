"use strict";
(function () {
    class Person {
        constructor(name, age, gender) {
            this._name = name;
            this._age = age;
            this.gender = gender;
        }
        // getName(){
        //     return this._name
        // }
        // setName(value:string){
        //     this._name=value
        // }
        getAge() {
            return this._age;
        }
        setAge(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
        get name() {
            console.log('xxxx');
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
    }
    const p = new Person('李易峰', 23, '男');
    console.log(p.name);
    console.log(p.setAge(33));
    class A {
        constructor(age) {
            this.age = age;
        }
    }
    class B extends A {
        test() {
            console.log(this.age);
        }
    }
    const b = new B(22);
    //console.log(b.age)
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('ccc', 22);
    console.log(c);
})();
