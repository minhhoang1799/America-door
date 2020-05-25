const App = {
    SetBackground: () => {
        $('[setBackground]').each(function() {
            var background = $(this).attr('setBackground')
            $(this).css({
                "background-image": "url(" + background + ")",
                "background-size": "cover",
                "background-position": "center center"
            })
        })
        $('[setBackgroundRepeat]').each(function() {
            var background = $(this).attr('setBackgroundRepeat')
            $(this).css({
                "background-image": "url(" + background + ")",
                "background-repeat": "repeat"
            })
        })
    },
    EqualHeightElement: el => {
        let height = 0;
        let thisHeight = 0;
        $(el).each(function() {
            thisHeight = $(this).height();
            if (thisHeight > height) {
                height = thisHeight;
            }
        });
        $(el).height(height)
    },
    InitLazyLoad: () => {
        return new LazyLoad({
            elements_selector: ".lazy"
        });
    },
    ScrollTo: y => {
        $('html, body').animate({
            scrollTop: y
        }, 1000)
    },
    Init: () => {
        App.SetBackground()
        App.InitLazyLoad()
        mappingInit()
        swiperInit()
        swiperHomeProdcut()
    }
}

function InitSlider() {

}
$(document).ready(function() {
    App.Init()
    searchbox()
    togglenav()
    swiperHome()
    swiperHomeProject()

})

//search-menu
function searchbox(){
    $('header .header-wrapper .main-search em').on('click',function(){
        $(this).parents('.main-search').toggleClass('active')
        $('header .header-wrapper .nav').toggleClass('active')
    })
}
//nav-mobile
function togglenav(){
    $('.button-toggle').on('click',function(){
        $(this).toggleClass('active')
        $('.nav-mobile').toggleClass('active')
        $('.back-drop').toggleClass('active')
    });
    $('.back-drop').on('click',function(){
        $(this).removeClass('active')
        $('.nav-mobile').removeClass('active')
        $('.button-toggle').removeClass('active')
    })
}

    //mapping
function mappingInit(){
    var moveSearch = new MappingListener({
		selector: "header .nav",
		mobileWrapper: ".nav-mobile",
		mobileMethod: "appendTo",
		desktopWrapper: "header .box",
		desktopMethod: "insertBefore",
		breakpoint: 1200,
    }).watch();
}
    // header-fixed
$(window).scroll(function(){
    var a = $(this).scrollTop()
    if(a > 0){
        $('header').addClass('active')
    }
    else{
        $('header').removeClass('active')
    }
    
})
//swiper-banner
function swiperInit(){
    let HomeBanner = new Swiper('.home-banner .swiper-container', {
        speed: 1000,
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        navigation: {
            clickable: true,
            nextEl: '.home-banner .swiper-next',
            prevEl: '.home-banner .swiper-prev'
        },
        pagination: {
            el: '.home-banner .swiper-pagination',
            clickable: true
        },
	})

}
function swiperHome(){
    let HomeBanner = new Swiper('.list-product .swiper-container', {
        speed: 1000,
        slidesPerView: 4,
        loop: true,
        autoplay: false,
        spaceBetween: 30,
        navigation: {
            clickable: true,
            nextEl: '.list-product .swiper-next',
            prevEl: '.list-product .swiper-prev'
        },
        pagination: {
            el: '.list-product .swiper-pagination',
            clickable: true
        },
        breakpoints:{
            768: {
                slidesPerView: 3
            },
            480:{
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }
	})

}
function swiperHomeProdcut(){
    let HomeBanner = new Swiper('.product-hot .swiper-container', {
        speed: 1000,
        slidesPerView: 4,
        loop: true,
        autoplay: false,
        navigation: {
            clickable: true,
            nextEl: '.product-hot .swiper-next',
            prevEl: '.product-hot .swiper-prev'
        },
        pagination: {
            el: '.list-product .swiper-pagination',
            clickable: true
        },
        breakpoints:{
            1024: {
                slidesPerView: 3
            },
            575: {
                slidesPerView: 2
            }
        }
        
	})

}
function swiperHomeProject(){
    let HomeBanner = new Swiper('.project-wrapper .swiper-container', {
        speed: 1000,
        slidesPerView: 1,
        loop: true,
        autoplay: false,
        navigation: {
            clickable: true,
            nextEl: '.project-wrapper .swiper-next',
            prevEl: '.project-wrapper .swiper-prev'
        },
        pagination: {
            el: '.list-product .swiper-pagination',
            clickable: true
        },
	})

}