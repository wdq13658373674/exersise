/**
 * Created by Administrator on 2016/8/24.
 */
/*
* 使用闭包
* 好处：
* 1、避免全局依赖
* 2、避免第三方破坏
* 3、兼容jquery操作符
* */

//对象级别插件写法
(function($){
    /*
    * 两个供用户扩展的基类：
    * 1、$.extend() 为扩展jQuery类本身.为类添加新的方法
    * 2、$.fn.extend() 给jQuery对象添加方法
    * */

    //给jQuery.fn加入新的功能属性，此处添加的对象属性的名称就是插件的名称
    /*$.fn.maxHeight= function () {
        //插件代码:

        /!*
           （一）插件环境:在插件的范围里,this关键字代表了这个插件将要执行的jQuery对象,这里容易产生一个普遍的误区，因为在其他包含callback的jQuery函数中,this关键字代表了原生的DOM元素。
        *!/
       /!* var self=$(this);max=0;

        this.each(function(){
           max=Math.max(max,$(this).height());
        });

        return max;*!/
    };*/

    /*
     * (二)默认值和选项
     * 拓展的默认设置(通过使用$.extend)。 因此，相对于调用一个有大量参数的插件，你可以调用一个对象参数，包含你了你想覆写的设置
     * */
    /*$.fn.tooltip=function(options){
        var opts= $.extend({}, $.fn.tooltip.defaults,options);//合并参数到{}

        return this.each(function () {
            var self = $(this);
            //测试Metadata插件是否被安装如果它被安装了，它能扩展我们的options对象通过抽取元数据这行作为最后一个参数添加到JQuery.extend，那么它将会覆盖任何其它选项设置
            var o = $.meta ? $.extend({}, opts, self.data()) : opts;
            self.css({
                background: o.aftercolor,
                color: o.forcolor
            })

            //回调函数
            var markup=self.html();
            markup= $.fn.tooltip.format(markup);
            self.html(markup);
        });
    }

    $.fn.tooltip.defaults={
        forcolor:'red',
        aftercolor:'blue'
    }

    $.fn.tooltip.format=function(txt){
        return '<strong>' + txt + '</strong>';
    }*/


    /*
    * 3、单例模式
    * */
    var pageSwich=(function(){
        //构造函数（初始化）
        function pageSwich(element,options){
            this.settings= $.extend(true, $.fn.pageSwich.default,options || {});//为true即为深度拷贝
            this.element=element;
            this.init();
        }

        /*pageSwich.prototype={
            //初始化
            init:function(){

            }
        }*/

        pageSwich.init=function(){

        }

        return pageSwich();
    })();

    $.fn.pageSwich=function(options){
        //判断该对象是否存在：如果存在就不重新创建对象的实例，
        //利用data()来存储插件的实例
        var self=$(this),
            instance=self.data('pageSwich');

        if(!instance){
            self.data('pageSwich',(instance=new pageSwich(self,options)));
        }
        //判断用户传入字符串
        if($.type(options)==='string') return instance[options]();
    }

    //默认参数
    $.fn.pageSwich.default={
        selectors:{
            sections:".sections",
            section:'.section',
            pages:'.pages',
            active:'.active'
        },
        index:0,//开始索引
        easing:'ease',//动画效果
        pagination:true,//是否分页
        loop:false,//是否循环
        duraction:500,//动画执行时间
        direction:'vertial',//滑动方向
        callback:''//回调函数
    }
})(jQuery)