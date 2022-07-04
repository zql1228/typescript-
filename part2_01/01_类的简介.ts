class Person{
 
    //在属性前使用static关键字可以定义类属性,也叫静态属性
    static readonly gender:string="男";
    name='lili';
    age=33;
    sayHello(){
        console.log('hello 大家好')
    }
}
const obj=new Person()
console.log(Person.gender)
obj.sayHello()