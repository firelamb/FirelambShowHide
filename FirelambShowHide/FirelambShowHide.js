/**
FirelambShowHide
@Verson 1.0.2
@UpdateDate 2014-10-24
@Url 
@Author Firelamb
@Email firelamb@qq.com
**/
(function ($) {
    var defaults = {
        eventType: "change",//事件类型 如click,change,blur keydown等
        propKey: "checked",//属性
        propValue: "checked,true",//属性值，当超过一个属性值时以‘,’分割
        autoToggle: false,//是否自动切换显示，隐藏.当autotoggle为true时 propValue设置无效
        // target: "",//需要显示，隐藏的选择器，当有两个选择器时以‘,’分割，请勿超过两个选择器
        showTargets1: [],//(不能为空)需要显示的对象选择器数组1,当控件属性值等于propValue中的值是showTargets1数组中的对象显示,否则隐藏
        showTargets2: [],//(可以为空)需要显示的对象选择器数组2,当控件属性值不等于propValue中的值是showTargets2数组中的对象显示,否则隐藏
        beforeEvent: function () { },//在触发eventType事件之前执行的函数
        callEvent: function () { }//触发eventType这个事件的回调函数

    };
    var beginDoShowHide = function (obj, opts) {
        opts.beforeEvent();

        if (opts.autoToggle)//自动切换
        {
            for (var i = 0; i < opts.showTargets1.length; i++) {
                $(opts.showTargets1[i]).toggle();
            }
            if (opts.showTargets2.length > 0) {
                for (var i = 0; i < opts.showTargets2.length; i++) {
                    $(opts.showTargets2[i]).toggle();
                }
            }
        }
        else {
            //#region
            var objValue = $(obj).attr(opts.propKey);//对应的控件的值
            if ($(obj).attr("type") != undefined &&
                (($(obj).attr("type") == "radio" &&
                $(obj).length > 0)
                ||
                  $(obj).attr("type") == "checkbox"
                )
                )//是radiobuttonlist或     //是(单个)checkbox
            {
                var at = $(obj).attr("name");
                var newat = "input[name='" + at + "']:checked";
                objValue = $(newat).attr(opts.propKey);
            }


            var objArrayValue = new Array();//和控件对应属性需要比对的值

            if (opts.propValue.indexOf(",") > -1)//说明是多个需要比对的属性值
            {
                objArrayValue = opts.propValue.split(",");
            }
            else {
                //只有一个属性值
                objArrayValue[0] = opts.propValue;
            }

            var flag;

            if ($.inArray(objValue, objArrayValue) > -1)
                flag = true;
            else
                flag = false;

            if (flag)//说明控件的值符合需要比对的属性值
            {

                for (var i = 0; i < opts.showTargets1.length; i++) {
                    $(opts.showTargets1[i]).show();
                }
                if (opts.showTargets2.length > 0) {
                    for (var i = 0; i < opts.showTargets2.length; i++) {
                        $(opts.showTargets2[i]).hide();
                    }
                }
            }
            else {
                for (var i = 0; i < opts.showTargets1.length; i++) {
                    $(opts.showTargets1[i]).hide();
                }
                if (opts.showTargets2.length > 0) {
                    for (var i = 0; i < opts.showTargets2.length; i++) {
                        $(opts.showTargets2[i]).show();

                    }
                }
            }
            //#endregion
        }


    }




    $.fn.FirelambShowHide = function (options) {

        var opts = $.extend({}, defaults, options || {});
        return this.each(function () {
            //#region 页面加载的时候判断是否已经符合propValue
            beginDoShowHide($(this), opts);
            //#endregion

            $(this).on(opts.eventType, function () {
                beginDoShowHide($(this), opts);
                opts.callEvent();
            });
        });
    };


})(jQuery);

//function 
