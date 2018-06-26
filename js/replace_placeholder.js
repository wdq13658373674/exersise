/**
 * Created by Administrator on 2016/8/1.
 */
/*
* 替代模拟法解决placeholder兼容问题
* input.pas 替代 input.replace
* 还需优化
*/

var placeholder_show={
    //检测是否支持placeholder（私有方法）
    _check:function(){
        return 'placeholder' in document.createElement('input');
    },
    //初始化
    init:function(){
        if(!this._check()){
            this.placeholder();
        }
    },
    //修复placeholder
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
//执行
$(function(){
    placeholder_show.init();
});

