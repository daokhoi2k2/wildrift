$('*').ready(function (){
    var slideShow = $(".slide-show__list");
    var slideShowWidth = slideShow.innerWidth();
    var _1percentOfWidth = slideShowWidth / 100; // số px của 1% chều rộng hiện tại
    var _1imgOfWidth = 520 / _1percentOfWidth; // %width của 1 hình
    var _fullImgOfWidth = _1imgOfWidth * 8; // %width của tất cả 8 hình
    var slideLeft = $(".slide-show__item--showLeft");
    slideLeft.css("left", `-${_fullImgOfWidth}%`);

    // Tính transform
    var remainingWidth = slideShowWidth - 520;
    var remainingWidthShare = remainingWidth / 2;
    var remainingPercent = remainingWidthShare / _1percentOfWidth;   // Percent của phần được chia (2 phần phụ)
    slideShow.css("transform", `translate3d(${remainingPercent}%, 0px, 0px)`);

    // Biến để prev next
    var currentTranslate3d = slideShow.css("transform").split(", ")[4]; /* Lấy TranslateX hiện tại (*px) */
    var currentTranslate3dPercent = currentTranslate3d / _1percentOfWidth; // Vị trí translateX hiện tại
    const Translate3dPercentConst = currentTranslate3dPercent;
    console.log(currentTranslate3d);
    // Reponsive slideShow khi resize
    // $(window).resize(function() {
    //     var slideShow = $(".slide-show__list");
    //     var slideShowWidth = slideShow.innerWidth();
    //     var _1percentOfWidth = slideShowWidth / 100; 
    //     var _1imgOfWidth = 520 / _1percentOfWidth;
    //     var _fullImgOfWidth = _1imgOfWidth * 8;
    //     var slideLeft = $(".slide-show__item--showLeft"); /* tính vị trí để đẩy 2 tấm hình ra đằng sau */
    //     slideLeft.css("left",`-${_fullImgOfWidth}%`);
    //     slideShow.addClass("notransition");

    //     // Tính transform
    //     var remainingWidth = slideShowWidth - 520;
    //     var remainingWidthShare = remainingWidth / 2;
    //     var remainingPercent = remainingWidthShare / _1percentOfWidth;   // Percent của phần được chia (2 phần phụ)
    //     slideShow.css("transform", `translate3d(${remainingPercent}%, 0px, 0px)`);

    //     // Bắt sự kiện prev & next SlideShow
    
    //     var currentTranslate3d = slideShow.css("transform").split(", ")[4]; /* Lấy TranslateX hiện tại (*px) */
    //     var currentTranslate3dPercent = currentTranslate3d / _1percentOfWidth; // Vị trí translateX hiện tại
        
        
    //     // Ghi đè giá trị nếu resize
    //     $(".wrapper-item-active__btn-icon.wrapper-item-active___btn--prev").click(function() {
    //         currentTranslate3dPercent += _1imgOfWidth; // Trừ số % theo vị trí hiện tại để nhảy hình
    //         slideShow.css("transform", `translate3d(${currentTranslate3dPercent}%, 0px, 0px)`);
    //         currentSlide -= 1;
    //         infNextPrev("-");
    //         console.log("currentTranslate3d",currentTranslate3d);
    //     });
    //     $(".wrapper-item-active__btn-icon.wrapper-item-active___btn--next").click(function() {
    //         currentTranslate3dPercent -= _1imgOfWidth; // Trừ số % theo vị trí hiện tại để nhảy hình
    //         slideShow.css("transform", `translate3d(${currentTranslate3dPercent}%, 0px, 0px)`);

    //         console.log("currentTranslate3d",currentTranslate3d);
    //         currentSlide += 1;
    //         infNextPrev("+");
    //         // slideShow.css("transform", `translate3d(${remainingPercent}%, 0px, 0px)`);
    //     });        
    // })
    $(window).resize(function () {
        location.reload();
        slideShow = $(".slide-show__list");
        slideShowWidth = slideShow.innerWidth();
        _1percentOfWidth = slideShowWidth / 100; // số px của 1% chều rộng hiện tại
        _1imgOfWidth = 520 / _1percentOfWidth; // %width của 1 hình
        _fullImgOfWidth = _1imgOfWidth * 8; // %width của tất cả 8 hình
        slideLeft = $(".slide-show__item--showLeft");
        slideLeft.css("left", `-${_fullImgOfWidth}%`);
    
        // Tính transform
        remainingWidth = slideShowWidth - 520;
        remainingWidthShare = remainingWidth / 2;
        remainingPercent = remainingWidthShare / _1percentOfWidth;   // Percent của phần được chia (2 phần phụ)
        slideShow.css("transform", `translate3d(${remainingPercent}%, 0px, 0px)`);
    
        // Biến để prev next
        currentTranslate3d = slideShow.css("transform").split(", ")[4]; /* Lấy TranslateX hiện tại (*px) */
        currentTranslate3dPercent = currentTranslate3d / _1percentOfWidth; // Vị trí translateX hiện tại
        const Translate3dPercentConst = currentTranslate3dPercent;
        console.log(currentTranslate3d); 

        slideShowList = $(".slide-show__item");
        currentSlide = 0;
        $(".wrapper-item-active__btn-icon.wrapper-item-active___btn--prev").click(function() {
            currentTranslate3dPercent += _1imgOfWidth; // Trừ số % theo vị trí hiện tại để nhảy hình
            slideShow.css("transform", `translate3d(${currentTranslate3dPercent}%, 0px, 0px)`);
            currentSlide -= 1;
            infNextPrev("-");
            
        });
        $(".wrapper-item-active__btn-icon.wrapper-item-active___btn--next").click(function() {
            currentTranslate3dPercent -= _1imgOfWidth; // Trừ số % theo vị trí hiện tại để nhảy hình
            slideShow.css("transfor m", `translate3d(${currentTranslate3dPercent}%, 0px, 0px)`);
            
            console.log("currentTranslate3d",_1imgOfWidth);
            currentSlide += 1;
            infNextPrev("+");
        });
    
    
        function infNextPrev(move) {
            switch(currentSlide) {
                case -5:
                    $(slideShowList[4]).removeClass("slide-show__item--active");
                    $(slideShowList[0]).addClass("slide-show__item--active");
                    currentSlide = 0;
                     // Thay đổi vị trí
                     currentTranslate3dPercent = Translate3dPercentConst;
                     slideShow.css("transform", `translate3d(${Translate3dPercentConst}%, 0px, 0px)`);
                     $(slideShowList[5]).attr("style",`left: -${_fullImgOfWidth}%`);
                     $(slideShowList[6]).attr("style",`left: -${_fullImgOfWidth}%`);
                     $(slideShowList[7]).attr("style",`left: -${_fullImgOfWidth}%`);
                    
                     $(slideShowList[0]).attr("style",`left: 0%`);
                     $(slideShowList[1]).attr("style",`left: 0%`);
                     $(slideShowList[2]).attr("style",`left: 0%`);
                     $(slideShowList[3]).attr("style",``);
                     $(slideShowList[4]).attr("style",``);
                   
                break;
                case -4: 
                    console.log("case -4");
                    $(slideShowList[5]).removeClass("slide-show__item--active");
                    $(slideShowList[3]).removeClass("slide-show__item--active");
                    $(slideShowList[4]).addClass("slide-show__item--active");
                    // Thay đổi vị trí 
                    $(slideShowList[2]).attr("style",`left: -${_fullImgOfWidth}%`);
                    $(slideShowList[7]).attr("style",`left: 0%`);
                    break;
                case -3: 
                    console.log("case -3");
                    $(slideShowList[6]).removeClass("slide-show__item--active");
                    $(slideShowList[4]).removeClass("slide-show__item--active");
                    $(slideShowList[5]).addClass("slide-show__item--active");
                    // Thay đổi vị trí 
                    $(slideShowList[3]).attr("style",`left: -${_fullImgOfWidth}%`);
                    break;
                case -2: 
                    console.log("case -2");
                    $(slideShowList[5]).removeClass("slide-show__item--active");
                    $(slideShowList[7]).removeClass("slide-show__item--active");
                    $(slideShowList[6]).addClass("slide-show__item--active");
                    // Thay đổi vị trí 
                    $(slideShowList[4]).attr("style",`left: -${_fullImgOfWidth}%`);
                    break;
                case -1: 
                    console.log("case -1");
                    $(slideShowList[0]).removeClass("slide-show__item--active");
                    $(slideShowList[6]).removeClass("slide-show__item--active");
                    $(slideShowList[7]).addClass("slide-show__item--active");
                    // Thay đổi vị trí
    
                    $(slideShowList[5]).attr("style",`left: -${_fullImgOfWidth}%`);
                   
                break;
                case 0:
                    console.log("case 0");
                    
                    $(slideShowList[7]).removeClass("slide-show__item--active");
                    $(slideShowList[1]).removeClass("slide-show__item--active");
                    $(slideShowList[0]).addClass("slide-show__item--active");
                    // $(slideShowList[0]).removeClass("slide-show__item--active");
                    // $(slideShowList[1]).addClass("slide-show__item--active");
                    // Chuyển đổi vị trí
                    $(slideShowList[6]).attr("style",`left: -${_fullImgOfWidth}%`);
                    $(slideShowList[5]).attr("style",`left: 0%`);
                break;
                case 1:
                    console.log(slideShowList[1]);
                    // Thay đổi opacity
                    $(slideShowList[0]).removeClass("slide-show__item--active");
                    $(slideShowList[2]).removeClass("slide-show__item--active");
                    $(slideShowList[1]).addClass("slide-show__item--active");
    
                    // Chuyển đổi vị trí 
                    $(slideShowList[6]).attr("style","left: 0%");
                    $(slideShowList[7]).attr("style",`left: -${_fullImgOfWidth}%`);
                    console.log("case 1");
                break;
                case 2:
                    $(slideShowList[1]).removeClass("slide-show__item--active");
                    $(slideShowList[3]).removeClass("slide-show__item--active");
                    $(slideShowList[2]).addClass("slide-show__item--active");
                    console.log("case 2");
    
                    // Chuyển đổi vị trí
                    $(slideShowList[7]).attr("style","left: 0%");
                break;
                case 3:
                    $(slideShowList[2]).removeClass("slide-show__item--active");
                    $(slideShowList[4]).removeClass("slide-show__item--active");
                    $(slideShowList[3]).addClass("slide-show__item--active");
                    console.log("case 3");
                break;
                case 4:
                    $(slideShowList[3]).removeClass("slide-show__item--active");
                    $(slideShowList[5]).removeClass("slide-show__item--active");
                    $(slideShowList[4]).addClass("slide-show__item--active");
                    console.log("case 4");
                break;
                case 5:
                    $(slideShowList[4]).removeClass("slide-show__item--active");
                    $(slideShowList[6]).removeClass("slide-show__item--active");
                    $(slideShowList[5]).addClass("slide-show__item--active");
                    console.log("case 5");
                break;
                case 6:
                    $(slideShowList[5]).removeClass("slide-show__item--active");
                    $(slideShowList[7]).removeClass("slide-show__item--active");
                    $(slideShowList[6]).addClass("slide-show__item--active");
    
                    // Thay đổi vị trí
                    $(slideShowList[0]).attr("style",`left: ${_fullImgOfWidth}%`);
                    console.log("case 6");
                break;
                case 7:
                    $(slideShowList[6]).removeClass("slide-show__item--active");
                    // $(slideShowList[8]).removeClass("slide-show__item--active");
                    $(slideShowList[7]).addClass("slide-show__item--active");
                    console.log("case 7");
    
                    // Thay đổi vị trí
                    $(slideShowList[1]).attr("style",`left: ${_fullImgOfWidth}%`);
                break;
                case 8:
                    $(slideShowList[7]).removeClass("slide-show__item--active");
                    $(slideShowList[0]).addClass("slide-show__item--active");
                    currentSlide = 0;
                     // Thay đổi vị trí
                     currentTranslate3dPercent = Translate3dPercentConst;
                     slideShow.css("transform", `translate3d(${Translate3dPercentConst}%, 0px, 0px)`);
                     $(slideShowList[0]).attr("style","left: 0%");
                     $(slideShowList[1]).attr("style","left: 0%");
                     $(slideShowList[2]).attr("style","left: 0%");
                    
                     $(slideShowList[6]).attr("style",`left: -${_fullImgOfWidth}%`);
                     $(slideShowList[7]).attr("style",`left: -${_fullImgOfWidth}%`);
                   
                break;
              
            };
        }

       
    })

    var slideShowList = $(".slide-show__item");
    var currentSlide = 0;
    $(".wrapper-item-active__btn-icon.wrapper-item-active___btn--prev").click(function() {
        currentTranslate3dPercent += _1imgOfWidth; // Trừ số % theo vị trí hiện tại để nhảy hình
        slideShow.css("transform", `translate3d(${currentTranslate3dPercent}%, 0px, 0px)`);
        currentSlide -= 1;
        infNextPrev("-");
        
    });
    $(".wrapper-item-active__btn-icon.wrapper-item-active___btn--next").click(function() {
        currentTranslate3dPercent -= _1imgOfWidth; // Trừ số % theo vị trí hiện tại để nhảy hình
        slideShow.css("transform", `translate3d(${currentTranslate3dPercent}%, 0px, 0px)`);
        
        console.log("currentTranslate3d",_1imgOfWidth);
        currentSlide += 1;
        infNextPrev("+");
    });


    function infNextPrev(move) {
        switch(currentSlide) {
            case -5:
                $(slideShowList[4]).removeClass("slide-show__item--active");
                $(slideShowList[0]).addClass("slide-show__item--active");
                currentSlide = 0;
                 // Thay đổi vị trí
                 currentTranslate3dPercent = Translate3dPercentConst;
                 slideShow.css("transform", `translate3d(${Translate3dPercentConst}%, 0px, 0px)`);
                 $(slideShowList[5]).attr("style",`left: -${_fullImgOfWidth}%`);
                 $(slideShowList[6]).attr("style",`left: -${_fullImgOfWidth}%`);
                 $(slideShowList[7]).attr("style",`left: -${_fullImgOfWidth}%`);
                
                 $(slideShowList[0]).attr("style",`left: 0%`);
                 $(slideShowList[1]).attr("style",`left: 0%`);
                 $(slideShowList[2]).attr("style",`left: 0%`);
                 $(slideShowList[3]).attr("style",``);
                 $(slideShowList[4]).attr("style",``);
               
            break;
            case -4: 
                console.log("case -4");
                $(slideShowList[5]).removeClass("slide-show__item--active");
                $(slideShowList[3]).removeClass("slide-show__item--active");
                $(slideShowList[4]).addClass("slide-show__item--active");
                // Thay đổi vị trí 
                $(slideShowList[2]).attr("style",`left: -${_fullImgOfWidth}%`);
                $(slideShowList[7]).attr("style",`left: 0%`);
                break;
            case -3: 
                console.log("case -3");
                $(slideShowList[6]).removeClass("slide-show__item--active");
                $(slideShowList[4]).removeClass("slide-show__item--active");
                $(slideShowList[5]).addClass("slide-show__item--active");
                // Thay đổi vị trí 
                $(slideShowList[3]).attr("style",`left: -${_fullImgOfWidth}%`);
                break;
            case -2: 
                console.log("case -2");
                $(slideShowList[5]).removeClass("slide-show__item--active");
                $(slideShowList[7]).removeClass("slide-show__item--active");
                $(slideShowList[6]).addClass("slide-show__item--active");
                // Thay đổi vị trí 
                $(slideShowList[4]).attr("style",`left: -${_fullImgOfWidth}%`);
                break;
            case -1: 
                console.log("case -1");
                $(slideShowList[0]).removeClass("slide-show__item--active");
                $(slideShowList[6]).removeClass("slide-show__item--active");
                $(slideShowList[7]).addClass("slide-show__item--active");
                // Thay đổi vị trí

                $(slideShowList[5]).attr("style",`left: -${_fullImgOfWidth}%`);
               
            break;
            case 0:
                console.log("case 0");
                
                $(slideShowList[7]).removeClass("slide-show__item--active");
                $(slideShowList[1]).removeClass("slide-show__item--active");
                $(slideShowList[0]).addClass("slide-show__item--active");
                // $(slideShowList[0]).removeClass("slide-show__item--active");
                // $(slideShowList[1]).addClass("slide-show__item--active");
                // Chuyển đổi vị trí
                $(slideShowList[6]).attr("style",`left: -${_fullImgOfWidth}%`);
                $(slideShowList[5]).attr("style",`left: 0%`);
            break;
            case 1:
                console.log(slideShowList[1]);
                // Thay đổi opacity
                $(slideShowList[0]).removeClass("slide-show__item--active");
                $(slideShowList[2]).removeClass("slide-show__item--active");
                $(slideShowList[1]).addClass("slide-show__item--active");

                // Chuyển đổi vị trí 
                $(slideShowList[6]).attr("style","left: 0%");
                $(slideShowList[7]).attr("style",`left: -${_fullImgOfWidth}%`);
                console.log("case 1");
            break;
            case 2:
                $(slideShowList[1]).removeClass("slide-show__item--active");
                $(slideShowList[3]).removeClass("slide-show__item--active");
                $(slideShowList[2]).addClass("slide-show__item--active");
                console.log("case 2");

                // Chuyển đổi vị trí
                $(slideShowList[7]).attr("style","left: 0%");
            break;
            case 3:
                $(slideShowList[2]).removeClass("slide-show__item--active");
                $(slideShowList[4]).removeClass("slide-show__item--active");
                $(slideShowList[3]).addClass("slide-show__item--active");
                console.log("case 3");
            break;
            case 4:
                $(slideShowList[3]).removeClass("slide-show__item--active");
                $(slideShowList[5]).removeClass("slide-show__item--active");
                $(slideShowList[4]).addClass("slide-show__item--active");
                console.log("case 4");
            break;
            case 5:
                $(slideShowList[4]).removeClass("slide-show__item--active");
                $(slideShowList[6]).removeClass("slide-show__item--active");
                $(slideShowList[5]).addClass("slide-show__item--active");
                console.log("case 5");
            break;
            case 6:
                $(slideShowList[5]).removeClass("slide-show__item--active");
                $(slideShowList[7]).removeClass("slide-show__item--active");
                $(slideShowList[6]).addClass("slide-show__item--active");

                // Thay đổi vị trí
                $(slideShowList[0]).attr("style",`left: ${_fullImgOfWidth}%`);
                console.log("case 6");
            break;
            case 7:
                $(slideShowList[6]).removeClass("slide-show__item--active");
                // $(slideShowList[8]).removeClass("slide-show__item--active");
                $(slideShowList[7]).addClass("slide-show__item--active");
                console.log("case 7");

                // Thay đổi vị trí
                $(slideShowList[1]).attr("style",`left: ${_fullImgOfWidth}%`);
            break;
            case 8:
                $(slideShowList[7]).removeClass("slide-show__item--active");
                $(slideShowList[0]).addClass("slide-show__item--active");
                currentSlide = 0;
                 // Thay đổi vị trí
                 currentTranslate3dPercent = Translate3dPercentConst;
                 slideShow.css("transform", `translate3d(${Translate3dPercentConst}%, 0px, 0px)`);
                 $(slideShowList[0]).attr("style","left: 0%");
                 $(slideShowList[1]).attr("style","left: 0%");
                 $(slideShowList[2]).attr("style","left: 0%");
                
                 $(slideShowList[6]).attr("style",`left: -${_fullImgOfWidth}%`);
                 $(slideShowList[7]).attr("style",`left: -${_fullImgOfWidth}%`);
               
            break;
          
        };
    }
});