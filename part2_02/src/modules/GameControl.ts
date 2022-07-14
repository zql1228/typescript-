import Snake  from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
class GameControl{
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    //创建一个属性存储蛇的移动方向（按键按下的方向）
    direction:string='';
    isLive:Boolean=true
    constructor(){
        this.snake=new Snake()
        this.food=new Food()
        this.scorePanel=new ScorePanel()
        this.init()
    }
    //游戏初始化
    init(){
        //绑定键盘事件
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        this.run()
    }
    keydownHandler(event:KeyboardEvent){
        // if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key)){
            this.direction=event.key
        // }
       
    }
    //创建一个蛇移动的方法
    run(){
        //根据按键方向改变蛇的位置
        // switch(this.direction)
        let x=this.snake.X
        let y=this.snake.Y
        //根据按键方向修改x,y值，
        switch(this.direction){
            case "ArrowUp":
                y-=10;//向上移动
                break;
            case "ArrowDown"://向下
            y+=10
                break;
            case "ArrowLeft":
                x-=10
                break;
            case "ArrowRight":
                x+=10
                break;
        }
        //检查蛇是否吃到了食物
        this.checkEat(x,y)
        //修改蛇的位置  
        try {
            this.snake.X=x
            this.snake.Y=y
       
        } catch (e:any) {
            alert(e.message)
            this.isLive=false
        }
      
        //开启一个定时调用
        clearTimeout()
        this.isLive&&setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
        
    }
    //定义一个方法检查蛇是否吃到了食物
    checkEat(x:number,y:number){
        if(x===this.food.x &&  y===this.food.y){
            console.log('蛇吃到食物了')
        this.food.change()
        //分数增加
        this.scorePanel.addScore()
        //蛇增加长度
        this.snake.addBody()
        }
        

    }
}
export default GameControl