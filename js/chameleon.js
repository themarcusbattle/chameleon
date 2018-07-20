window.onscroll = function() {
    console.log('scrolling');
};

let chameleonMoveSlideLeft = ( event ) => {

    const slides = document.querySelectorAll('.slide')
    const activeSlide = document.querySelectorAll('.slide.active')

    slides.forEach( ( slide, index ) => {

        let slideStyles   = getComputedStyle( slide )
        let slideMargin   = slideStyles.marginLeft.replace( 'px', '' ) * 2
        let slideWidth    = slide.offsetWidth + slideMargin
        let slidePosition = slide.style.left.replace( 'px', '' ) * 1

        console.log( slidePosition )
        console.log( slideWidth )

        slide.style.left = slidePosition - slideWidth
    } )
}

let chameleonMoveSlideRight = ( event ) => {

    const slides = document.querySelectorAll('.slide')
    const activeSlide = document.querySelectorAll('.slide.active')

    slides.forEach( ( slide, index ) => {

        let slideStyles   = getComputedStyle( slide )
        let slideMargin   = slideStyles.marginLeft.replace( 'px', '' ) * 2
        let slideWidth    = slide.offsetWidth + slideMargin
        let slidePosition = slide.style.left.replace( 'px', '' ) * 1

        console.log(  )
        console.log( slideWidth )

        slide.style.left = slidePosition + slideWidth
    } )
}