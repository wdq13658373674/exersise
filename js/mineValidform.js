/**
 * Created by Administrator on 2016/7/26.
 * 表单验证（非引用插件）
 */

$(function () {
    $('.refresh').click(function () {
        var verifyimg = "/Public/verify.html";
        if (verifyimg.indexOf('?') > 0) {
            $("#verify").attr("src", verifyimg + '&random=' + Math.random());
        } else {
            $("#verify").attr("src", verifyimg.replace(/\?.*$/, '') + '?' + Math.random());
        }
    });

    $("#username").mailAutoComplete();
    /*密码强度*/
    $('#txtPassword').keyup(function () {
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");

        if (false == enoughRegex.test($(this).val())) {
            $('#pwdsafe').removeClass('safe-b');
            $('#pwdsafe').removeClass('safe-c');
            $('#pwdsafe').addClass('safe-a');
        } else if (strongRegex.test($(this).val())) {
            $('#pwdsafe').removeClass('safe-a');
            $('#pwdsafe').removeClass('safe-b');
            $('#pwdsafe').addClass('safe-c');
        } else if (mediumRegex.test($(this).val())) {
            $('#pwdsafe').removeClass('safe-a');
            $('#pwdsafe').removeClass('safe-c');
            $('#pwdsafe').addClass('safe-b');
        } else {
            $('#pwdsafe').removeClass('safe-b');
            $('#pwdsafe').removeClass('safe-c');
            $('#pwdsafe').addClass('safe-a');
        }
        return true;
    });

    /*数据验证*/

    /*$('#email').blur(function(){
     if(is_email($(this).val())){
     $("#email-mag").html("");
     $(this).parent().removeClass("erro");
     $(this).parent().addClass("sussce");
     }else{
     $(this).parent().removeClass("sussce");
     $(this).parent().addClass("erro");
     $("#email-mag").html("用户名为邮箱号或手机号或6-20位字符!");
     $("#email").focus();
     return false;
     }
     });*/

    $(".input").keyup(function () {
        var indexs = $(".input").index(this);

        if (indexs == 0) {
            if ($("#username").val() == "" || $("#username").val().length < 6 || $("#username").val().length > 50) {
                $(".box-input-box").eq(indexs).removeClass("sussce");
                $(".box-input-box").eq(indexs).addClass("erro");
                $("#username-mag").html("用户名为邮箱号或手机号或6-50位字符!");
                $("#username").focus();
                return false;
            } else {
                $("#username-mag").html("");
                $(".box-input-box").eq(indexs).removeClass("erro");
                $(".box-input-box").eq(indexs).addClass("sussce");
            }
        }/*else if(indexs==1){
         if ($("#email").val() == "" || $("#email").val().length < 6 || $("#email").val().length > 20 || !is_email($("#email").val())) {
         $(".box-input-box").eq(indexs).removeClass("sussce");
         $(".box-input-box").eq(indexs).addClass("erro");
         $("#email-mag").html("请输入正确的邮箱格式");
         $("#email").focus();
         return false;
         } else {
         $("#email-mag").html("");
         $(".box-input-box").eq(indexs).removeClass("erro");
         $(".box-input-box").eq(indexs).addClass("sussce");
         }
         }*/ else if (indexs == 1) {
            if ($("#txtPassword").val().length < 6 || $("#txtPassword").val().length > 50) {
                $(".box-input-box").eq(indexs).removeClass("sussce");
                $(".box-input-box").eq(indexs).addClass("erro");
                $("#pwd-mag").html("6~50位字母或数字!");
                return false;
            } else {
                $("#pwd-mag").html("");
                $(".box-input-box").eq(indexs).removeClass("erro");
                $(".box-input-box").eq(indexs).addClass("sussce");
            }
        } else if (indexs == 2) {
            if ($("#pwd1").val() !== $("#txtPassword").val()) {
                $(".box-input-box").eq(indexs).removeClass("sussce");
                $(".box-input-box").eq(indexs).addClass("erro");
                $("#pwd1-mag").html("重复密码不一致!");
                return false;
            } else {
                $("#pwd1-mag").html("");
                $(".box-input-box").eq(indexs).removeClass("erro");
                $(".box-input-box").eq(indexs).addClass("sussce");
            }
        } else if (indexs == 4) {
            var code = $("#code").val();
            if ($("#code").val() == "") {
                $(".box-input-box").eq(indexs).removeClass("sussce");
                $(".box-input-box").eq(indexs).addClass("erro");
                $("#code-mag").html("验证码不能为空!");
                return false;
            } else if (code.length == 5) {
//                            $("#code-mag").html("");
//                            $(".box-input-box").eq(indexs).removeClass("erro");
//                            $(".box-input-box").eq(indexs).addClass("sussce");
                var url = "/Public/verify.html";
                if (url.indexOf('?') > 0) {
                    url += "&verify=" + code;
                } else {
                    url += "?verify=" + code;
                }
                $.get(url, function (re) {
                    if (re.status == 1) {
                        $("#code-mag").html("");
                        $(".box-input-box").eq(indexs).removeClass("erro");
                        $(".box-input-box").eq(indexs).addClass("sussce");
                    } else {
                        $(".box-input-box").eq(indexs).removeClass("sussce");
                        $(".box-input-box").eq(indexs).addClass("erro");
                        $("#code-mag").html("验证码错误!");
                        $('.refresh').click();
                        $("#code").val('');
                    }
                });
            }
        }
    });

    $("#username").blur(function () {
        var username = $("#username").val();
        var url = "/Public/check_username.html";
        if (url.indexOf('?') > 0) {
            url += "&username=" + username;
        } else {
            url += "?username=" + username;
        }
        $.get(url, function (re) {
            if (re.status != 1) {
                $("#username").parent().removeClass("sussce");
                $("#username").parent().addClass("erro");
                $("#username-mag").html(re.info);
                $("#username").focus();
            } else {
                $("#username-mag").html("");
                $("#username").parent().removeClass("erro");
                $("#username").parent().addClass("sussce");
                if (is_email(username)) {
                    $("#email").val(username);
                }
            }
        });
    });
    $(".ajax-post").click(function () {
        $(this).text("请稍候……");
    });
});


