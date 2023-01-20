let form = document.getElementById('form');
let sendForm = document.getElementById('sendForm');


var animModal = gsap.timeline({paused: true});
animModal
.fromTo(".wrap-modal", {autoAlpha: 0}, {duration: 0.3, autoAlpha: 1, ease: "none"}, 0)
.fromTo(".inner-modal", {autoAlpha: 0}, {duration: 0.3, autoAlpha: 1, y: 50, ease: "none"}, 0.2);


form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    fetch('/', {
        method: 'POST',
        body: formData,
    });

    animModal.restart();
    //debugger
});



document.querySelector('.wrap-modal').addEventListener('click', function (e) {
  animModal.reverse();
  form.reset();
});
