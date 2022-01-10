//displays current date and time
$("#currentDay").text((moment().format('HH:mm, MMMM Do YYYY')));

$(document).ready(function () {
    // Button to local storage

    $(".saveBtn").on("click", function () {
        var textArea = $(this).siblings("description").val();
        var timeValue = $(this).parent().attri("id");
        console.log(textArea);
        console.log(timeValue);
        localStorage.setItem(textArea, timeValue);
        JSON.stringify(textArea, timeValue)

        var saveTasks = function () {
            localStorage.setItem("description", "id", JSON.stringify(textArea, timeValue));
        };

        var loadTasks = function () {
            var savedTasks = localStorage.getItem("description, id");

            if (!timeValue, textArea) {
                return false;
            }
            console.log("Nothing");



            savedTasks = JSON.parse(savedTasks);


            for (var i = 0; i < savedTasks.length; i++) {

                createTaskEl(savedTasks[i]);
            }
        };
    })

    function timeTracking() {
        var currentHour = moment().hour();


        $('.time-block').each(function () {
            var rowTime = parseInt($(this).attr("id").split("-")[1]);

            if (rowTime < currentHour) {

                $(this).removeClass('present');
                $(this).removeClass('future');
                $(this).addClass('past');
            } else if (currentHour === rowTime) {
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');



                $('#hr-9 .description').val(localStorage.getItem('hour-9'));
                $('#hr-10 .description').val(localStorage.getItem('hour-10'));
                $('#hr-11 .description').val(localStorage.getItem('hour-11'));
                $('#hr-12 .description').val(localStorage.getItem('hour-12'));
                $('#hr-13 .description').val(localStorage.getItem('hour-1'));
                $('#hr-14 .description').val(localStorage.getItem('hour-2'));
                $('#hr-15 .description').val(localStorage.getItem('hour-3'));
                $('#hr-16 .description').val(localStorage.getItem('hour-4'));
                $('#hr-17 .description').val(localStorage.getItem('hour-5'));

            }
        })
    }

    timeTracking();
})
