/**
 * Created by Administrator on 2016/8/26.
 */
(function($){
    $.fn.isTop=function(options){
        var defaults={
            clientHeight:500,//达到可视高度显示回到顶部按钮
            time:500 //设置setInterval()的时间
        }

        var opts=$.extend({},defaults,options);
        var self=$(this);

        //鼠标滚动
        $(window).scroll(function(){
            var ostop=$(window).scrollTop();

            if(ostop >= opts.clientHeight){
                self.fadeIn();
            }else{
                self.fadeOut();
            }
        });

        //返回顶部点击
        this.click(function(){
            $('body,html').animate({scrollTop:0},opts.time);
            return false;
        });
    }
})(jQuery)
