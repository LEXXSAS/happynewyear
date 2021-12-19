$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('.body').toggleClass('lock');
    });
});

if (document.documentElement.clientWidth < 453) {
$(document).ready(function() {
        $('.h2').toggleClass('active');
    });
}
