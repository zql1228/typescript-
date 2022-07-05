// function fn(a:number):number{
//     return a+1
// }
//在定义类或函数时，如果类型不确定 可以使用泛型
function fn<T>(a:T): T{
    return a

}
let l1= fn(10)//不指定 ts自动判断
let l2=fn<string>('aaa')//指定泛型
function fn2<T,K>(a:T,b:K):T{
    return a
}
interface Inter{
    name:String
}
function fn3<T extends Inter>(a:T):number{
return a.name.length
}
class Myclass<T> {
name:T;
constructor(name:T){
this.name=name
}

}
const mc=new Myclass<string>('李易峰')