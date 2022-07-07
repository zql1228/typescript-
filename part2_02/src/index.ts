import './index.less'
//定义食物类food
class Food{
    //定义一个属性表示食物所对应的元素
    element:HTMLElement;
    constructor(){
        this.element=document.getElementById('food')!
    }
    //定义获取食物x轴的坐标方法
    get x(){
        return this.element.offsetLeft;
    }
      //定义获取食物y轴的坐标方法
    get y(){
        return this.element.offsetTop;
    }
    //修改食物位置的方法
    change(){
      let top=  Math.round(Math.random()*29)*10
      let left=  Math.round(Math.random()*29)*10
        this.element.style.left=left+'px'
        this.element.style.top=top+'px'
    }
}
// const food=new Food()
// console.log(food.x,food.y)
//定义表示积分盘的类
class ScorePanel{
    score=0;
    level=1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    //设置变量限制等级
    maxLevel:number;
    constructor(maxLevel:number=10){
        this.scoreEle=document.getElementById('score')!
        this.levelEle=document.getElementById('level')!
        this.maxLevel=maxLevel
    }
    addScore(){//分数自增
        if(this.score%10===0){
            this.scoreEle.innerHTML=++this.score+''
        }
        

    }
    //升级
    levelUP(){
        if(this.level<10){
            this.levelEle.innerHTML=++this.level+''
        }
        
    }

}