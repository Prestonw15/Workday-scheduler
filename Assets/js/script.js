//displays current date and time
$("#currentDay").text((moment().format('HH:mm, MMMM Do YYYY')));

// The blocks are color what time of day it is
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

// Adding the save function so the content will remain after a refresh
saveBtn.on("click", function(){

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();
    
    localStorage.setItem(time, plan);
})

// When the page is refreshed now the save events will stay

function usePlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour)
    
        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}