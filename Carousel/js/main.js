document.addEventListener( 'DOMContentLoaded', function() {
	var splide = new Splide( '.splide', {
        rewind: true,
        perPage: 3,
        gap: 20,
        breakpoints: {
            850: {
                perPage: 2
            },
            600: {
                perPage: 1
            }
        }
    } );
	splide.mount();
} );