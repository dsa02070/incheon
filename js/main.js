$(function () {

    // hbottom menu click event
    $('.all_menu').click(function (e) {
        e.preventDefault()
        $('.hbottom .menu_btn span:first-child').toggleClass('active01')
        $('.hbottom .menu_btn span:nth-child(2)').toggleClass('active02')
        $('.hbottom .menu_btn span:last-child').toggleClass('active03')
    })

    //swiper slider01
    let swiper01 = new Swiper(".main_slider01", {
        loop: true,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".first-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //swiper slider02
    let swiper02 = new Swiper(".main_slider02", {
        loop: true,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 3000,
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

    // .swiper slider tab menu event
    $(function () {
        $(".slider_area").css("display", "none");
        $(".slider_area:nth-of-type(1)").css("display", "block");
        $(".swiper_btn").on("click", function () {
            let thisIndex = $(this).index() + 1;
            $(".slider_area").css("display", "none");
            $(".slider_area:nth-of-type(" + thisIndex + ")").css("display", "block");
        });
    });

    // .swiper_btn .first_btn event
    $('.swiper_btn.first_btn').click(function () {
        swiper01.autoplay.start();
        swiper02.autoplay.stop();

        $('.first_btn .triangle').css('display', 'block');
        $('.swiper_btn.first_btn .first-pagination').css('display', 'block');
        $('.swiper_btn.first_btn .first-play').css('display', 'block');

        $('.swiper_btn.second_btn .second-pagination').css('display', 'none');
        $('.swiper_btn.second_btn .second-play').css('display', 'none');
        $('.second_btn .triangle').css('display', 'none');
    })
    // .swiper_btn .second btn event
    $('.swiper_btn.second_btn').click(function () {
        swiper02.autoplay.start();
        swiper01.autoplay.stop();

        $('.first_btn .triangle').css('display', 'none');
        $('.swiper_btn.first_btn .first-pagination').css('display', 'none');
        $('.swiper_btn.first_btn .first-play').css('display', 'none');

        $('.swiper_btn.second_btn .second-pagination').css('display', 'block');
        $('.swiper_btn.second_btn .second-play').css('display', 'block');
        $('.second_btn .triangle').css('display', 'block');
    })

    // .slider_area hover autoplay & stop
    $('.slider_area').mouseenter(function () {
        swiper01.autoplay.stop();
        swiper02.autoplay.stop();
    }).mouseleave(function () {
        swiper01.autoplay.start();
        swiper02.autoplay.start();
    })

    // swiper play button event
    $('.swiper-button-play').click(function () {
        if ($(this).find('img').attr('src') == './img/main/play.png') {
            $(this).find('img').attr('src', './img/main/pause.png');
        } else {
            $(this).find('img').attr('src', './img/main/play.png');
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