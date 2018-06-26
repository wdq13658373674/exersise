/**
 * Created by Administrator on 2016/8/24.
 */
/*(function($){
    $.fn.tabPlus=function(options){
        var defaults={
            method:'click',
            nav:$('#tab_bar>ul li'),
            content:$('.tab_css')
        };
        var opts=$.extend({},defaults,options);//不破坏原有的项的结构下，将结果合并到{}中

        opts.content.not(':first').hide();
        return this.bind(opts.method,function(){
            var self=$(this);
            var inx=self.index();

            opts.nav.removeClass('active');
            opts.content.hide();

            self.addClass('active');
            opts.content.eq(inx).show();

            //回调函数
            if(callback){
                callback();
            }
        });
    }
})(jQuery)*/

//改进方法-暴露插件的默认设置
//前面经常看到有“;”，那是为了避免代码合并等不必要的错误
;(function($){
    'use strict';
    $.fn.tabPlus=function(options,callback){

        var settings=$.extend({},$.fn.tabPlus.defaults,options);//不破坏原有的项的结构下，将结果合并到{}中

        $(opts.content).not(':first').hide();
        //return this维护链式结构
        return this.bind(opts.method,function(){
            var self=$(this);
            var inx=self.index();

            $(opts.nav).removeClass('active');
            $(opts.content).hide();

            self.addClass('active');
            $(opts.content).eq(inx).show();

            //回调函数
            if(callback){
                callback();
            }
        })
    }

    //给插件添加默认属性
    $.fn.tabPlus.defaults={
        method:'click',
        nav:'.nav>li',
        content:'.content'
    }
})(jQuery);
