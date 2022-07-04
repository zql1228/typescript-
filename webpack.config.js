const path=require('path')//引入包
const HTMLwebpackPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const { isBundle } = require('typescript')
//webpack中的所有的配置信息都应该写在module.exports中
module.exports={
    //指定入口文件
entry:"./src/index.ts",
output:{
    //指定打包文件的目录
    path:path.resolve(__dirname,'dist'),//指定打包后的目录
    filename:"bundle.js",//打包后文件的名字 
    //告诉 webpack不适用箭头
    environment:{
        arrowFunction:false
    } 
},
//指定webpack打包时要使用的模块
module:{
    //规则
    rules:[{
        test:/\.ts$/,//test指定规则生效的文件
        use:[
            {
                loader:'babel-loader',//指定加载器
                //设置预定义的环境
                options:{
                    presets:[
                        [
                        //指定环境插件
                        "@babel/preset-env",
                        //配置信息
                        {
                            targets:{//要兼容的目标浏览器
                                "chrome":"103",   
                                "ie":"11"       
                            },
                            "corejs":"3",//指定corejs版本
                            "useBuiltIns":"usage",//按需加载          
                        }
                    ]
                    ],
            
                }
        },
        'ts-loader'],
        //要排除的文件
        exclude:"/node_modules/"
    }]
},
//配置webpack插件
plugins:[
    new HTMLwebpackPlugin({
        // title:'这是一个自定义的title'
        template:'./src/index.html'
    }),
    new CleanWebpackPlugin(),//编译时先把dist文件删除在编译
],
//用来设置引用模块
resolve:{
    extensions:['.ts','.js']
}
}