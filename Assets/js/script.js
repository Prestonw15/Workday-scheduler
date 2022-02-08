//displays current date and time
$("#currentDay").text((moment().format('HH:mm, MMMM Do YYYY')));


function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour =parseInt($(this).attr("id"));

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
               $(this).addClass("past"); 
            }
    })
};