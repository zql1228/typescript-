class Snake{
    head:HTMLElement;//蛇头
    bodies:HTMLCollection;
    element:HTMLElement;
    constructor(){
        this.head=document.querySelector('#snake>div') as HTMLElement;
        this.bodies=document.getElementById('snake')!.getElementsByTagName('div')
        this.element=document.getElementById('snake')!
    }
    //获取蛇的坐标
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    set X(value:number){
        if(this.X===value){return}
        this.head.style.left=value+'px'
        if(value<0|| value>290){
            //蛇撞墙了
            throw new Error('蛇撞墙了')
        }
    }
    set Y(value:number){
        if(this.Y===value){return}//如果新值与旧值相同，直接返回
        this.head.style.top=value+'px'
        //x值的合法范围0-290
        if(value<0|| value>290){
            //蛇撞墙了
            throw new Error('蛇撞墙了')
        }
    }
    //蛇增加身体的方法
    addBody(){
//向element中添加div
this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
}
export default Snake