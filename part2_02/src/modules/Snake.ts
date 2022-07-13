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
        this.moveBody()
        this.checkHeadBody()
        if(value<0|| value>290){
            //蛇撞墙了
            throw new Error('蛇撞墙了')
        }
        //修改x时，蛇在向右走时，不能向左走，既不能掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft== value){
            //水平方向掉头了
            console.log('水平方向掉头了')
            if(value>this.X){ //新值value大于旧值 蛇在向右走
                value=this.X-10
            }else{//修正方向 蛇在往反方向，也就是向左走，让他还是向有走
                value=this.X+10
            }
        }
    }
    set Y(value:number){
        if(this.Y===value){return}//如果新值与旧值相同，直接返回
        this.head.style.top=value+'px'
        this.moveBody()
        this.checkHeadBody()
        //x值的合法范围0-290
        if(value<0|| value>290){
            //蛇撞墙了
            throw new Error('蛇撞墙了')
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop== value){
            //垂直方向掉头了
            console.log('水平方向掉头了')
            if(value>this.Y){ //新值value大于旧值 蛇在向下走
                value=this.X-10
            }else{// 蛇在向上方走，让他还是向下走 纠正方向
                value=this.X+10
            }
        }
    }
    //蛇增加身体的方法
    addBody(){
//向element中添加div
this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
    //添加蛇移动身体的方法
    moveBody(){
      //  console.log(this.bodies)
        // 将后边的身体设置为前边身体的位置
        for(let i=this.bodies.length-1;i>0;i--){
            //获取前边身体的位置
            let x=(this.bodies[i-1] as HTMLElement).offsetLeft;  
            let y=(this.bodies[i-1] as HTMLElement).offsetTop
            // //将这个值设置到当前身体
            // (this.bodies[i] as HTMLElement).style.left=x+'px'
            // (this.bodies[i] as HTMLElement).style.right=y+'px'
        }
    }
    checkHeadBody(){//检查蛇头是否和身体坐标重叠，就是蛇头是否撞到自己了
        for(let i=1;i<this.bodies.length;i++){
            let bd=this.bodies[i] as HTMLElement
            if(this.X===bd.offsetTop){
                throw new Error('撞到自己了')
            }
        }
    }
}
export default Snake