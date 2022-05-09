// don't execute code until DOM is ready
$(document).ready(function() {

// Add current date to the jumbotron
$("#currentDay").text(moment().format("Do MMMM YYYY HH:mma "));

//declaring DOM elements being used
const description = $(".description");
const currentHour = moment().hour();
const saveButton = $(".saveBtn");
const deleteButton = $(".deleteBtn");

// color-coding anything with .description class
description.each(function() {

    const timeBlock = parseInt($(this).attr("id"));

// add/remove classes based on if current time = hour of time block 
    if (timeBlock === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    }

// add/remove classes if current time has passed time of the time block
    else if (timeBlock < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }

// add/remove classes if time block doesn't fit into prior statements
    else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
});

// using .each function in order to retrieve saved object
description.each(function() {

    for (i = 0; i < localStorage.length; i++) {
        const objectKey = localStorage.key(i);
        const taskValue = localStorage.getItem(objectKey);
        const rowHour = $(this).siblings(".hour").text();

        // if local storage object is the same as row hour, display it in that row
        if (objectKey === rowHour) {
            $(this).val(taskValue);
        } 
    }
});

function saveTasks () {
    // save the row the text belongs too, and the text itself
    const rowHour = $(this).siblings(".hour").text();
    const task = $(this).siblings(".description").val();

    if (task === "") {
        localStorage.setItem(rowHour, "");
    }

    else {
        localStorage.setItem(rowHour, task);
    }
}

saveButton.on("click", saveTasks);

});