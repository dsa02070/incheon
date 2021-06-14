$(function () {
    //pagination event
    $('.pagination ul li:not(:has(img))').click(function (e) {
        e.preventDefault()
        $('.pagination ul li').removeClass("on")
        $(this).addClass('on')
    })
})