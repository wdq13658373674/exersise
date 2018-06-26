charset='utf-8';
///**
// * Created by Administrator on 2016/8/9.
// */
////构造函数.通常用于初始化对象变量。及对象成员赋予初始值.与new连用
//function Point(x,y){
//    this.x=x;
//    this.y=y;
//}
////实例化对象
//var S=new Point(1,1);
////通过构造函数的prototype对象赋值
////来给point对象定义方法
//Point.prototype.r=function(){
//    return Math.sqrt(this.x * this.x + this.y * this.y);
//}
////point实例对象继承了r()方法
//S.r();
//
//
////两个对象包含同样的属性及相同的值时，也是不相等的。当且仅当他们拥有同样的及对象时，他们才是相等的
////例如
//var a=[];
//var b=a;
//b[0]=2;
//a == b;
//
////比较两个对象或者数组
//function eque(a,b){
//    if(a.length != b.length) return false;
//    for(var i= 0,len= a.length;i<len;i++){
//        if(a[i] != b[i])
//            return false;
//    }
//    return true;
//}
//var a=[1,2,3];
//var b=[1,2,3];
//console.log(eque(a,b));
//
////变量作用域
//var scope='local scope';
//function scopes(){
//    var scope='netest scope';
//  return scope;
//}
//console.log(scopes());//输出netest scope
//console.log(scope);//输出local scope
//
////函数作用域和声明提前
//console.log(scope);//当变量调用写在声明之前，返回undefined
//var scope=0;
//
////属性访问表达式
////对象
//var pro={x:1,y:{z:7}};
//var x=pro.x;
//var y=pro.y.z;
//console.log(x,y);
////数组
//var a=[pro,1];
//var b=a[0].x;
//console.log(b);
//
////运算符
//var a=2 + 'doubi'
//console.log(a);

////delete
//var x={a:1,b:2};
//delete x.a;
//console.log('a' in x);//false
//console.log('b' in x);//ture
//console.log(delete x);//false不能删除var定义的变量，以及function定义的函数及函数变量
//
//var y=[1,2,3];
//delete y[2];//删除的是索引并不是值
//console.log(2 in y);//false
//console.log(y.length);//数组的长度并没有改变

////空语句
//var a=[];
//for(var i=0;i< a.length;a[i++]=0);//空语句，初始化一个数组a
//for(var i=0;i< a.length;i++){
//    a[i++]=0
//}
//
////标签语句
//mainloop:while(token != null){
//    continue mainloop;//跳转到下一次循环
//}

////return语句不必带有参数返回值
////例如
//function dis_obj(o){
//    //如果参数为null或者undefined则返回
//    if(!o) return;//不能有换行
//    //进行其他操作
//}

////throw语句抛出异常
//function factory(x){
//    if(x<0) throw new Error("x不能为负数");
//    return x;
//}
//factory(-1);

////枚举被命名的整型常数的集合，在日常生活中很常见
//if(typeof WeekDay == "undefined"){
//    var WeekDay = {};
//    WeekDay.Sunday = 0;
//    WeekDay.Monday = 1;
//    WeekDay.Tuesday = 2;
//    WeekDay.Wedesay = 3;
//    WeekDay.Thursday = 4;
//    WeekDay.Friday = 5;
//    WeekDay.Saturday = 6;
//}
//console.log(WeekDay.Tuesday);

//通过原型继承创建新对象
function inherit(p){
    if(p == null) throw TypeError;//p是一个对象
    if(Object.create){
        return Object.create(p);
    }
    var t=typeof p;
    if(t !== 'Object' && t!== 'function') throw  TypeError;
    function f(){};
    f.prototype=p;
    return new f();
}
 /*//对象的继承
var o={}
o.x=1;
var a = inherit(o);
a.y=2;
var b = inherit(a);
b.z=3;
var sum = b.x + b.y;
console.log(sum);*/

////属性赋值操作首先检查原型链，在原始对象上对创建或者对已有的属性赋值，不会修改原型链。
////只有在查询属性时才会体会到继承的存在，而设置属性和继承无关
//var circle={r:1};//被继承的对象
//var a=inherit(circle);//继承circle的r属性
//a.x=1;
//a.y=2;//定义行的属性
//var b=inherit(a);
//b.r=3;
//console.log(a.r,circle.r, b.r);//2,1原型对象没有修改,只是被覆盖
//
////删除属性。只能删除自有属性，不能删除继承属性
//delete a.x;
//console.log(a.x);//undefined，只有属性已经被删除
//delete a.r;
//console.log(a.r);//1，继承属性没有被删除
//
////属性的检测hasOwnProperty()检测自由自有属性，自有属性返回ture，继承属性返回false
////in如果检测到对象自有属性和继承属性，则返回true
//console.log(a.hasOwnProperty('y'));//自有属性
//console.log(a.hasOwnProperty('r'));//继承属性

////将可枚举属性复制到o中
//function copy(p,o){
//    for(prop in p){
//        o[prop]=p[prop];
//    }
//    return o;
//}
//
//var p={x:1,y:2,z:3};
//var o={};
//copy(p,o);//复制
//for(key in o){
//    console.log(o[key]);//输出1 2 3
//}

//属性getter（读属性）和setter（写属性）------存取器属性
/*var p={
    x:1,
    y:2,
    get r(){return this.x+this.y;}
}

var a=inherit(p);
console.log(a.r);*/

////使用存取器属性定义API
var num={
    x:2,
    y:1,
    $n:0,
    get next(){
        return this.$n++;
    },
    set next(n){
        if(n >= this.$n) this.$n=n;
        else throw  '序列号的值不能比当前值小';
    }
}
////调用getOwnPropertyDescriptor()对对象自有属性的描述。
////想获得继承属性的描述，需要遍历原型链
//console.log(Object.getOwnPropertyDescriptor(num,'next'));
////修改属性的特性Object.defineProperty(obj,属性，特性);不能修改继承的属性
//Object.defineProperty(num,'x',{
//    value:4,
//    writable:true,//可写
//    enumerable:false,//不可枚举
//    configurable:true//可配置
//});
//
//console.log(Object.getOwnPropertyDescriptor(num,'x'));

////同时修改和创建多个属性Object.defineProperties（）
//Object.defineProperties(num,{
//    x:{
//        value:2,
//        writable:true,
//        enumerable:false,
//        configurable:true
//    },
//    y:{
//      value:5,
//        writable:false,
//        enumerable:true,
//        configurable:true
//    }
//});
//console.log(Object.getOwnPropertyDescriptor(num,'x'));
//console.log(Object.getOwnPropertyDescriptor(num,'y'));

////复制属性的特性
///*
//* 给Object.prototype添加一个extend（）的方法
//* 该方法继承自调用它的对象，将作为参数的对象一一复制
//* 除了复制值之外，还要复制属性的特性
//* 参数对象的所有自有对象都一一复制
//* */
//Object.defineProperty(Object.prototype,
//    'extend',//定义Object.prototype.extend
//    {
//    writeable:true,
//    enumerable:false,
//    configurable:true,
//    value:function(o){
//        //得到所有的自有属性
//        var names=Object.getOwnPropertyNames(o);
//        //遍历它们
//        for(var i= 0;i<names.length;i++){
//            if(names[i] in this) continue;
//            var descri=Object.getOwnPropertyDescriptor(o,names[i]);
//            Object.defineProperty(this,names[i],descri);
//        }
//    }
//})
//
//var a={x:5,y:2,z:4};
//Object.defineProperty(a,'y',{
//    writable:false,
//    enumerable:true,
//    configurable:true
//});
////调用上面Object.prototype的extend（）方法
//Object.prototype.extend(a);
//for(key in Object.prototype){
//    console.log(Object.getOwnPropertyDescriptor(Object.prototype,key));
//}
///*输出结果
//* { value: 5, writable: true, enumerable: true, configurable: true }
// { value: 2,
// writable: false,
// enumerable: true,
// configurable: true }
// { value: 4, writable: true, enumerable: true, configurable: true }
//*
//* */


//JSON.stringify(),JSON.parse()序列化和还原js对象

//数组
/*
* 创建数组的集中方法
* 1、直接量：[]
* 2、构造函数Array():new Arrray()
* */

////稀疏数组。索引不连续的数组
////使用in检测数组元素不存在
//var a1=new Array(3);
//var a2=[,,,];
//
//console.log(0 in a1);
//console.log(0 in a2);

////数组元素的添加和删除
//var a=[];
//a.push('one');
//a.push('two','three');
//console.log(a);

////在数组首部删除一个元素
///*
//* 从数组中删除元素就编程了稀疏数组
//* 删除数组，不会改变数组鱼油的length，其他元素也不会从高索引移动下来填充已经删除的空白
//* */
//var a=['one','two','three'];
//delete a[0];
//console.log(0 in a);//false,a[0]已经被删除

////遍历数组是需要排除null或者undefined
//var a=[];
//for(var i= 0,length= a.length;i<len;i++){
//    if(!a[i]) continue;
//}

////Array.join()将数组转化成字符串连接在一起，返回最后生成的字符串。是String.split()方法的逆转
//var a=[1,2,3];
//var b=a.join('-');//使用连字符分割，默认为逗号
//console.log(b);

////sort()数组排序
//var a=[22,545,33,110];
//var b= a.sort();
//var c= a.sort(function(a,b){return b-a;});
//console.log(c);

////slice()截取数组
//var a=[1,2,3,4,5,6];
//console.log(a.slice(1,-1));//1表示数组第一位开始，-1表示数组最后一位结束

//unshift()和shift()在数组的前面添加或者删除元素
//push()和pop()在数组的末尾添加和删除元素

////foreach()方法.无法终止遍历。可以写在try块中，终止循环
//var a=[1,2,3,4,5];
//var sum = 0;
//a.forEach(function(value){
//    sum += value;
//});
//console.log(sum);

////可选形参
//function getPropotyNames(p,a){
//    a=a || [];//如果a未定义句使用新数组等价于if(a == undefined) a=[];
//    for(var key in p){
//        a.push(p[key]);
//    }
//
//    console.log(a);
//}
//var p=[1,2,3];
//getPropotyNames(p);

////不定实参函数使用arguments[]对象
////通过实参名字来修改实参值得话，通过arguments[]也可以获取修改后的值
///*
//* 在下面例子中，arguments[]和x只代同一个值，
//* 修改其中一个数的值会影响另一个的值
//* */
//function f(x){
//    console.log(x);
//    console.log(arguments[0]);
//    arguments[0]=null;
//    console.log(x);
//}
//f(6);

////将对象属性用作实际参数
//function arrayCopy(from,from_start,to,to_start,length){
//    for(var key in from){
//        to.push(from[key]);
//    }
//}
//
//function easyCopy(args){
//    arrayCopy(
//        args.from,
//        args.from_start || 0,
//        args.to,
//        args.to_start || 0,
//        args.length
//    );
//}
////调用
//var a=[1,2,3,4];
//var b=[];
//easyCopy({
//    from:a,
//    to:b,
//    length:4
//});
//console.log(b);

////闭包
///*
//* 下面例子说明闭包可以捕捉到局部变量，并一直保存下来
//* 函数定义时的作用域链，到函数执行时依然有效
//* */
//var scope="global scope";
//function checkscope(){
//    var scope='local scope';
//    function f(){return scope;}
//    return f;//返回嵌套函数对象，并不是字节返回值
//}
//
//var a=checkscope()();
//console.log(a);

////循环创建多个闭包
////关联到闭包的作用链都是活动的
//function constfuns(){
//    var funs=[];
//    for(var i= 0;i<10;i++){
//        funs[i]=function(){return i;};
//    }
//    return funs;
//}
//
//var funs=constfuns();
//console.log(funs[5]());

////length属性
//function check(args){
//    var actual=args.length;
//    var expext=args.callee.length;
//
//    if(actual != expext){
//        throw error('expext' + expext + 'args;got' + actual);
//    }
//}
//
//function f(x,y,z){
//    check(arguments);
//    return x+y+z;
//}

////可调用的对象：可在函数表达式中调用这个对象（常见的可调用对象Window.alert(),RegExp对象）,使用了可调用的宿主对象，而不是你内置函数对象
////检测对象是否是真正的函数对象
//function isFunction(x){
//    return Object.prototype.toString.call(x)==='[Object Function]';
//}

////使用函数处理数组
////计算函数的平均值和标准差
//var a=[1,1,3,5,5];
//var sum=0;
////平均值
//for(var i= 0,len= a.length;i<len;i++){
//    sum+=a[i];
//}
//var avg=sum / a.length;
//console.log(avg);
////标准差
//var sum=0;
//for(var i= 0,len= a.length;i<len;i++){
//    var def=a[i] - avg;
//    sum+=def * def;
//}
//var std=Math.sqrt(sum / (a.length -1));//math.sqrt()平方根
//console.log(std);

////函数式编程
////使用数组的map()和reduce()实现同样的计算
//var sum=function(x,y){return x+y;}//参数x:首项或者是数组前面项相加的结果，y:当前需要相加的值
//var def=function(x){return x * x;}
//
////reduce()返回一个数组和结果
//var mean= a.reduce(sum,0)/ a.length;
//console.log(mean);
//
////map()返回一个新的数组
//var dev= a.map(function (x){
//    return x-mean;
//});
//console.log(dev);//新数组
//
////标准差
//var std=Math.sqrt(dev.map(def).reduce(sum) / (a.length-1));
//console.log(std);

////高阶函数:操作函数的函数，接受一个或多个函数作为参数，并返回一个新函数
//（一）
//function not(f){//接收一个函数作为参数，并返回一个新的函数
//    return function(){
//        var result= f.apply(this,arguments);
//        return !result;
//    }
//}
//var even=function(x){
//    return x % 2 ==0;
//}
//var odd=not(even);
//var a=[1,1,3,7,5];
//var res=a.every(odd);
//console.log(res);//返回true
//(二)
//返回新函数将一个数组映射到另一个使用这个函数的数组上

/*//类数组对象
//重一个常规空对象开始，然后添加一些属性。称为类数组对象
var a={};
var i=0;
while(i < 10){
    a[i]=i;
    i++;
}
var len=a.length=i;
console.log(a);
console.log(len);*/

//不完全函数：绑定至函数，并传入一部分参数？？？？？？？？？？

////------------------------------第九章----------------
////-----------------------------类与模块---------------------
//
////（1）类与原型
////类：定义对象的类，让每个对象都共享一些属性。类的实现基于其原型继承机制，如果两个实例从同一个原型对象上继承了属性，则为同一个类的实例。意味着他们有同一个构造函数创建和初始化的
////类的所有实例对象都从同一个原型对象上继承属性。因此原型对象是类的核心
////实现一个简单的类:能表示值得范围的类
////定义工厂方法range()
//function range(from,to){
//    var r=inherit(range.methods);
//    r.from=from;
//    r.to=to;
//    return r;
//}
//
//range.methods={
//    includes:function(x){
//        return this.from <= x && x<=this.to;
//    },
//    foreach:function(f){
//        for(var x=Math.ceil(this.from);x<=this.to;x++) f(x);
//    }
//}
//
//var r=range(1,5);
//var a=r.includes(3);
//console.log(a);//true
//r.foreach(console.log);

////(2)类与构造函数
//function Range(from,to){
//    this.from=from;
//    this.to=to;
//}
//
//Range.prototype={
//    includes:function(x){
//        return this.from<=x && x<=this.to;
//    },
//    foreach:function(f){
//        for(var i=Math.ceil(this.from);i<=this.to;i++){
//            f(i);
//        }
//    }
//}
//
//var r=new Range(1,5);
//var a=r.includes(3);
//console.log(a);//true
//r.foreach(console.log);

////定义类的步骤：
///*
//* （1）定义一个构造函数，并设置初始化新对象的实例属性
//*（2）给构造函数的prototypy对象定义实例方法
//* （3）给构造函数定义类字段和类属性
//* */
////定义简单类的函数
//function defineClass(constructor,methods,statics){
//    if(methods) extend(constructor.prototype,constructor);//extend(target,source)两个参数,第一个代表目标对象，第二个代表原对象，将原对象拷贝到目标函数
//    if(statics) extend(constructor,statics);
//
//    return constructor;
//}
//
//var simpleRange=defineClass(function(f,t){this.f=f;this.t=t;},{
//    includes:function(x){return this.f<=x && x<=this.t;},
//    toString:function(){return this.f + '...' + this.t}
//},{upto:function(t){return new simpleRange(0,t);}})

////类的私有成员以下划线开头表示，例如：_format
//
////Function.prototype的call()和apply()方法理解
//function A(){
//    this.message="the message of A";
//    this.getMessage=function(){
//        return this.message;
//    }
//}
//var a=new A();
//console.log(a.getMessage());
//
//function B(){
//    this.message="the  message of B";
//    this.setMessage=function(msg){
//        this.message=msg;
//    }
//}
//var b=new B();
//
//b.setMessage.call(a,"message a");//等效于a.setMessage('message a');
//console.log(a.message);

//工厂方法：一个类的方法用以返回类的实例


//9.9模块

//模块函数中的Set类
/*var Set=(
    function invocation(){
        //构造函数
        function Set(){
            this.values={};//保存改集合
            this.n=0;//集合中值得个数
            this.add.apply(this,arguments);//将所有的参数添加至集合中
        }

        set.prototype.contains=function(value){
            return this.values.hasOwnProperty(val(value));//判断对象是否有给出的属性名称和对象
        }

        //辅助函数
        function val(val){
            /!*...*!/
        }
    }()//()立即执行
);*/

//将模块函数封装进一个函数，方便模块函数在外部调用
/*var collections;
if(!collections) collections={};

collections.sets=(function namespace(){
    //在这里可以定义多种集合类，使用局部变量和函数

    //通过返回命名空间对象将API导出
   return {
        //导出属性名和局部变量的名称
       abstruct:abstruct
   };
}());*/

//将模块函数作为构造函数，通过new来调用
/*var collections;
if(!collections) collection={};

collection.sets=(new function namespace(){
  this.abstruct=abstruct;
}());*/

//替代方法
/*var collections;
if(!collections) collections={};
collections.stes={};
(function namespace(){
    collection.sets.abstruct=abstruct;
    //这里不需要return语句
}());*/

//15.8.1文档坐标和视口坐标
/*查询窗口的视口尺寸*/
/*function getClientSize(w){
    var w = w || window;//使用指定的窗口，如果没有参数就使用当前窗口

    //兼容ie，除了ie8及更早的版本以外
    if(w.innerWidth!=null) return {w: w.innerWidth,h: w.innerHeight};

    //标准模式下的ie（任何浏览器）
    var d= w.document;
    if(document.compatMode == "CSS1Compat"){//判断文档是否加了标准声明
        return {w: d.documentElement.clientWidth,h: d.documentElement.clientHeight};
    }

    //怪异模式下的浏览器
    return {w: d.body.clientWidth,h: d.body.clientHeight};
}*/

//键盘的快捷键的keymap类
//构造函数
/*function keymap(bindings){
    this.map={};
    if(bindings){
        for(name in bindings){
            this.bind(name,bindings[name]);
        }
    }
}

//绑定指定的按键标志和指定的处理程序
keymap.prototype.bind=function(key,func){
    this.map[keymap.normalize(key)]=func;
}*/


//jq的相关知识
//扩展jq插件的伪类
/*jQuery.expr[':'].data=function(element,index,match,array){
    return element.hasAttribute('data + ' + match[3]);
}*/


//20章客户端存储
/*
* 浏览器仅仅支持字符串的存储，
* 进行数据存储时浏览器会自动将其存储为字符串，
* 如果需要存储其他类型的数据，则需要进行手动的编码和解码
* */
//数据存储
/*var name=localStorage.userName;
if(!name){
    name=prompt('whats your name?');
    localStorage.userName=name;
}
console.log(localStorage['userName']);

//数据编码与解码
localStorage.data=JSON.stringify(data);//编码然后存储
var data=JSON.parse(localStorage.data);//获取数值之后再解码

//手动将其转换成数字类型
localStorage.num=10;
var num=parseInt(localStorage.num);*/

/*
//存储API
localStorage.setItem('x','1');
var x=localStorage.getItem('x');

//枚举所有存储的名字
for(var x= 0,len=localStorage.length;x<len;x++){
    var name=localStorage.key(x);
    var value=localStorage.getItem(name);
}

//删除指定项
localStorage.removeItem('x');
localStorage.clear();//全部删除

//使用显示的存储API的好处之一：
/!*
* 在还不支持web存储标准的浏览器中，依然可以依赖其他的存储机制
* *!/
var memory=window.localStorage ||
    (window.UserDataStorage && new UserDataStorage()) ||
        new cookieStorage();

var username=memory.getItem('username');
*/

/*//设置一个cookie
function setcookie(name,value,days){
    var cookie=name + '=' +encodeURIComponent(value);
    if(typeof days === 'number'){
        cookie += ';max-age=' + (days * 60 * 60 *24);
    }

    document.cookie=cookie;
}

//读取cookie
function getcookie(){
    var cookie={};
    var all=document.cookie;
    if(all=='') return cookie;

    var list=all.split(';');//用分号隔离出名/值对

    for(var i= 0,len=list.length;i<len;i++){//遍历每一个cookie
        var cookie=list[i];
        var lev=cookie.indexOf('=');//查找第一个等于符号
        var name=cookie.substring(0,lev);//截取cookie名字
        var value=cookie.substring(lev + 1);//截取cookie名字对应的值

        value=encodeURIComponent(value);
        cookie[name]=value;
    }

    return cookie;
}*/

//复杂的缓存清单
/*
* CHACHE:区域，默认区域
* Network:标志该URL中的资源从不缓存，通过网络获取
* fallback:包含两个URL。第一个URL是前缀，第二个URL是需要加载和存储在缓存中的资源
* */

//复杂的缓存清单
/*
* CACHE MANIFEST
* cache:
* myapp.html
* myapp.css
* myapp.js
*
* FALLBACK:
* videos / offline_help.html
*
* Network:
* cgi/
* */

//21章
//canvas和svg的重要区别
/*
* canvas绘制图形：调用它的方法
* svg:构建一个xml元素树
* */
/*arguments不定量实际参数*/
//function count(){
//    var count=0;
//    console.log(arguments);
//    console.log(arguments.length);
//    console.log(arguments[0]);
//
//    for(var i= 0,len=arguments.length;i<len;i++){
//        count +=arguments[i];
//    }
//
//    return count;
//}
//console.log(count(1,4,3));

/*变量作用域*/
//function fnAA()
//{
//    var a=3;
//    function fnBB()
//    {
//        var b=0;
//        console.log(a);
//        console.log(b);
//    }
//    fnBB();
//}
//fnAA();

/*js函数可以当做一种数据类型*/
//var methods1=function(a,b,func){
//    func(a,b);
//}
//
//var methods2=function(a,b){
//    console.log(a+b);
//}
//
//methods1(1,2,methods2);

//function persion(name){
//    var _name=name;
//    return function eat(food){
//        console.log(_name + '吃了' + food);
//    }
//}
//
//var p=persion('小王');
//p('糙米饭');
/*变态升级*/
//function persion(name){
//    var _name=name;
//    return function (food){
//        var edit=_name + '吃了' +food;
//        console.log(edit);
//        return function(dosomething){
//            console.log(edit + dosomething);
//        }
//    }
//}
//
//var p=persion('小王');//返回一个function
//var q=p('糙米饭');//返回一个function
//q('拉肚子');

/*函数与对象的对等性，js对象一般采用函数来定义*/
//js创建对象最基本的方法
//function Persion(name,sex){
//    this.name=name;
//    this.sex=sex;
//    this.show=function(){
//        console.log(this.name +' ' + this.sex);
//    }
//}
//
//var persion=new Persion('小王','女');//实例化对象
//persion.show();


/*---------------------------------------js面向对象----------------------------------------------------*/
/*(1)面向对象：封装*/
//function Cat(name,color){
//    this.name=name;
//    this.color=color;
//    /*
//     * 对于下面不变的属性和用法可以定义到prototype上面
//     * */
//    /*this.type='猫科动物';
//    this.eat=function(){
//        console.log('吃老鼠');
//    }*/
//}
//
//Cat.prototype.type='猫科动物';
//Cat.prototype.eat=function(){console.log('吃老鼠')}
//
//var cat1=new Cat('大毛','黑色');
//var cat2=new Cat('小毛','白色');
//console.log(cat1.type);
//console.log(cat2.type);
//cat1.eat();
///*
//* isPrototypeOf()判断prototype对象和实例之间的关系;
//* hasOwnProperty()判断某个属性是继承自prototype对象的属性还是本地属性;
//* in运算符判断某个实例是否包含某个属性（不管是不是本地属性）
//* */
//console.log(Cat.prototype.isPrototypeOf(cat1));//true
//console.log(cat1.hasOwnProperty("name"));//true
//console.log(cat1.hasOwnProperty("type"));//false
//console.log('name' in cat1);//true

/*==============================================(2)构造函数的继承======================================================*/
/*
* 1、使用call和apply将父对象的构造函数帮顶到自对象上面
* 2、使用prototype指向被继承的构造函数的实例
* 3、animal中不变的属性可以直接写入到prototype上面，然后让cat的prototype对象直接指向animal的prototype
* 4、利用空对象作为中介
* */
//function Animal(){
//    this.species='动物';
//}

/*----------第一种*/
//function Cat(name){
//    Animal.apply(this,arguments);//继承
//    this.name=name;
//}
//
//var cat=new Cat('小毛');
//console.log(cat.species);

/*------------第二种*/
//function Cat(name){
//    this.name=name;
//}
//
//Cat.prototype = new Animal();//继承
//Cat.prototype.constructor=Cat;//prototype对象指向它的构造函数(替换了prototype新的对象，必然将新的prototype对象加上constructor属性指向原来的构造函数)
//
//var cat=new Cat('小毛');
//console.log(cat.species);

/*-------------第三种*/
//
//function Animal(){}
//Animal.prototype.specials='动物科';

 /*function Cat(name){
    this.name=name;
}

Cat.prototype=Animal.prototype;//继承
Cat.prototype.constructor=Cat;//指向原来的构造函数(缺点：任何对Cat.prototype的修改都会反映到Animal.prototype上面)

var cat=new Cat('大毛');

console.log(cat.specials);
console.log(Animal.prototype.constructor);//cat
console.log(Cat.prototype.constructor);//cat*/
/*=====================================(一)采用prototype实现继承============================================================*/
/*第四种:第二种和第三种的集合*/
/*function Animal(){}
Animal.prototype.species = "动物";

function Cat(name,color){
    this.name = name;
    this.color = color;
}

 /!*将上面的方法封装成一个函数*!/
function extend(Child, Parent) {
    var F = function(){};//定义一个空对象
    F.prototype = Parent.prototype;//F的prototype指向父对象的prototype属性
    Child.prototype = new F();//让子对象的prototype属性指向定义的空对象的实例
    Child.prototype.constructor = Child;//将新的子对象指向原来的构造函数
    Child.uber = Parent.prototype;//给子对象添加到一个uber属性，直接指向父对象的prototype属性，一遍可以直接调用父对象的方法
}
extend(Cat,Animal);
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species); // 动物*/
/*=====================================(二)拷贝继承=========================================================================*/
/*
function Animal(){}
Animal.prototype.species = "动物";

function Cat(name,color){
    this.name = name;
    this.color = color;
}

function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
}

extend2(Cat, Animal);
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species); // 动物
*/

/*js的原型链机制
* 在访问x、y的时候是通过原型链来查找的一直找到null为止，如果找到null还没有的话，就返回undefined
* */
/*function foo(name){
    this.name=name;
}
console.log(foo.prototype)*/

/*=======================js基础============================*/
/*在js中允许数组越界，即超出数组原来的length*/
/*var arr=['a','s','d']
var arr2=arr;
console.log(arr2[1]);*/

/*链接两个数组返回一个新的数组*/
/*var arr=[1,2,3]
var arr2=['a','s']
var arr3=arr.concat(arr2)
console.log(arr3)*/

/*js对象属性名是字符串若包含特殊字符串则用''包裹，例如middle-school*/

/*if else  语句执行时特点是二线一，在多个if else 中，如果满足某个人条件成立，则后续就不再继续判断了*/

/*在js中if条件句把undefined、null、0、NaN、''视为false，其余的都是为true*/

/*for循环*/
/*var persion={
    name:'小明',
    age:'18'
}
for( var key in persion){
    console.log(persion[key]);
}*/

/*
var arr=['bob','sun','pop']
var i=0;
var len=arr.length;
while(i<len){
    console.log(arr[i]);
    i++;
}*/

/*es6 map*/
/*
var map=new Map();
map.set('mraya',67);
console.log(map.get('mraya'));
*/

/*iterable*/
/*var arr1=['a','b','c'];
var arr2=new Set(['A','B','C']);
var arr3=new Map([[1,'x'],[2,'y'],[3,'z']]);*/

/*for....of....*/
/*
//arr1
for(var x of arr1){
    console.log(x);
}

//arr2
for(var i of arr2){
    console.log(i);
}

//arr3
for(var x of arr3){
    console.log(x[0]+ '=' + x[1]);
}*/

/*forEach*/
//arr1
//arr1.forEach(function(element,index,array){
//    //element：指向当前元素的值
//    //index:指向当前索引
//    //array:指向arr本身
//    console.log(index);
//    console.log(element);
//    console.log(array);
//});

//arr2
//arr2.forEach(function(element,sameElement,set){
//    console.log(element);//指向元素本身
//    console.log(sameElement);//指向元素本身
//    console.log(set);//指向元素本身
//});

//arr3
/*arr3.forEach(function(value,key,map){
    console.log(key);//指向元素索引
    console.log(value);//指向元素值
    console.log(map);//指向元素本身
});*/

/*变量的作用域
* 声明let块级变量(es6)
* */
/*
function foo(){
    var sum=0;
    for(let i= 0;i<100;i++){
        sum+=i;
    }
    console.log(sum);
}
foo();*/

/*将函数绑定到对象上就叫做方法
* 函数内部调用this:
* 1 如果是以对象的方法进行调用，则指向被调用的对象
* 2 如果是单独调用的函数，则指向全局对象即window
* */

/*
* apply与call的唯一区别
* apply:将参数打包成array传入
* call:是将参数按照顺序传入
* */

/*高阶函数(map()/reduce())
*一个函数接收另外一个函数作为参数就叫做高阶函数
* */
/*function pow(x){
 return x * x;
 }

 var arr=[1,2,3,4,5,6,7];
 var arr2=arr.map(pow);
 /!*map*!/
 console.log(arr2);
 //将所有的数值转换成字符串
 console.log(arr.map(String));
 /!*reduce*!/
 var all=arr.reduce(function(x,y){
 return x * y;
 });
 console.log(all);*/

/*
function product(arr){
    return arr.reduce(function(x,y){
        return x * y;
    });
}
var result=product([1,2,3,4]);
console.log(result);
*/

/*--------------------------------------------练习一--------------------------------------*/
/*使用map和reduce将字符串转换成数字*/
/*function string2number(s){
 var arr= s.split('');//将字符串转换成数组
 var arr2=[];
 arr2=arr.map(function(data){
 return +data;
 });//将字符串数组变成数字数组

 return arr2.reduce(function(x,y){
 return x*10+y;
 });//将字符串转换成number
 }

 //测试
 if(string2number('12345')===12345 && string2number('0')===0){
 console.log('测试通过');
 }else{
 console.log('测试不通过');
 }*/
/*--------------------------------------练习二--------------------------------------------*/
/*将用户输入的不规则英文名变成首字母大写其他字母小写输入['liSa','ADAm','BOB']=>['Lisa','Adam','Bob']*/
/*function upcase(arr){
    return arr.map(function(x){
        var xx = x.toLowerCase().split('');
        xx[0] = xx[0].toUpperCase();
        /!*return xx.reduce(function(x,y){ return x+y})*!/
        return xx.join('');//将数组中的所有元素放入一个字符串
    });
}

console.log(upcase(['adam', 'LISA', 'barT']));*/

/*在没有初始值之后赋值初始值*/
/*var initial=2;//null,undefinesd,0,1,2
var x= initial || 0;
console.log(x);*/

/*闭包
* 注意到返回的函数在其定义内部引用了局部变量arr，所以，当一个函数返回了一个函数后，其内部的局部变量还被新函数引用，所以，闭包用起来简单，实现起来可不容易。
* */
/*function make_pow(x){
    return function(n){
        return Math.pow(x,n);
    }
}//闭包将多参数的函数变成单参数的函数
var pow2=make_pow(2);
var pow3=make_pow(3);

var num=4;
console.log(pow2(num));
console.log(pow3(num));*/

/*function count(){
    var arr=[];
    for(var i=1;i<=3;i++){
        arr.push((function(n){
            return function(){
                return n* n;
            }
        })(i));//闭包
    }
    return arr;
}

var result=count();
console.log(result[0]());*/

/*JSON对象*/
/*var xiaoming={
    name:'小明',
    age:'12',
    address:'重庆',
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
console.log(JSON.stringify(xiaoming,function(){}));//对象序列化成JSON
console.log(JSON.parse('{"name":"小明","age":14}',function(){}));//JSON反序列化成对象*/

/*面向对象编程
* js原型链的继承关系不过是把*一个对象的的原型指向另外一个对象*
* */
/*var Student={
    name:'robot',
    age:13,
    run:function(){
        console.log(this.name + ' is running');
    }
}

var xiaoming=Object.create(Student);//利用Object.creat()传入原型对象
xiaoming.name='小红';
console.log(xiaoming.name);
xiaoming.run();*/

/*构造函数创建对象*/
/*function Student(name){
    this.name=name;
}
Student.prototype.hello=function() {
    console.log('hello' + this.name);
}

var xiaoming=new Student('小明');
var xiaohong=new Student('小红');

console.log(xiaoming.name);
console.log(xiaohong.name);
xiaoming.hello();
xiaohong.hello();*/

/*常用的编程模式
* 编写一个creatStudent()函数，内部封装所有的new操作
* */
function Student(prop){
    this.name=prop.name || '匿名';
}
Student.prototype.hello=function(){
    console.log('hello' + this.name);
}
/*基于Student扩展出PrimaryStudent*/
function PrimaryStudent(prop){
    this.grade=prop.grade || 1;
}












