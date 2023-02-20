function showNotificationBar(message, duration, bgColor, txtColor, height) {

    duration = typeof duration !== 'undefined' ? duration : 12000;
    bgColor = typeof bgColor !== 'undefined' ? bgColor : "#A97AB8";
    txtColor = typeof txtColor !== 'undefined' ? txtColor : "#100A0A";
    height = typeof height !== 'undefined' ? height : 30;

    if ($('#notification-bar').length == 0) {
        var HTMLmessage = "<div class='notification-message' style='text-align:center; line-height: " + height + "px;'> " + message + " </div>";
        $('body').prepend("<div id='notification-bar' style='display:none; width:100%; height:" + height + "px; background-color: " + bgColor + "; position: fixed; top: 0px; font-size: 16px; left: 0px; z-index: 100; color: " + txtColor + ";border-bottom: 1px solid " + txtColor + ";'>" + HTMLmessage + "</div>");
    }

    $('#notification-bar').slideDown(function() {
        setTimeout(function() {
            $('#notification-bar').slideUp(function() {});
        }, duration);
    });
}

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    }

    if (window.matchMedia("only screen and (max-width: 760px)").matches) {
        return true;
    }

    if (('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/))) {
        return true;
    }

    return false;
}

if (isMobile() == false) {
    showNotificationBar('This website is also deployed on-chain at <a href="https://ronkahat.eth.limo/" target="_blank">ronkahat.eth</a>');
}

