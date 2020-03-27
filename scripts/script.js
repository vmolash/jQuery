// $(document).ready(function() {
//     $('ul.numbers li:even').css('background-color','#999');
//     $('ul.numbers li:even').css('color','#e6e6e6');
// });

// shorhand - literal object
// $(document).ready(function() {
//     $('ul.numbers li:even').css({
//         'background-color': '#999',
//         'color': 'green'
//     });
// }); // добавляет inline css style

// $(document).ready(function() {
//     $('ul.numbers li:even').addClass('striped');
// });

// multiple class and elements
$(document).ready(function() {
        $('ul.numbers li:even, ul.colors li:odd').addClass('striped underline');
});