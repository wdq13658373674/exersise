/**
 * Created by Administrator on 2016/8/1.
 */
/*
* ���ģ�ⷨ���placeholder��������
* input.pas ��� input.replace
* �����Ż�
*/

var placeholder_show={
    //����Ƿ�֧��placeholder��˽�з�����
    _check:function(){
        return 'placeholder' in document.createElement('input');
    },
    //��ʼ��
    init:function(){
        if(!this._check()){
            this.placeholder();
        }
    },
    //�޸�placeholder
    placeholder:function(){
        var replace = document.getElementsByClassName('replace');
        var pas = document.getElementsByClassName("pas");

        for (var i = 0, len = replace.length; i < len; i++) {
            replace[i].style.display = "none";
            pas[i].style.display='block';

            pas[i].onfocus = function () {
                this.style.display = 'none';
                this.nextElementSibling.style.display = 'block';
                this.nextElementSibling.focus();
            }

            replace[i].onblur = function () {
                if (this.value == '') {
                    this.style.display = 'none';
                    this.previousElementSibling.style.display = 'block';
                }
            }
        }
    }
};
//ִ��
$(function(){
    placeholder_show.init();
});

