(function ($) {
    jQuery.fn.carouselLineArrow = function (options) { //
        options = $.extend({
            lineDur: 5000, //duration of line-time animation (ms), default is 5000
            slideDur: 500, //duration of toggle slide animation (ms), default is 500
            heightIsProportional: true, // height of slider is proportional to the width when resized, defaultl is true
            linePosition: 'bottom', // position of line-time: 'bottom' or 'top', default is 'bottom'
            lineHeight: '5px', // height of line-time (px, em, rem, %), default is '5px';
            lineColor: 'red' // color of line-time, default is 'red'
        }, options);

        let make = function () {
            //Ñ€ÐµÐ°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ñ Ð¼ÐµÑ‚Ð¾Ð´Ð°

            // ÑÑ‚Ð¸Ð»Ð¸Ð·ÑƒÐµÐ¼ ÑÐ»Ð°Ð¹Ð´ÐµÑ€
            $(this).css('overflow', 'hidden');

            // ÑƒÐ·Ð½Ð°ÐµÐ¼ ÑÐ¾Ð¾Ñ‚Ð½Ð¾ÑˆÐµÐ½Ð¸Ðµ ÑÑ‚Ð¾Ñ€Ð¾Ð½ Ð² ÐºÐ°Ñ€Ñ‚Ð¸Ð½ÐºÐµ 
            let $this = $(this);
            let items = $(this).children(); //ÑÐ»Ð°Ð¹Ð´Ð°
            let imgItem = items.first().children(); //
            let imgsItem = items.children(); //Ð²ÑÐµ ÐºÐ°Ñ€Ñ‚Ð¸Ð½ÐºÐ¸
            let imgWidth = imgItem.width(); //ÑˆÐ¸Ñ€Ð¸Ð½Ð° ÐºÐ°Ñ€Ñ‚Ð¸Ð½ÐºÐ¸
            let imgHeight = imgItem.height(); //Ð²Ñ‹ÑÐ¾Ñ‚Ð° ÐºÐ°Ñ€Ñ‚Ð¸Ð½ÐºÐ¸
            let proportial = imgHeight / imgWidth; //ÑÐ¾Ð¾Ñ‚Ð½. ÑÑ‚Ð¾Ñ€Ð¾Ð½

            // ÐºÐ¾ÑÑ‚Ñ‹Ð»ÑŒ Ñ padding-bottom Ð´Ð»Ñ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð¸Ñ Ð¿Ñ€Ð¾Ð¿Ð¾Ñ€Ñ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾Ð³Ð¾ ÑÐ»Ð°Ð¹Ð´ÐµÑ€Ð°
            $(this).wrap("<div class='carousel-wrapper-middle'></div>");
            $('.carousel-wrapper-middle').wrap("<div class='carousel-wrapper-outer'></div>");
            $('.carousel-wrapper-outer').css('width', '100%');
            $('.carousel-wrapper-middle').css('width', '100%');

            if (options.heightIsProportional) {
                $('.carousel-wrapper-middle').css('padding-bottom', (proportial * 100) + '%');
            } else {
                wrapperWidth = $('.carousel-wrapper-outer').width();
                $('.carousel-wrapper-middle').css('padding-bottom', imgHeight * wrapperWidth / imgWidth);
            }

            $('.carousel-wrapper-middle').css('position', 'relative');

            // ÑƒÑÑ‚Ð°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°ÐµÐ¼ Ð°Ð±ÑÐ¾Ð»ÑŽÑ‚Ð½Ð¾Ðµ Ð¿Ð¾Ð·Ð¸Ñ†Ð¸Ð¾Ð½Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð´Ð»Ñ ÑÐ»Ð°Ð¹Ð´Ð¾Ð²
            $(this).css('position', 'absolute');
            $(this).css('width', '100%');
            $(this).css('height', '100%');
            $(this).css('top', '0%');
            $(this).css('left', '0%');
            items.css('position', 'absolute');
            items.css('width', '100%');
            items.css('height', '100%');
            items.css('top', '0%');
            items.css('left', '0%');
            //imgsItem.css('max-width', '100%');
            imgsItem.css('width', '100%');
            imgsItem.css('height', '100%');
            imgsItem.css('object-fit', 'cover');

            items.css('display', 'none');
            items.eq(0).css('display', 'block');

            ///////////////////////////////////////////
            //ÑÐ¾Ð·Ð´Ð°ÐµÐ¼ Ð¿Ð¾Ð»Ð¾ÑÑƒ Ð´Ð»Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚Ð¸ Ð¿Ð¾ÐºÐ°Ð·Ð° ÑÐ»Ð°Ð¹Ð´Ð°
            ////////////////////////////////////////////
            $(this).append('<div class="carouselLineArrow-line"><div class="carouselLineArrow-innerline"></div></div>');
            let line = $(this).children('.carouselLineArrow-line');
            // ÑÑ‚Ð¸Ð»Ð¸Ð·ÑƒÐµÐ¼ line, innerLine
            // if (options.linePosition == 'bottom') {
            //     line.css('bottom', '0');
            // } else {
            //     line.css('top', '0');
            // }
            line.css(options.linePosition, '0');
            line.css('height', options.lineHeight);
            let innerLine = line.children('.carouselLineArrow-innerline');
            innerLine.css('background-color', options.lineColor);
          
            //////////////////////////////////////////////
            /////////  ÑÐ¾Ð·Ð´Ð°ÐµÐ¼ ÑÑ‚Ñ€ÐµÐ»ÐºÐ¸ ///////////////////
            //////////////////////////////////////////////
            $(this).append('<div class="carouselLineArrow-arrow carouselLineArrow-arrow-right"><div class="carouselLineArrow-arrow-inner"></div></div>');
            $(this).append('<div class="carouselLineArrow-arrow carouselLineArrow-arrow-left"><div class="carouselLineArrow-arrow-inner"></div></div>')
            let arrowLeft = $this.children('.carouselLineArrow-arrow-left');
            let arrowRight = $this.children('.carouselLineArrow-arrow-right');

            // Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ñ‹
            let iLast = items.length - 1; // Ð¸Ð½Ð´ÐµÐºÑ Ð¿Ð¾ÑÐ»ÐµÐ´Ð½ÐµÐ³Ð¾ ÑÐ»Ð°Ð¹Ð´Ð°
            let iCurr = 0;
            let iNext; // Ð¸Ð½Ð´ÐµÐºÑ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐ³Ð¾
            let iPrev; // Ð¸Ð½Ð´ÐµÐºÑ Ð¿Ñ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰ÐµÐ³Ð¾
            let sliderHover = false; //Ð¼Ñ‹ÑˆÑŒ Ð½Ð°Ð´ ÑÐ»Ð°Ð¹Ð´ÐµÑ€Ð¾Ð¼
            // Ð½ÑƒÐ¶ÐµÐ½ Ð´Ð»Ñ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ¸: Ð·Ð°Ð¿ÑƒÑÐºÐ°Ñ‚ÑŒ Ð»Ð¸ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸ÑŽ Ð½Ð° Line
            let lineIsAnim = false; // Ð½Ð° line ÐµÑÑ‚ÑŒ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ñ
            let slideIsAnim = false; // Ð½Ð° slide ÐµÑÑ‚ÑŒ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ñ


            // Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð¸Ñ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐ³Ð¾ Ð¸ Ð¿Ñ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰ÐµÐ³Ð¾ Ð¸Ð½Ð´ÐµÐºÑÐ°
            function nextI(i) {
                return (i < iLast) ? i + 1 : 0;
            }

            function prevI(i) {
                return (i > 0) ? i - 1 : iLast;
            }

            ////////////////////////////////////////////
            ////Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð¿Ð¾ÑÐ»Ðµ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸ ÑÐ»Ð°Ð¹Ð´Ð° (Ð²Ð»ÐµÐ²Ð¾)///
            ////////////////////////////////////////////
            function afterSlideAnimateLeft() {
                // Ð¿ÐµÑ€ÐµÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ð° ÑÑ‚Ð°Ñ‚ÑƒÑÐ° Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸
                slideIsAnim = false;
                //console.log(`slideIsAnim = ${slideIsAnim}`);

                // Ñ‚ÐµÐºÑƒÑ‰Ð¸Ð¹ ÑÐ»Ð°Ð¹Ð´ iCurr ÑÐºÑ€Ñ‹Ð²Ð°ÐµÑ‚ÑÑ
                //items.eq(iCurr).css('display', 'none');

                // Ð²ÑÐµ ÐºÑ€Ð¾Ð¼Ðµ Ð½Ð¾Ð²Ð¾Ð³Ð¾ Ñ‚ÐµÐºÑƒÑ‰ÐµÐ³Ð¾ iCurr ÑÐºÑ€Ñ‹Ð²Ð°ÑŽÑ‚ÑÑ
                items.each(function (index) {
                    if (index !== iCurr) {
                        items.eq(index).css('display', 'none');
                    }

                });

                // // Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÑÐµÑ‚ÑÑ Ð½Ð¾Ð²Ñ‹Ð¹ iCurr
                // if (iCurr < iLast) {
                //     iCurr++;
                // } else {
                //     iCurr = 0;
                // }

                //Ð·Ð°Ð¿ÑƒÑÐºÐ°ÐµÑ‚ÑÑ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ñ Ð½Ð° Line
                // Ð¿ÐµÑ€ÐµÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ð° ÑÑ‚Ð°Ñ‚ÑƒÑÐ° Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸
                lineIsAnim = true;
                //console.log(`lineIsAnim = ${lineIsAnim}`);
                if (!sliderHover) {
                    innerLine.animate({
                        'width': '100%'
                    }, options.lineDur, afterLineAnimateLeft);
                }
            }

            ///////////////////////////////////////////////////////
            ////Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð¿Ð¾ÑÐ»Ðµ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸ Ð»Ð¸Ð½Ð¸Ð¸ (ÑÐ»Ð°Ð¹Ð´Ñ‹ Ð¸Ð´ÐµÑ‚ Ð²Ð»ÐµÐ²Ð¾)///
            ///////////////////////////////////////////////////////
            function afterLineAnimateLeft() {
                // Ð¿ÐµÑ€ÐµÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ð° ÑÑ‚Ð°Ñ‚ÑƒÑÐ° Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸
                lineIsAnim = false;
                //console.log(`lineIsAnim = ${lineIsAnim}`);
                // Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ Line Ð¾Ð±Ð½ÑƒÐ»ÑÐµÑ‚ÑÑ
                innerLine.css('width', '0');
                // Ð¸Ð·Ð²ÐµÑÑ‚ÐµÐ½ iCurr
                // Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð¸Ðµ iNext
                iNext = nextI(iCurr);
                //console.log(iNext);
                // ÑÐ»Ð°Ð¹Ð´Ñ‹ iCurr Ð¸ iNext Ð´ÐµÐ»Ð°ÑŽÑ‚ÑÑ Ð²Ð¸Ð´Ð¸Ð¼Ñ‹Ð¼Ð¸
                items.eq(iCurr).css('display', 'block');
                items.eq(iNext).css('display', 'block');

                // ÑÐ¿Ð¾Ð·Ð¸Ñ†Ð¸Ð¾Ð½Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ ÑÐ»Ð°Ð¹Ð´-Curr Ð¿Ð¾ 0
                items.eq(iCurr).css('left', '0%');
                // ÑÐ¿Ð¾Ð·Ð¸Ñ†Ð¸Ð¾Ð½Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ ÑÐ»Ð°Ð¹Ð´-iNext ÑÐ¿Ñ€Ð°Ð²Ð¾ Ð¾Ñ‚ ÑÐ»Ð°Ð´ÐµÑ€Ð°-iCurr
                items.eq(iNext).css('left', '99%');

                // Ð¿ÐµÑ€ÐµÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ð° ÑÑ‚Ð°Ñ‚ÑƒÑÐ° Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸
                slideIsAnim = true;
                //console.log(`slideIsAnim = ${slideIsAnim}`);

                // Ð·Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸ÑŽ ÑÐ´Ð²Ð¸Ð³Ð° Ð½Ð° ÑÐ»Ð°Ð¹Ð´Ð°Ñ… iCurr Ð¸ iNext
                // Ð¸ Ð² ÐºÐ¾Ð½Ñ†Ðµ ÑÑ‚Ð¾Ð¹ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸ Ð·Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ Ñ„ÑƒÐ½ÐºÑ†Ð¸ÑŽ afterSlideAnimate
                // Ð² ÐºÐ¾Ñ‚Ð¾Ñ€Ð¾Ð¹ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÑÐµÑ‚ÑÑ Ð½Ð¾Ð²Ñ‹Ð¹ iCurr Ð¸ Ð·Ð°Ð¿ÑƒÑÐºÐ°ÐµÑ‚ÑÑ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ñ Ð½Ð° Line
                items.eq(iCurr).animate({
                    left: '-99%'
                }, options.slideDur, afterSlideAnimateLeft);

                items.eq(iNext).animate({
                    left: '0%'
                }, options.slideDur);

                // Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÑÐµÑ‚ÑÑ Ð½Ð¾Ð²Ñ‹Ð¹ iCurr
                if (iCurr < iLast) {
                    iCurr++;
                } else {
                    iCurr = 0;
                }

            }

            ///////////////////////////////////////////////////////
            ////Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð¿Ð¾ÑÐ»Ðµ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸ Ð»Ð¸Ð½Ð¸Ð¸ (ÑÐ»Ð°Ð¹Ð´Ñ‹ Ð¸Ð´ÑƒÑ‚ Ð²Ð¿Ñ€Ð°Ð²Ð¾)///
            ///////////////////////////////////////////////////////
            function afterLineAnimateRight() {
                // Ð¿ÐµÑ€ÐµÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ð° ÑÑ‚Ð°Ñ‚ÑƒÑÐ° Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸
                lineIsAnim = false;
                //console.log(`lineIsAnim = ${lineIsAnim}`);
                // Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ Line Ð¾Ð±Ð½ÑƒÐ»ÑÐµÑ‚ÑÑ
                innerLine.css('width', '0');
                // Ð¸Ð·Ð²ÐµÑÑ‚ÐµÐ½ iCurr
                // Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð¸Ðµ iNext
                iPrev = prevI(iCurr);
                //console.log(iNext);
                // ÑÐ»Ð°Ð¹Ð´Ñ‹ iCurr Ð¸ iNext Ð´ÐµÐ»Ð°ÑŽÑ‚ÑÑ Ð²Ð¸Ð´Ð¸Ð¼Ñ‹Ð¼Ð¸
                items.eq(iCurr).css('display', 'block');
                items.eq(iPrev).css('display', 'block');

                // ÑÐ¿Ð¾Ð·Ð¸Ñ†Ð¸Ð¾Ð½Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ ÑÐ»Ð°Ð¹Ð´-Curr Ð¿Ð¾ 0
                items.eq(iCurr).css('left', '0%');
                // ÑÐ¿Ð¾Ð·Ð¸Ñ†Ð¸Ð¾Ð½Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ ÑÐ»Ð°Ð¹Ð´-iPrev ÑÐ»ÐµÐ²Ð¾ Ð¾Ñ‚ ÑÐ»Ð°Ð´ÐµÑ€Ð°-iCurr
                items.eq(iPrev).css('left', '-99%');

                // Ð¿ÐµÑ€ÐµÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ð° ÑÑ‚Ð°Ñ‚ÑƒÑÐ° Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸
                slideIsAnim = true;
                //console.log(`slideIsAnim = ${slideIsAnim}`);

                // Ð·Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸ÑŽ ÑÐ´Ð²Ð¸Ð³Ð° Ð½Ð° ÑÐ»Ð°Ð¹Ð´Ð°Ñ… iCurr Ð¸ iPrev
                // Ð¸ Ð² ÐºÐ¾Ð½Ñ†Ðµ ÑÑ‚Ð¾Ð¹ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸ Ð·Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ Ñ„ÑƒÐ½ÐºÑ†Ð¸ÑŽ afterSlideAnimate
                // Ð² ÐºÐ¾Ñ‚Ð¾Ñ€Ð¾Ð¹ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÑÐµÑ‚ÑÑ Ð½Ð¾Ð²Ñ‹Ð¹ iCurr Ð¸ Ð·Ð°Ð¿ÑƒÑÐºÐ°ÐµÑ‚ÑÑ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ñ Ð½Ð° Line
                items.eq(iCurr).animate({
                    left: '99%'
                }, options.slideDur, afterSlideAnimateLeft);

                items.eq(iPrev).animate({
                    left: '0%'
                }, options.slideDur);

                //Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÑÐµÑ‚ÑÑ Ð½Ð¾Ð²Ñ‹Ð¹ iCurr
                if (iCurr > 0) {
                    iCurr--;
                } else {
                    iCurr = iLast;
                }


            }

            //////////////////////////////////
            // Ð¿ÐµÑ€Ð²Ñ‹Ð¹ Ð·Ð°Ð¿ÑƒÑÐº Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸ Ð»Ð¸Ð½Ð¸Ð¸///
            //////////////////////////////////
            // Ð¿ÐµÑ€ÐµÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ð° ÑÑ‚Ð°Ñ‚ÑƒÑÐ° Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸
            lineIsAnim = true;
            //console.log(`lineIsAnim = ${lineIsAnim}`);
            if (!sliderHover) {
                innerLine.animate({
                    'width': '100%'
                }, options.lineDur, afterLineAnimateLeft);
            }

            /////////////////////////////////////////
            //////// Ð¼Ñ‹ÑˆÐºÐ° Ð²Ñ…Ð¾Ð´Ð¸Ñ‚ Ð½Ð° slide/////////
            /////////////////////////////////////////
            $(this).on('mouseenter', function () {
                sliderHover = true;
                //console.log('stop');
                if (lineIsAnim) { // ÐµÑÐ»Ð¸ Ð»Ð¸Ð½Ð¸Ñ Ð°Ð½Ð¸Ð¼Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð°
                    // ÑƒÐ´Ð°Ð»Ð¸Ñ‚ÑŒ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸ÑŽ Ð½Ð° Ð»Ð¸Ð½Ð¸Ð¸
                    innerLine.stop();
                    innerLine.css('width', '0%');
                    lineIsAnim = false;
                }
            });

            /////////////////////////////////////////
            //////// Ð¼Ñ‹ÑˆÐºÐ° ÑƒÑ…Ð¾Ð´Ð¸Ñ‚ Ð¸Ð· slide/////////
            /////////////////////////////////////////
            $(this).on('mouseleave', function () {
                sliderHover = false;
                // ÐµÑÐ»Ð¸ Ð²Ñ‹Ð²ÐµÐ»Ð¸ Ð¼Ñ‹ÑˆÐºÑƒ Ð¿Ð¾ÑÐ»Ðµ Ñ‚Ð¾Ð³Ð¾ ÐºÐ°Ðº Ð²Ð²ÐµÐ»Ð¸ ÐµÐµ Ð²Ð¾ Ð²Ñ€ÐµÐ¼Ñ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸ Ð»Ð¸Ð½Ð¸Ð¸
                // Ð¸Ð»Ð¸ Ð¿Ð¾ÑÐ»Ðµ Ñ‚Ð¾Ð³Ð¾ ÐºÐ°Ðº Ð²Ð²ÐµÐ»Ð¸ ÐµÐµ Ð²Ð¾ Ð²Ñ€ÐµÐ¼Ñ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸ ÑÐ»Ð°Ð¹Ð´Ð° Ð¸ Ð¾Ð½Ð° Ð·Ð°ÐºÐ¾Ð½Ñ‡Ð¸Ð»Ð°ÑÑŒ
                // Ð² ÑÑ‚Ð¸Ñ… Ð´Ð²ÑƒÑ… ÑÐ»ÑƒÑ‡Ð°ÑÑ… Ð½ÐµÑ‚ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸ ÑÐ»Ð°Ð¹Ð´Ð°

                if (!slideIsAnim) {
                    // Ñ‚Ð¾Ð¶Ðµ Ñ‡Ñ‚Ð¾ Ð¸ Ð¿ÐµÑ€Ð²Ñ‹Ð¹ Ð·Ð°Ð¿ÑƒÑÐº Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¸ Ð»Ð¸Ð½Ð¸Ð¸
                    //console.log('Ð·Ð°Ð¿ÑƒÑÐºÐ°ÐµÐ¼ Ð·Ð°Ð½Ð¾Ð²Ð¾')
                    lineIsAnim = true;
                    //console.log(`lineIsAnim = ${lineIsAnim}`);
                    if (!sliderHover) {
                        innerLine.animate({
                            'width': '100%'
                        }, options.lineDur, afterLineAnimateLeft);
                    }
                }
            });

            ////////////////////////////////
            ////// Ð¡Ð¢Ð Ð•Ð›ÐšÐ Ð’Ð›Ð•Ð’Ðž //////////
            ////////////////////////////////
            arrowLeft.on('click', function () {
                if (!slideIsAnim) {
                    afterLineAnimateLeft();
                }
            });

            ////////////////////////////////
            ////// Ð¡Ð¢Ð Ð•Ð›ÐšÐ Ð’ÐŸÐ ÐÐ’Ðž //////////
            ////////////////////////////////
            arrowRight.on('click', function () {
                if (!slideIsAnim) {
                    afterLineAnimateRight();
                }
            });

        };
        return this.each(make);

    };
})(jQuery);