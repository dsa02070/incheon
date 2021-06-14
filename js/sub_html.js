$(function () {
    // lnb click event
    $('.lnb>ul>li').click(function (e) {
        e.preventDefault()
        $('.lnb>ul>li').removeClass('on')
        $(this).addClass('on')
    })

    //lnb accordion event
    $('.accordion a').click(function () {
        if ($('+.submenu', this).css('display') == 'none') {
            $('.lnb .submenu').removeClass('active')
            $('+.submenu', this).addClass('active')
            $('.accordion a').attr('class', 'arrow')
            $(this).attr('class', 'arrow_up')
        } else {
            $('+.submenu', this).removeClass('active')
            $(this).attr('class', 'arrow')
        }
    })

    //lnb lnb submenu li event
    $('.lnb>ul>li>.submenu li').click(function (e) {
        e.preventDefault()
        $('.lnb>ul>li>.submenu li').removeClass('on')
        $(this).addClass('on')
    })
})