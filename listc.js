$("#customSwitch4").change(function(){
    $("#valueOfSwitch4").html("false");
    if ($(this).is(':checked')) {
        $("#valueOfSwitch4").html("true");
    }
});