
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
    console.log(element.textContent)
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
