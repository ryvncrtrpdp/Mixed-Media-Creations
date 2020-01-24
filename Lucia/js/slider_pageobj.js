export class Slider_PageOBJ {
    constructor(elID){
        this.elID = elID;
        this.swiperCSSSelector = this.elID;
        this.prevSwiperButton = '#prevSwiperButton';
        this.pauseSwiperButton = '#pauseSwiperButton';
        this.nextSwiperButton = '#nextSwiperButton';
        this.initSwiper();
        this.enablePauseButton();

    }
    initSwiper(){
        this.swiper = new Swiper (this.swiperCSSSelector, {
            direction: 'vertical',
            navigation: {
                nextEl: this.nextSwiperButton,
                prevEl: this.prevSwiperButton
            },
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            loop: true
        })
    }
    enablePauseButton(){
        $(this.pauseSwiperButton).on('click', function(){
            if( $(this).hasClass('this--playing') ){
                $(this).addClass('this--paused');
                $(this).removeClass('this--playing');
                window.contactForm.sliderPageOBJ.swiper.autoplay.stop();
            }else{
                window.contactForm.sliderPageOBJ.swiper.autoplay.start();
                $(this).removeClass('this--paused');
                $(this).addClass('this--playing');
            }
        });
    }
}