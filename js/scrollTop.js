/**
 * Created by Administrator on 2016/8/26.
 */
(function($){
    $.fn.isTop=function(options){
        var defaults={
            clientHeight:500,//�ﵽ���Ӹ߶���ʾ�ص�������ť
            time:500 //����setInterval()��ʱ��
        }

        var opts=$.extend({},defaults,options);
        var self=$(this);

        //������
        $(window).scroll(function(){
            var ostop=$(window).scrollTop();

            if(ostop >= opts.clientHeight){
                self.fadeIn();
            }else{
                self.fadeOut();
            }
        });

        //���ض������
        this.click(function(){
            $('body,html').animate({scrollTop:0},opts.time);
            return false;
        });
    }
})(jQuery)
