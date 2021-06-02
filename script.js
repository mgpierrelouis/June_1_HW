$(document).ready(function () {
    $('.saveBtn').on('click', function() {
        var input = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id)');

        localStorage.setItem(time, input);
    })
});

function hourChanger() {
    var currentTime = moment().hours();
    $('.time-block').each(function() {
        var menuTime = parsInt($(this).attr('id').split('-')[0]);

        if (menuTime < currentTime) {
            $(this).addClass('past');

        } else if (menuTime === currentTime) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else (menuTime > currentTime) 
        {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          
        };
    });
};

hourChanger();

var interval = setInterval(hourChanger, 60000);

$('9-AM .description').val(localStorage.getItem('9-AM'));
$('10-AM .description').val(localStorage.getItem('10-AM'));
$('11-AM .description').val(localStorage.getItem('11-AM'));
$('12-PM .description').val(localStorage.getItem('12-PM'));
$('1P-M .description').val(localStorage.getItem('1-PM'));
$('2-PM .description').val(localStorage.getItem('2-PM'));
$('3-PM .description').val(localStorage.getItem('3-PM'));
$('4-PM .description').val(localStorage.getItem('4-PM'));
$('5-PM .description').val(localStorage.getItem('5-PM'));