$(function () {
    //top_btn event
    $('.top_btn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })

    // #search_box focus, blur event
    $('#search_box').focus(function () {
        $('.placeholder').css('display', 'none');
    }).blur(function () {
        $('.placeholder').css('display', 'block');
        $('#search_box').val('')
    })

    // sub_html dropdown menu background event
    $('.dropdown_menu>.inner>ul').mouseenter(function () {
        $('.dropdown_menu>.bg').addClass('active')
    }).mouseleave(function () {
        $('.dropdown_menu>.bg').removeClass('active')
    })
})