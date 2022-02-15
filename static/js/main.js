
// carousel
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

// dropdown-btn
$('.dropdown-btn').on('click',function(){

    if ($(this).find('span').hasClass('rotate')){
        $(this).find('span').removeClass('rotate');
        $(this).find('span').addClass('rotate-revert');
    } else {
        $(this).find('span').addClass('rotate');
        $(this).find('span').removeClass('rotate-revert');
    }
});

function rotate(data) {
    let element = document.getElementById(data)
    setTimeout(
        function () {
            if(element.textContent.includes('add')) {
                element.innerHTML = 'remove'
            } else {
                element.innerHTML = 'add'
            }
        }, 0
    )
}

function addToCart(id) {
    let newId = "button#" + id + "> span.span-add"
    $(newId).text('done')
    $("button#" + id).addClass('added')
    let numP = document.getElementById("num-product")
    numP.innerHTML = numP.textContent*1 + 1
}

// range slider
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 5000,
        values: [ 750, 3000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );

//load-more
$(function () {
    $(".tr-product").slice(0, 3).show();
    $("#loadMore1").on('click', function (e) {
        e.preventDefault();
        $(".tr-product:hidden").slice(0, 2).slideDown();
        if ($(".tr-product:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});

$(function (){
    $(".tr-coffe").slice(0, 3).show();
    $("#loadMore2").on('click', function (e) {
        e.preventDefault();
        $(".tr-coffe:hidden").slice(0, 2).slideDown();
        if ($(".tr-coffe:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});

$(function (){
    $(".tr-sofa").slice(0, 3).show();
    $("#loadMore3").on('click', function (e) {
        e.preventDefault();
        $(".tr-sofa:hidden").slice(0, 2).slideDown();
        if ($(".tr-sofa:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});

$(function (){
    $(".tr-armchair").slice(0, 3).show();
    $("#loadMore4").on('click', function (e) {
        e.preventDefault();
        $(".tr-armchair:hidden").slice(0, 2).slideDown();
        if ($(".tr-armchair:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});

$(function (){
    $(".tr-bookshelf").slice(0, 3).show();
    $("#loadMore5").on('click', function (e) {
        e.preventDefault();
        $(".tr-bookshelf:hidden").slice(0, 2).slideDown();
        if ($(".tr-bookshelf:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});

$(function (){
    $(".tr-tv").slice(0, 3).show();
    $("#loadMore6").on('click', function (e) {
        e.preventDefault();
        $(".tr-tv:hidden").slice(0, 2).slideDown();
        if ($(".tr-tv:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});
