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
export default Food
