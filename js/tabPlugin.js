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
        var opts=$.extend({},defaults,options);//���ƻ�ԭ�е���Ľṹ�£�������ϲ���{}��

        opts.content.not(':first').hide();
        return this.bind(opts.method,function(){
            var self=$(this);
            var inx=self.index();

            opts.nav.removeClass('active');
            opts.content.hide();

            self.addClass('active');
            opts.content.eq(inx).show();

            //�ص�����
            if(callback){
                callback();
            }
        });
    }
})(jQuery)*/

//�Ľ�����-��¶�����Ĭ������
//ǰ�澭�������С�;��������Ϊ�˱������ϲ��Ȳ���Ҫ�Ĵ���
;(function($){
    'use strict';
    $.fn.tabPlus=function(options,callback){

        var settings=$.extend({},$.fn.tabPlus.defaults,options);//���ƻ�ԭ�е���Ľṹ�£�������ϲ���{}��

        $(opts.content).not(':first').hide();
        //return thisά����ʽ�ṹ
        return this.bind(opts.method,function(){
            var self=$(this);
            var inx=self.index();

            $(opts.nav).removeClass('active');
            $(opts.content).hide();

            self.addClass('active');
            $(opts.content).eq(inx).show();

            //�ص�����
            if(callback){
                callback();
            }
        })
    }

    //��������Ĭ������
    $.fn.tabPlus.defaults={
        method:'click',
        nav:'.nav>li',
        content:'.content'
    }
})(jQuery);
