/**
 * Created by Administrator on 2016/8/31.
 */
var isSelect=false;
$('#save-pro').click(function(){
    var self=$(this);
    if(!isSelect){
        isSelect=true;
        self.children('.glyphicon-heart').css('color','#FD5B5F');
        self.children('span').text("���ղ�").css('color','#FD5B5F');
    }else{
        isSelect=false;
        self.children('.glyphicon-heart').css('color','#7F85A3');
        self.children('span').text("�����ղ�").css('color','#7F85A3');
    }
});
/*$('a.save').click(function(){
 var self=$(this);
 if(self.attr("isSc") == "no"){
 self.attr("isSc","yes")
 self.children('.glyphicon-heart').css('color','#FD5B5F');
 self.children('span').text("���ղ�").css('color','#FD5B5F');
 }else if(self.attr("isSc") == "yes"){
 self.attr("isSc","no")
 self.children('.glyphicon-heart').css('color','#7F85A3');
 self.children('span').text("�����ղ�").css('color','#7F85A3');
 }
 });*/