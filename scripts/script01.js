$(document).ready(function() {
    $('.hideBox').hide();

    $('.readMore a').click(function() {
        $('.hideBox').show();
        $(this).hide();
    });
});