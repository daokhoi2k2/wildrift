$("*").ready(function() {
    // Bật menu khi nhấn bar
    $(".header__nav-mobile").click(function() {
        $(".aside__nav-mobile").css("display", "block");
    });
    // Tắt menu khi nhấn close
    $(".aside__nav-item-close").click(function() {
        $(".aside__nav-mobile").css("display", "none");
    })
})