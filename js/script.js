
document.addEventListener("DOMContentLoaded", function () {
    OverlayScrollbars(document.querySelectorAll("body"), {});
    ScrollReveal().reveal('img', {delay: 100, container: '.os-viewport'});
    ScrollReveal().reveal('.services_desc', {delay: 100,reset: true, container: '.os-viewport'});
    ScrollReveal().reveal('.desc', {delay: 100, reset: true, interval: 200, container: '.os-viewport'});
});