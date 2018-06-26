/**
 * Created by Administrator on 2016/7/25.
 */
/*
 * 内容: 页面简单飘
 * 依赖: [jquery.js]
 * 版本: 1.0.0
 * 开发: da宗熊
 * 联系: 1071093121@qq.com
 * 归属: 个人学习交流，请勿用作商业用途
 */
;~function($){
    var config = {
        count: 10, // 雪花数量,
        time: 1000, //雪花移动间隔,
        path: "http://www.100bt.com/qq/snow/snow.png", //雪花路径,
        size: [6, 15], // 雪花尺寸范围
        minLeft: 0, // 与两边最小间距，建议比雪花宽度大一点
        maxMove: {
            y: 50,
            x: 20
        }, // 最大移动间距
        frameRate: 60, // 雪花帧率
        opacity: 50 // 透明范围, null则不要透明
    }
    var path;
    var winSize = {width: 100, height:100}, $html = $("html");
    var minLeft, min2Left, maxMove, maxLeft, minImageSize, betweenImageSize;
    /** 重新配置 **/
    function resetConfig(con){
        $.extend(config, con);
        path = config.path;
        minLeft = config.minLeft;
        min2Left = 2 * minLeft;
        maxMove = config.maxMove;
        minImageSize = config.size[0];
        betweenImageSize = config.size[1] - minImageSize;
        maxLeft = winSize.width - minLeft;
    }

    /** 创建飘雪 **/
    function createSnow(){
        var $snow = $("<img />");
        $snow.attr({
            src: path,
            moveTop: (0.5 + Math.random()) * maxMove.y,
            moveLeft: Math.random() * maxMove.x
        });
        resetSnow($snow);
        $snow.data("position",  getSnowOffset($snow));
        return $snow;
    }

    /** 重设飘雪的位置 **/
    function resetSnow($s){
        var size = minImageSize + Math.random() * betweenImageSize;
        var op
        $s.css({
            position: "fixed",
            top: -maxMove.y,
            left: minLeft + Math.floor(winSize.width * Math.random() - min2Left),
            width: size,
            height: size,
            "z-index": 9999,
            "pointer-events": "none"
        });
        if(config.opacity){
            var op1 = config.opacity / 100, op2 = 1 - op1;
            $s.css({
                opacity: op1 + Math.random() * op2
            });
        }
        $s.data("direction", Math.random() < 0.5 ? -1 : 1);
    }

    /** 获取现在的方向 **/
    function getDirection($s){
        return parseInt($s.data("direction"));
    }

    /** 获得飘雪的坐标 **/
    function getSnowOffset($s){
        return {
            top: parseInt($s.css("top")),
            left: parseInt($s.css("left")),
            moveLeft: parseInt($s.attr("moveLeft")),
            moveTop: parseInt($s.attr("moveTop"))
        };
    }

    /** 重设雪花的列表信息 **/
    function resetSnowListPos(list){
        var key = "position";
        for(var i = 0, max = list.length; i < max; i++){
            var $s = list[i];
            // 发现越界，就应该修正了
            var offset = getSnowOffset($s);
            var width = $s.width(), height = $s.height();
            if(offset.top >= winSize.height + height){
                resetSnow($s);
            }else if(offset.left <= minLeft - width){
                // 如果超过左边界限，应该重设left的坐标了
                $s.css({
                    left: winSize.width
                });
            }else if(offset.left >= maxLeft){
                // 如果超过右边界限
                $s.css({
                    left: -width
                });
            }
            $s.data(key, getSnowOffset($s));
        }
    }

    /** 飘雪动画 **/
    var initTime = null; // 初始时间
    function animateSnow(list, totalTime){
        var time2 = new Date;
        if(!initTime){
            initTime = time2;
        }
        var curTime = time2 - initTime;
        // 超出动画时间，就重新设置一遍信息
        if(curTime > totalTime){
            initTime = time2;
            curTime = 0;
            // 重设所有position信息
            resetSnowListPos(list);
        }
        // 运动吧！少年
        for(var i = 0, max = list.length; i < max; i++){
            var $s = list[i];
            // 移动
            moveSnow($s, curTime, totalTime);
        }
    }
    /** 绘画雪的位置 **/
    function moveSnow($s, curTime, totalTime){
        // 计算运动位置
        var offset = $s.data("position"), percent = curTime / totalTime;
        var top = offset.top + offset.moveTop * percent,
            left = offset.left + getDirection($s) * offset.moveLeft * percent;
        $s.css({
            top: top,
            left: left
        });
    }

    $(window).resize(function(){
        winSize = {
            width: $html.width(),
            height: window.innerHeight
        };
        resetConfig();
    }).trigger("resize");

    // $snowList雪的列表, timer是动画计时器
    var $snowList = [], timer;
    /**
     * 开始下雪
     * #param con 配置 {count: 雪花数量, time: 雪花移动间隔, path: 雪花路径, size: [min,max]}
     **/
    $.startSnow = function(con){
        if ($.browser.msie && $.browser.version<=6) return;
        resetConfig(con); // 重新配置参数
        for(var i = 0; i < config.count; i++){
            setTimeout(function(){
                var s = createSnow();
                s.appendTo($("body"));
                $snowList.push(s);
            }, config.time / 2 * i);
        }

        timer = setInterval(function(){
            animateSnow($snowList, config.time);
        }, 1000 / config.frameRate);
    }
    $.stopSnow = function(){
        clearInterval(timer);
        for(var i in $snowList){
            $snowList[i].remove();
        }
    }

}($);
