$(function () {
    window.addEventListener('scroll', () => {

        let srcollBar = window.scrollY;

        if (srcollBar > 0) {
            $('.header').css('background-color', '#fff');
            $('.header .inner .logo img').attr('src', 'img/logo.png');
            $('.button_wrap .mypage img').attr('src', 'img/mypage.png');
            $('.button_wrap .cart img').attr('src', 'img/cart.png');
            $('.nav_pc > .gnb .depth01').css('color', '#6F8496');
            $('.button_wrap .search_box input').css('background', 'url("img/search.png") right 10px center / auto 18px no-repeat');
            $('.button_wrap .search_box input').css('border', '1px solid #6F8496');
            $('.button_wrap .search_box input').css('color', '#555');
            $('.nav_btn img').attr('src', 'img/menu.png');

        } else {
            $('.header').css('background-color', 'transparent');
            $('.header .inner .logo img').attr('src', 'img/logo_white.png');
            $('.button_wrap .mypage img').attr('src', 'img/mypage_wh.png');
            $('.button_wrap .cart img').attr('src', 'img/cart_wh.png');
            $('.nav_pc > .gnb .depth01').css('color', '#fff');
            $('.button_wrap .search_box input').css('background', 'url("img/search_wh.png") right 10px center / auto 18px no-repeat');
            $('.button_wrap .search_box input').css('border', '1px solid #fff');
            $('.nav_btn img').attr('src', 'img/menu_wh.png');
        }
    });

    let navHeight = $('.depth02').height();
    $('.nav_bg').css('height', navHeight + 100);

    $('.nav_pc > .gnb .depth01').mouseenter(function () {
        $('.nav_pc > .gnb .depth02').stop().slideDown();
        $('.nav_bg').stop().slideDown();
        $('.header').css('background-color', '#fff');
        $('.header .inner .logo img').attr('src', 'img/logo.png');
        $('.button_wrap .mypage img').attr('src', 'img/mypage.png');
        $('.button_wrap .cart img').attr('src', 'img/cart.png');
        $('.nav_pc > .gnb .depth01').css('color', '#6F8496');
        $('.button_wrap .search_box input').css('background', 'url("img/search.png") right 10px center / auto 18px no-repeat');
        $('.button_wrap .search_box input').css('border', '1px solid #6F8496');
        $('.button_wrap .search_box input').css('color', '#555');
    });

    $('.nav_bg, .depth02').mouseleave(function () {
        $('.nav_pc > .gnb .depth02').stop().slideUp();
        $('.nav_bg').stop().slideUp();

    });

    $('.nav_pc > .gnb li').mouseenter(function () {
        $(this).find('.depth02').css('background-color', '#f5f5f5');
        $(this).find('.depth02').css('height', navHeight + 100);
        $(this).find('.depth02').css('border-top', '2px solid #6F8496');
        $(this).find('.depth02 a').css('color', '#424342');
        $(this).find('.depth02 a').css('font-weight', 'bold');


    });
    $('.nav_pc > .gnb li').mouseleave(function () {
        $(this).find('.depth02').css('background-color', '');
        $(this).find('.depth02').css('border-top', '');
        $(this).find('.depth02 a').css('color', '#5E5F5F');
        $(this).find('.depth02 a').css('font-weight', '400');
    });
    
    $('.nav_btn').click(function () {
        $('.nav_mobile').animate({
            'right': '0'
        }, 1000);
    });
    $('.close').click(function () {
        $('.nav_mobile').animate({
            'right': '-100%'
        }, 1000);
    });
});