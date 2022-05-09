// don't execute code until DOM is ready
$(document).ready(function() {

// Add current date to the jumbotron
$("#currentDay").text(moment().format("Do MMMM YYYY HH:mma "));

//declaring DOM elements being used
const description = $(".description");
const currentHour = moment().hour();
const saveButton = $(".saveBtn");
const deleteButton = $(".deleteBtn");


description.each(function () {

    const timeBlock = parseInt($(this).attr("id"));

    if (timeBlock === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    }

    else if (timeBlock < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }

    else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
});

});