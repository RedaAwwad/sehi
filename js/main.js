$(document).ready(function () {
    //Scroll to Menu Element When Click On More Button
    $("#more, #reserve").click(function (e) {
        e.preventDefault();
        var moreBtnOffset = $($(this).data('value')).offset().top;
        $('html, body').animate({scrollTop: (moreBtnOffset - 150)}, 800);
    });

    //Activate The Navigation Bar's Links
    $(".navbar-nav .nav-item").on("click", function (e) {
        e.preventDefault();
        //Add active Class to The Link
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        //Scrolling To The Target Section
        let element0 = $($(this).data('value')),
            elementOffset = element0.offset().top;
        if($(this).hasClass("home-link")) {
            $('html, body').animate({scrollTop: (elementOffset - 90)}, 900);
        } else if ($(this).hasClass("link-padding")) {
            $('html, body').animate({scrollTop: (elementOffset + 45)}, 900);
        }else {
            $('html, body').animate({scrollTop: (elementOffset - 35)}, 900);
        }
    });


    $(window).scroll(function () {
        //Make NavBar Fixed and Change its Background Color
        if($(this).scrollTop() >= 80) {
            $("header").css("height", "75vh");
            $('nav.navbar').css({
                position: "fixed"
            }).removeClass("bg-transparent").addClass("bg-dark")
        } else {
            $("header").css("height", "100vh");
            $('nav.navbar').css({
                position: "relative" 
            }).removeClass("bg-dark").addClass("bg-transparent")
        }
    });
    
    //Change Class Active To Nav Links When Scroll
    window.addEventListener("scroll", function () {
        let navLinks = document.querySelectorAll(".nav-link"),
            fromTop  = this.scrollY;
        navLinks.forEach((link) => {
            let section = document.querySelector(link.hash);
            if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop || section.offsetTop <= fromTop && fromTop < 990) {
                //console.log(section);
                link.parentElement.classList.add("active");
            } else {
                link.parentElement.classList.remove("active");
            }
        })    
    })

    //Show Intro Video
    $("#video").on("click", function (e) {
        e.preventDefault();
        $('.video-overlay').fadeIn();
        document.getElementById('videoDemo').play();
    });

    //Hide Intro Video
    $(".video-overlay .close").click(function (e) {
        e.preventDefault();
        $(".video-overlay").fadeOut();
        document.getElementById('videoDemo').pause();
    });

    //Controlling Back To Top Button
    $(window).scroll(function () {
        if($(this).scrollTop() >= 150) {
            $(".back").slideDown();
        }else {
            $(".back").slideUp();
        }
    });

    //Click Back Button to Back To Top 
    $('.back').click(function () {
        $('html, body').animate({scrollTop: 0},800);
    });
});
