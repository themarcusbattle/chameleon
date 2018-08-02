document.addEventListener( 'DOMContentLoaded', () => {
    
    let closeMenu   = document.querySelector( '#close-menu' );
    let menuOverlay = document.querySelector( '.menu-overlay' );

    closeMenu.addEventListener( 'click', ( event ) => {
        event.preventDefault();

        menuOverlay.classList.add('closed')
        document.querySelector( 'body' ).classList.remove( 'has-no-scroll' )
    })
});

window.onscroll = function() {
    console.log('scrolling');
};



// document.getElementById("close-menu").addEventListener("click", () => {
//     alert('pop')
// });

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