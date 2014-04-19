/**
jQuery Show Hide
@Verson 1.0.0
@UpdateDate 2014-04-04
@Url 
@Author Firelamb
@Email firelamb@qq.com
**/
(function ($) {
    var defaults = {
        eventType: "change",//事件类型 如click,change,blur keydown等
        propKey: "checked",
        propValue: "checked,true",//
        autoToggle: "false",//是否自动切换显示，隐藏.当autotoggle为true时 val设置无效
        target: [],//需要显示，隐藏的选择器.字符串数组形式，请勿超过两个元素
        callEvent: function () { }//触发eventType这个事件的回调函数

    };

    $.fn.FirelambShowHide = function (options) {

        var opts = $.extend({}, defaults, options || {});

        $(this).on(opts.eventType, function () {

            var $t, $prop_;


            $t = opts.target;


            if (opts.propValue.indexOf(",") > -1)//说明属性值有两个以上的值
                $prop_ = opts.propValue.split(",");
            else
                $prop_ = opts.propValue


            if (opts.autoToggle == "true") {

                //target个数大于1
                if ($t.length > 1) {
                    for (var i = 0; i < $t.length ; i++) {
                        $($t[i]).toggle();
                    }

                }
                else {
                    $($t[0]).toggle();
                }
                event.preventDefault();
            }
            else {

                var propkeyValue = $(this).prop(opts.propKey).toString();

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
            opts.callEvent();
        });
        return this;
    };

})(jQuery);

//function 