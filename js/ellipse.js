/**
 * Created by Administrator on 2016/8/3.
 */
/*限定字数添加省略号*/
function ellipse(el,len){
    $(el).each(function(){
        var maxlen=len;
        if($(this).text().length>=maxlen){
            $(this).text($(this).text().substring(0,maxlen));
            $(this).html($(this).html()+'...');
        }
    });
}
