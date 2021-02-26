// define array that the objects will be defined within //
var schedule = [];

//Reload page //
$(document).ready (function() {

// when clicking a save button i run through the local div to find time and schedule details //
$(".saveBtn").on("click", function() {

    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // push into schedule //
    schedule.push({description: description, time: time});
   
    // store objects in local storage //
    localStorage.setItem("schedule",JSON.stringify(schedule));
}
);
})
    
// set date at top of the page //
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// get local storage parse it //
function updateSchedule () {
var getSchedule = JSON.parse(localStorage.getItem("schedule"));

//for statment to apply it to the correct area on the webpage//
for(var i = 0; i < schedule.length; i++) {
    var userInput = schedule[i].description;
    $("#" + schedule[i].time).children(".description").text(userInput);
}
}

updateSchedule();