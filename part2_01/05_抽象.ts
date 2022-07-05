(function(){
    //以abstract 开头的类为抽象类，不能用来创建对象
   abstract class Animal{
        name:string
        constructor(name:string){
            this.name=name
        }
        //抽象方法
        abstract  sayHello():void
    }
    class Dog extends Animal{
        age:number
        constructor(name:string,age:number){
            super(name)
            this.age=age

        }
        sayHello(): void {
            console.log('汪汪')
        }
    }
})()