/**
 * Created by Administrator on 2016/8/24.
 */
/*
* ʹ�ñհ�
* �ô���
* 1������ȫ������
* 2������������ƻ�
* 3������jquery������
* */

//���󼶱���д��
(function($){
    /*
    * �������û���չ�Ļ��ࣺ
    * 1��$.extend() Ϊ��չjQuery�౾��.Ϊ������µķ���
    * 2��$.fn.extend() ��jQuery������ӷ���
    * */

    //��jQuery.fn�����µĹ������ԣ��˴���ӵĶ������Ե����ƾ��ǲ��������
    /*$.fn.maxHeight= function () {
        //�������:

        /!*
           ��һ���������:�ڲ���ķ�Χ��,this�ؼ��ִ�������������Ҫִ�е�jQuery����,�������ײ���һ���ձ����������Ϊ����������callback��jQuery������,this�ؼ��ִ�����ԭ����DOMԪ�ء�
        *!/
       /!* var self=$(this);max=0;

        this.each(function(){
           max=Math.max(max,$(this).height());
        });

        return max;*!/
    };*/

    /*
     * (��)Ĭ��ֵ��ѡ��
     * ��չ��Ĭ������(ͨ��ʹ��$.extend)�� ��ˣ�����ڵ���һ���д��������Ĳ��������Ե���һ����������������������븲д������
     * */
    /*$.fn.tooltip=function(options){
        var opts= $.extend({}, $.fn.tooltip.defaults,options);//�ϲ�������{}

        return this.each(function () {
            var self = $(this);
            //����Metadata����Ƿ񱻰�װ���������װ�ˣ�������չ���ǵ�options����ͨ����ȡԪ����������Ϊ���һ��������ӵ�JQuery.extend����ô�����Ḳ���κ�����ѡ������
            var o = $.meta ? $.extend({}, opts, self.data()) : opts;
            self.css({
                background: o.aftercolor,
                color: o.forcolor
            })

            //�ص�����
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
    * 3������ģʽ
    * */
    var pageSwich=(function(){
        //���캯������ʼ����
        function pageSwich(element,options){
            this.settings= $.extend(true, $.fn.pageSwich.default,options || {});//Ϊtrue��Ϊ��ȿ���
            this.element=element;
            this.init();
        }

        /*pageSwich.prototype={
            //��ʼ��
            init:function(){

            }
        }*/

        pageSwich.init=function(){

        }

        return pageSwich();
    })();

    $.fn.pageSwich=function(options){
        //�жϸö����Ƿ���ڣ�������ھͲ����´��������ʵ����
        //����data()���洢�����ʵ��
        var self=$(this),
            instance=self.data('pageSwich');

        if(!instance){
            self.data('pageSwich',(instance=new pageSwich(self,options)));
        }
        //�ж��û������ַ���
        if($.type(options)==='string') return instance[options]();
    }

    //Ĭ�ϲ���
    $.fn.pageSwich.default={
        selectors:{
            sections:".sections",
            section:'.section',
            pages:'.pages',
            active:'.active'
        },
        index:0,//��ʼ����
        easing:'ease',//����Ч��
        pagination:true,//�Ƿ��ҳ
        loop:false,//�Ƿ�ѭ��
        duraction:500,//����ִ��ʱ��
        direction:'vertial',//��������
        callback:''//�ص�����
    }
})(jQuery)