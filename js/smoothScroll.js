$(document).ready(function () {
    $('.menu-div .menu li .link').click(function () {
        console.log($(this));
        $('.menu-div .menu li .link.active').removeClass('active');
        $(this).addClass('active');
    })
    $('.menu-div .menu').click(linkClick)
    function linkClick(event) {
        smoothScroll(event);
    }
    $('.jump-top').click(linkClick)
    $('.hire a').click(linkClick)
    function smoothScroll(event) {
        event.preventDefault();
        var targetId = event.target.getAttribute("href");
        console.log(targetId);
        var positionElement = document.querySelector(targetId).offsetTop;
        $("html, body").animate(
            {
                scrollTop: positionElement,
            },
            800,
            function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = targetId;
            }
        );
    }
    //Mobile 
    $('#navigation ul li .link').click(function () {
        console.log($(this));
        $('#navigation ul li .link.active').removeClass('active');
        $(this).addClass('active');
    })
    $('#navigation ul').click(linkClick)
    function linkClick(event) {
        smoothScroll(event);
    }
});
