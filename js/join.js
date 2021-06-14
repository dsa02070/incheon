$(function () {
    // tab button event
    $('.tab_btn ul li').click(function (e) {
        e.preventDefault()
        $('.tab_btn ul li').removeClass('on');
        $(this).addClass('on');
    });
});