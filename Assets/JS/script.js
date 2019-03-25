$(document).ready(function(){

    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    $(".dropdown-trigger").dropdown();
    $('.parallax').parallax();
    $('ul.tabs').tabs();
    $('.materialboxed').materialbox();
    var collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);

    
    //Button
        $('.backTop').css("display","none");
        $('.closeStory').css("display","none");

    //HamburgerMenu
        $('.sidenav-trigger').fadeIn(); //SHOW MENU


    //STORY//
    $('.storyBtn').click(function(){
        $('.story').addClass('show');
        $('body').css('overflow','hidden');
        $('.closeStory').fadeIn('fast');
    });

    $('.closeStory').click(function(){
        $('.story').removeClass('show');
        $('.closeStory').fadeOut('fast');
        $('body').css('overflow','visible');
        var sidenav = document.querySelectorAll('.sidenav');
        var instance = M.Sidenav.init(sidenav);
        $(instance).close();
    });



    //BUTTON LINK//
    $(".backTop").click(function () {
        $("html, body").animate({scrollTop: 0}, 0);
    });

    $('.motionBtn').click(function(){
        const view = document.getElementById('about');
        view.scrollIntoView({block: 'start', behavior: 'smooth'});
    })

    $('.aboutBtn').click(function(){
        const view = document.getElementById('about');
        view.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    });

    $('.portfolioBtn').click(function(){
        const view = document.getElementById('portfolio');
        view.scrollIntoView({block: 'start', behavior: 'smooth'});
    });

    $('.aistempBtn').click(function(){
        const view = document.getElementById('aistemplate');
        view.scrollIntoView({block: 'start', behavior: 'smooth'});
    });

    $('.btnLink').click(function(){
        var sidenav = document.querySelectorAll('.sidenav');
        var instance = M.Sidenav.init(sidenav);
        $(instance).close();
    });
});

//NAVBAR CHANGE
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if(wScroll > $('#about').offset().top-5){
        $('.backTop').fadeIn('fast');
        $('.navAbsolute').css('top','-10vh');
        $('.navFixed').css('top','0vh');
        $('.navFixed .nav-wrapper .brand-logo').addClass('animated rubberBand')

        $('.brand-logo').removeClass('white-text').addClass('black-text');
        $('ul.right li a').removeClass('white-text').addClass('black-text');
        $('.linkDropDown').removeClass('white-text').addClass('black-text');
        $('.sidenav-trigger').removeClass('white-text').addClass('black-text');
        // UNDERLINE
        $('a.aboutBtn').addClass('underline');
        $('a.portfolioBtn').removeClass('underline');
        $('a.aistempBtn').removeClass('underline');
    }
    else{
        $('.backTop').fadeOut('fast');
        $('.navFixed').css('top','-10vh');
        $('.navFixed .nav-wrapper .brand-logo').removeClass('animated rubberBand')
        setTimeout(() => {
            $('.navAbsolute').css('top','0vh');
        }, 200);
        
        $('.brand-logo').addClass('white-text').removeClass('black-text');
        $('ul.right li a').addClass('white-text').removeClass('black-text');
        $('.linkDropDown').removeClass('white-text').addClass('black-text');
        $('.sidenav-trigger').addClass('white-text').removeClass('black-text');
        
        // UNDERLINE
        $('a.aboutBtn').removeClass('underline');
        $('a.portfolioBtn').removeClass('underline');
        $('a.aistempBtn').removeClass('underline');
    }
    
    if(wScroll > $('#portfolio').offset().top-5){
        $('a.aboutBtn').removeClass('underline');
        $('a.portfolioBtn').addClass('underline');
        $('a.aistempBtn').removeClass('underline');
    }

    if(wScroll > $('#aistemplate').offset().top-5){
        $('a.aboutBtn').removeClass('underline');
        $('a.portfolioBtn').removeClass('underline');
        $('a.aistempBtn').addClass('underline');
    }




});