$(document).ready(function () {
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            let target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    let navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);


    $('#message-area').on('click', 'button', function (event) {
        event.preventDefault();


        let inputName = $('#inputName').val().trim();
        let inputEmail = $('#inputEmail').val().trim();
        let inputNote = $('#inputNote').val().trim();

        if (!inputName && !inputEmail && !inputNote) {
            $('#alert-modal').modal('show');
            $('#alert-title').text('ERROR!');
            $('#alert-text').text('There is nothing to submit...');

        } else {

            const newMessage = {
                name: inputName,
                email: inputEmail,
                note: inputNote
            };

            $.ajax('/api/', {
                type: 'POST',
                data: newMessage
            })
                .then((result) => {
                    $('#thanks-modal').modal('show');
                    setTimeout(function () {
                        $('#thanks-modal').modal('hide');
                    }, 1650);
                    $('#inputName').val('');
                    $('#inputEmail').val('');
                    $('#inputNote').val('');
                })
                .catch((err) => {
                    if (err) {
                        throw err;
                    }
                });


        }









    });


    $('#email').on('click', function (event) {
        event.preventDefault();

        $('#alert-modal').modal('show');
        $('#alert-title').text('EMAIL');
        $('#alert-text').text('gusheptig@gmail.com');


    });

    $('#phone').on('click', function (event) {
        event.preventDefault();

        $('#alert-modal').modal('show');
        $('#alert-title').text('PHONE');
        $('#alert-text').text('207-206-5175');


    });

});
