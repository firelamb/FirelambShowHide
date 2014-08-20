﻿/**
FirelambShowHide
@Verson 1.0.1
@UpdateDate 2014-08-18
@Url 
@Author Firelamb
@Email firelamb@qq.com
**/
(function ($) {
    var defaults = {
        eventType: "change",//事件类型 如click,change,blur keydown等
        propKey: "checked",
        propValue: "checked,true",//属性值，当超过一个属性值时以‘,’分割
        autoToggle: "false",//是否自动切换显示，隐藏.当autotoggle为true时 val设置无效
        target: "",//需要显示，隐藏的选择器，当有两个选择器时以‘,’分割，请勿超过两个选择器
        callEvent: function () { }//触发eventType这个事件的回调函数

    };
    var beginDo = function (obj, opts) {

        var $t, $prop_;

        var propkeyValue = $(obj).prop(opts.propKey).toString();

        if (opts.target.indexOf(",") > -1) //说明taget是数组，存在两个选择器
            $t = opts.target.split(',');
        else
            $t = $(opts.target);

        if (opts.propValue.indexOf(",") > -1)//说明属性值有两个以上的值
            $prop_ = opts.propValue.split(",");
        else
            $prop_ = opts.propValue;

        if (opts.autoToggle == "true") {

            if (opts.target.indexOf(",") > -1) {
                $($t[0]).toggle();
                $($t[1]).toggle();
            }
            else {
                $($t).toggle();
            }
            event.preventDefault();
        }
        else {

            if (opts.propValue != undefined && opts.propValue != "") {

                var flag;

                ///#region
                if (opts.target.indexOf(",") > -1) {

                    if (opts.propValue.indexOf(",") > -1) {
                        if ($.inArray(propkeyValue, $prop_) > -1)
                            flag = true
                        else
                            flag = false;
                    }
                    else {
                        if (propkeyValue == $prop_) flag = true
                        else flag = false;
                    }

                    if (flag) {
                        $($t[0]).show();
                        $($t[1]).hide();
                    }
                    else {
                        $($t[0]).hide();
                        $($t[1]).show();
                    }
                }
                else {

                    if (opts.propValue.indexOf(",") > -1) {
                        if ($.inArray(propkeyValue, $prop_) > -1)
                            flag = true
                        else
                            flag = false;
                    }
                    else {
                        if (propkeyValue == $prop_) flag = true
                        else flag = false;
                    }


                    if (flag) {
                        $($t).show();
                    }
                    else {
                        $($t).hide();
                    }
                }
                ///#endregion
                event.preventDefault();
            }
        }
    }

    $.fn.FirelambShowHide = function (options) {

        var opts = $.extend({}, defaults, options || {});
        return this.each(function () {
            //#region 页面加载的时候判断是否已经符合propValue
            beginDo($(this), opts);
            //#endregion

            $(this).on(opts.eventType, function () {
                beginDo($(this), opts);
                opts.callEvent();
            });
        });
    };


})(jQuery);

//function 
