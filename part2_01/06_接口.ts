(function(){ 
    type myType={
    name:string,
    age:number
}
const obj:myType={
    name:'sss',
    
    age:77
}
//接口定义一个类结构interface 接口名
//接口中所有的属性都不能有实际的值
//接口中所有的方法都是抽象的方法
interface userinfo{
    name:string,
    age:number,
    gender:string,   
}
interface userinfo{
    password:string  
}
const obj2:userinfo={
    name:'string',
    age:11,
    gender:'女',
    password:'123456'
}
/*定义类时可以实现一个接口*/ 
interface Dog{
    name:string
    sayHello():void
}
class Myclass implements Dog{
    name:string
    constructor(name:string){
        this.name=name
    }
    sayHello(): void {
        console.log('dog')
    }
}
})()