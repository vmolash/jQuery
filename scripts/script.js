// $(document).ready(function() {
//     $('ul.numbers li:even').css('background-color','#999');
//     $('ul.numbers li:even').css('color','#e6e6e6');
// });

// shorhand - literal object
$(document).ready(function() {
    $('ul.numbers li:even').css({
        'background-color': '#999',
        'color': 'green'
    });
});
