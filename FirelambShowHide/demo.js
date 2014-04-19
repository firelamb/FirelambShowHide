$(document).ready(function () {
    $("#btnclickevent").FirelambShowHide({
        eventType: "click"
       , autoToggle: "true"
        , target: ["#clickevent"]

    });
    $("#txtBlurevent").FirelambShowHide({
        eventType: "blur"
      , autoToggle: "true"
       , target: ["#Blurevent"]

    });
    $("#txtchangeevent").FirelambShowHide({
        eventType: "change"
     , autoToggle: "true"
      , target: ["#changeevent"]

    });
    $("#txtfocusevent").FirelambShowHide({
        eventType: "focus"
     , autoToggle: "true"
      , target: ["#focusevent"]

    });
    
    $("#txtValueattr").FirelambShowHide({
        eventType: "change"
        , propKey: "value"
        ,propValue:"firelamb"
    , autoToggle: "false"
     , target: ["#Valueattr"]

    });
    $("#cbxCheckedAttr").FirelambShowHide({
        eventType: "change"
        , propKey: "checked"
        , propValue: "checked,true"
    , autoToggle: "false"
     , target: ["#CheckedAttr"]

    });
    $("#cbxCheckedAttr1").FirelambShowHide({
        eventType: "change"
       , propKey: "checked"
       , propValue: "checked,true"
   , autoToggle: "false"
    , target: ["#CheckedAttr1"]

    });
    $("#cbxCheckedAttr2").FirelambShowHide({
        eventType: "change"
     , propKey: "checked"
     , propValue: "checked,true"
 , autoToggle: "false"
  , target: ["#CheckedAttr3", "#CheckedAttr4"]

    });
    
    $("#txtcallevent").FirelambShowHide({
        eventType: "change"
     , propKey: "value"
     , propValue: "firelamb"
 , autoToggle: "false"
  , target: ["#callevent"]
        , callEvent: function () {
      
            if ($("#txtcallevent").prop("value") == "firelamb")
            {
                
                alert("you just typed firelamb.You can email to me.\n my email:firelamb@qq.com");
            }
        }

    });
    
    
});