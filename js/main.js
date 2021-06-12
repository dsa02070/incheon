$(function () {
    // hbottom menu click event
    $('.all_menu').click(function (e) {
        e.preventDefault()
        $('.hbottom .menu_btn span:first-child').toggleClass('active01')
        $('.hbottom .menu_btn span:nth-child(2)').toggleClass('active02')
        $('.hbottom .menu_btn span:last-child').toggleClass('active03')
    })

    // #search_box focus, blur event (인천의 궁금증은 이곳에 삭제)
    $('#search_box').focus(function () {
        $('.placeholder').css('display', 'none');
    }).blur(function () {
        $('.placeholder').css('display', 'block');
        $('#search_box').val('')
    })

    //swiper slider
    let swiper01 = new Swiper(".main_slider01", {
        loop: true,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: true,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //swiper slider
    let swiper02 = new Swiper(".main_slider02", {
        loop: true,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: true,
        },
        pagination: {
            el: ".second-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".second-next",
            prevEl: ".second-prev",
        },
    });

    //swiper btn display event
    $('.slider_area:nth-child(2)').addClass('off');
    $('.first_btn').click(function () {
        $('.slider_area:nth-child(2)').addClass('off');
        $('.slider_area:nth-child(1)').removeClass('off');
    })
    $('.second_btn').click(function () {
        $('.slider_area:nth-child(1)').addClass('off');
        $('.slider_area:nth-child(2)').removeClass('off');
    })

    // .main_slider hover autoplay & stop
    $('.main_slider').mouseenter(function () {
        swiper.autoplay.stop();
    }).mouseleave(function () {
        swiper.autoplay.start();
    })

    // swiper play button event
    $('.swiper-button-play').click(function () {
        if ($(this).find('img').attr('src') == './img/main/play.png') {
            $(this).find('img').attr('src', './img/main/pause.png');
        } else {
            $(this).find('img').attr('src', './img/main/play.png');
        }
        if ($('.swiper-button-play').find('img').attr('src') == './img/main/play.png') {
            swiper01.autoplay.start();
            swiper02.autoplay.start();
        } else if ($('.swiper-button-play').find('img').attr('src') == './img/main/pause.png') {
            swiper01.autoplay.stop();
            swiper02.autoplay.stop();
        }
    })

    // news left_menu ul li event
    $('.left_menu ul li a').click(function (e) {
        e.preventDefault()
        $('.left_menu ul li a').removeClass('on')
        $(this).addClass('on')
    })

    // .sub_text text ellipsis
    const showText = 86;
    let elem = $(".sub_text");

    elem.each(function () {
        let content = $(this).html(); // 기존 텍스트
        let contentLeng = content.length; // 기존 텍스트 길이
        let lessText = content.substr(0, showText); // 보여줄 텍스트

        if (showText < contentLeng) {
            changeHtml = lessText + "<span>...<span>"
            $(this).html(changeHtml)
        }
    })
})