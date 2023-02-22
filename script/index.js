
let toggle_btn = $('#toggle-btn');
toggle_btn.on('click', function(){
    $('html').toggleClass('dark')
});

let animate = new ScrollReveal({
    duration: 1500,
    distance: "120px",
    origin: "bottom"
});

let card1 = document.querySelectorAll('.follows');
let card2 = document.querySelectorAll('.activity');
animate.reveal('header', {duration: 800});
animate.reveal(card1)
animate.reveal('.overview', {duration: 1700});
animate.reveal(card2, {duration: 2000})