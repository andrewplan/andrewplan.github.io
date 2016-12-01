import './home.scss';
import homeTmpl from './home-tmpl.html';

function homeCtrl( $sce ) {
    this.swiper = {};

    this.onReadySwiper = ( swiper ) => {
        swiper.on( 'slideChangeStart', () => {
            console.log( swiper );
            if ( swiper.activeIndex > 0 ) {
                angular
                    .element( document.querySelector( '.home-nav-wrapper-logo-wrapper-small' ) )
                    .css( { 'display': 'inline-block' } );
            }
            else {
                angular
                    .element( document.querySelector( '.home-nav-wrapper-logo-wrapper-small' ) )
                    .css( { 'display': 'none' } );
            }

            // if ( swiper.activeIndex === 1 ) {
            //     angular
            //         .element( document.querySelector( '.bottom-nav-links-wrapper-links-container-about-link' ) )
            //         .css( { 'display': 'none' } );
            // }
            // else {
            //     angular
            //         .element( document.querySelector( '.bottom-nav-links-wrapper-links-container-about-link' ) )
            //         .css( { 'display': 'inline-block' } );
            // }
            //
            // if ( swiper.activeIndex === 2 ) {
            //     angular
            //         .element( document.querySelector( '.bottom-nav-links-wrapper-links-container-projects-link' ) )
            //         .css( { 'display': 'none' } );
            // }
            // else {
            //     angular
            //         .element( document.querySelector( '.bottom-nav-links-wrapper-links-container-projects-link' ) )
            //         .css( { 'display': 'inline-block' } );
            // }
            //
            // if ( swiper.activeIndex === 3 ) {
            //     angular
            //         .element( document.querySelector( '.bottom-nav-links-wrapper-links-container-contact-link' ) )
            //         .css( { 'display': 'none' } );
            // }
            // else {
            //     angular
            //         .element( document.querySelector( '.bottom-nav-links-wrapper-links-container-contact-link' ) )
            //         .css( { 'display': 'inline-block' } );
            // }
        } );
    };

    this.trustSrc = function( src ) {
        return $sce.trustAsResourceUrl( src );
    }

    this.goToSlide = ( index ) => {
        this.swiper.slideTo( index );
    };

    this.next = () => {
        this.swiper.slideNext();
    };

    this.prev = () => {
        this.swiper.slidePrev();
    };
}

const homeComponent = {
    template: homeTmpl
    , controller: homeCtrl
    , bindings:
        {
            slideNum: '<'
        }
};

export default homeComponent;
