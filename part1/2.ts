let a1:object;
//object 一般不常用
let a2:{name:string,age?:number} //age属性可选的
a2={name:'json',age:18}
let a4:{name:string,[proname:string]:any}//[proname:string]:any表示任意类型属性
a4={name:'a4',age:20,gender:'女'}
let a5:(a:number,b:number)=>number;//定义函数结构 （形参：类型，形参：类型）=>返回类型
a5=function(n1,n2,n3):number{
    return n1+n2
}
//数组
let a6:string[]
let a7:Array<string>
// a7:Array<string> Array<number>
a7=['heool','123']

//元组 长度固定
let a8:[string,string]=['hello','world']

//enum 枚举

enum Gender{
    Male,
    Female
}
let a9:{name:string,gender:Gender}
a9={
    name:'abc',
    gender:Gender.Male
}
console.log(a9.gender==Gender.Male)
 let a10:{name:string} & {age:number} //

 //类型别名
 type myType=1|2|3|4|5
 let a11:myType
