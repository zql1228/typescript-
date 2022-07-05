(function(){
    class Person{
        //public 修饰的属性可以被修改 可以在任意位置访问 包括子类和父类
        //private 私有属性 只能再类内部进行访问
        //protected 受保护的属性 只能在当前类和他的子类中访问（修改）
        private _name:string
        _age:number
        private gender:string
        constructor(name:string,age:number,gender:string){
            this._name=name
            this._age=age
            this.gender=gender
        }
        // getName(){
        //     return this._name
        // }
        // setName(value:string){
        //     this._name=value
        // }
        getAge(){
            return this._age
        }
        setAge(value:number){
            if(value>=0){
                this._age=value
            }
           
        }
        get name(){
            console.log('xxxx')
            return this._name
        }
        set name(name:string){
            this._name=name
        }
    }
    const p=new Person('李易峰',23,'男')
    console.log(p.name) 
    console.log(p.setAge(33))
    class A{
        protected age:number
        constructor(age:number){
            this.age=age
        }
    }
    class B extends A{
        test(){
            console.log(this.age)
        }
    }
    const b=new B(22)
    //console.log(b.age)
    class C {
        constructor(public name:string,public age:number){
        }
    }
    const c=new C('ccc',22)
    console.log(c)
})()