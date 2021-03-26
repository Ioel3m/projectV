window.onload = function () {
    // ScrollReveal().reveal('.desc', {delay: 100, reset: true, interval: 200});
    // ScrollReveal().reveal('.services_desc', {delay: 100});
};

document.addEventListener("DOMContentLoaded", function () {
    OverlayScrollbars(document.querySelectorAll("body"), {});
    // ScrollReveal().reveal('.desc', {delay: 100, reset: true, interval: 200});
    ScrollReveal().reveal('img', {delay: 100, container: '.os-viewport'});
    ScrollReveal().reveal('.services_desc', {delay: 100, container: '.os-viewport'});
    ScrollReveal().reveal('.desc', {delay: 100, reset: true, interval: 200, container: '.os-viewport'});
    // ScrollReveal().reveal('img', {delay: 1});
    //The first argument are the elements to which the plugin shall be initialized
    //The second argument has to be at least a empty object or a object with your desired options
});

