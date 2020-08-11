function toggleMenu() {
    let navigation = document.querySelector(".navigation");
    let toggle = document.querySelector(".toggle");
    navigation.classList.toggle("active");
    toggle.classList.toggle("active");
}



// Back to Top js
window.addEventListener("scroll", function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
})

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }