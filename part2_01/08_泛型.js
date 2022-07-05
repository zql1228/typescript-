"use strict";
// function fn(a:number):number{
//     return a+1
// }
//在定义类或函数时，如果类型不确定 可以使用泛型
function fn(a) {
    return a;
}
let l1 = fn(10); //不指定 ts自动判断
let l2 = fn('aaa'); //指定泛型
function fn2(a, b) {
    return a;
}
function fn3(a) {
    return a.name.length;
}
class Myclass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new Myclass('李易峰');
