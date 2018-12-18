document.addEventListener( 'DOMContentLoaded', () => {
    
    let revealMenu  = document.querySelector( '.reveal-menu' );
    let closeMenu   = document.querySelector( '#close-menu' );
    let menuOverlay = document.querySelector( '.menu-overlay' );

    if ( undefined === closeMenu ) {
        return;
    }

    revealMenu.addEventListener( 'click', ( event ) => {
        event.preventDefault();

        menuOverlay.classList.remove('is-hidden')
        document.querySelector( 'html' ).classList.add( 'has-no-scroll' )
        document.querySelector( 'body' ).classList.add( 'has-no-scroll' )
    })

    closeMenu.addEventListener( 'click', ( event ) => {
        event.preventDefault();

        menuOverlay.classList.add('is-hidden')
        document.querySelector( 'html' ).classList.remove( 'has-no-scroll' )
        document.querySelector( 'body' ).classList.remove( 'has-no-scroll' )
    })
});



window.onscroll = function() {
    let parallax  = document.querySelector( '.has-parallax' );
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