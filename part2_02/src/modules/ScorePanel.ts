//定义表示积分盘的类
class ScorePanel{
    score=0;
    level=1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    //设置变量限制等级
    maxLevel:number;
    //设置一个变量表示多少分升级
    upScore:number;
    constructor(maxLevel:number=10,upScore:number=10){
        this.scoreEle=document.getElementById('score')!
        this.levelEle=document.getElementById('level')!
        this.maxLevel=maxLevel
        this.upScore=upScore
    }
    addScore(){//分数自增
        if(this.score%this.upScore===0){
            this.scoreEle.innerHTML=++this.score+''
        }
        

    }
    //升级
    levelUP(){
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML=++this.level+''
        }
        
    }
}
export default ScorePanel