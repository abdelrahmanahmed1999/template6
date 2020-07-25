/*global $,jquery,alert*/

$(document).ready(function () {
    "use strict";

    /* start function to add nicescroll */

    $('html').niceScroll();

    /* end function to add nicescroll */


    /* start function to make carousel take 5 sec to move to another images */

    $('.carousel').carousel({
        interval:5000
    });

    /* end function to make carousel take 5 sec to move to another images */


    /* start function to show & hide color option */

    $('.gear-check').click(function () {
        "use strict";

        $('.color-option').fadeToggle();
    });

     /* end function to show & hide color option */
   

    /* start function to change color in li */


    var liColor=$('.option-box ul li');
    liColor
    .eq(0).css("background","#E41B17").end()
    .eq(1).css("background","dodgerblue").end()
    .eq(2).css("background","green").end()
    .eq(3).css("background","yellow").end()
    .eq(4).css("background","pink").end()

    liColor.click(function () {
        "use strict";

        $('link[href*="theme"]').attr('href',$(this).attr('data-value'));
    });

    /* end function to change color in li */


    /* start function to show icon*/        

    var scroll='#scroll-top';

    $(window).scroll(function () {
        "use strict";
     $(this).scrollTop() >= 700 ? $(scroll).show() : $(scroll).hide(); 
    });
    /* end function to show icon*/        


    /* start function to sroll up*/

    $(scroll).click(function () {
        "use strict";
    $('html,body').animate({scrollTop : 0} , 500);
    });


    /* end function to sroll up*/

});


    /* start function to hide l loading */

    $(window).load(function () {
        "use strict";
        $('.loading .spinner').fadeOut(500, function () {
            "use strict";
                $(this).parent().fadeOut(500, function () {
                    "use strict";
                    $('body').css('overflow','auto');
                    $(this).remove();
                });
        
        });

    });

    /* end function to hide l loading */
