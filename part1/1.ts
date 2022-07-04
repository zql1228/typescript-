function sum(a:number,b:number):number{
    return a+b
}
//字面量类型
let a:10;
let b:"male"|"female";
let c:boolean|string;
c="hello"
//any 任意类型
let d:any;
// let d;//隐式any 更不建议
d=10;
d="hello"
d=false
//不建议使用any类型

//变量类型未知
let e:unknown;
e=10;
e='hello'
e=false;
let s:string;
s=d//d的类型为any,可以赋值给任意变量 影响其他的变量
let s=e// unknown类型不能直接赋值给其他变量
if(typeof e==='string'){//可以这样赋值
    s=e
}
s=e as string //或者使用类型断言
s=<string>e //或者这种写法
function fn():void{//void表示函数没有返回值
    return 123 //报错

}
function fn2():never{ //never永远不会返回结果
    throw new Error('报错了！')
}

