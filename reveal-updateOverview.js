	/**
	 * Optimization method; hide all slides that are far away
	 * from the present slide.
	 */
	function updateSlidesVisibility() {

        // ...

        // Show the horizontal slide if it's within the view distance
        if( distanceX < viewDistance || isOverview() ) {
            loadSlide( horizontalSlide );
        }
        else {
            unloadSlide( horizontalSlide );
        }

        // ...

        if( distanceX + distanceY < viewDistance || isOverview() ) {
            loadSlide( verticalSlide );
        }
        else {
            unloadSlide( verticalSlide );
        }

        // ...
    }

/**
	 * Moves the overview viewport to the current slides.
	 * Called each time the current slide changes.
	 */
	function updateOverview() {

		// var vmin = Math.min( window.innerWidth, window.innerHeight );
		// var scale = Math.max( vmin / 10, 5 ) / vmin;
		// var translateX = -indexh;
		// var translateY = -indexv;

		const hIndices = getSlidesAttributes().map(slide => slide["data-index-h"]);
		var hcount = Math.max.apply(null,hIndices)+1;
		function elementsFreq(a) { return new Map([...new Set(a)].map(
			x => [x, a.filter(y => y === x).length]
		))};
		var slidesPerSection = elementsFreq(hIndices);
		var vcount = Math.max.apply(null,Array.from(slidesPerSection.values()));
		var scale = Math.min( 1/(hcount+1), 1/(vcount+1) ) ;
		var translateX = -(hcount-1)/2;
		var translateY = -(vcount-1)/2;

		transformSlides( {
			overview: [
				'scale('+ scale +')',
				'translateX('+ ( translateX * overviewSlideWidth ) +'px)',
				'translateY('+ ( translateY * overviewSlideHeight ) +'px)'
			].join( ' ' )
		} );

	}
    
    	/**
	 * Displays the overview of slides (quick nav) by scaling
	 * down and arranging all slide elements.
	 */
	function activateOverview() {

        // ...

        dom.wrapper.querySelectorAll('.reveal h2').forEach( function( header ) {
            header.classList.add('overview');
        })

        // ...
    }

    /**
	 * Exits the slide overview and enters the currently
	 * active slide.
	 */
    function deactivateOverview() {

        // ...

        dom.wrapper.querySelectorAll('.reveal h2').forEach( function( header ) {
            header.classList.remove('overview');
        })

        // ...
    }