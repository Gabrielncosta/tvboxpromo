jQuery(document).ready(function($){


    // accordion
    $('.questions .item .answer').on('click',function(){
        $('.questions .item .question').not($(this).next()).slideUp('fast');
        $('.questions .item .answer').not($(this)).parent().removeClass('active');
        $(this).parent().toggleClass('active');
        $(this).next('.question').slideToggle('fast');
    });


});