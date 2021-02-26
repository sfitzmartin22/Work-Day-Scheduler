//Reload page //
$(document).ready (function() {

// define array that the objects will be defined within //
var schedule = [];

// when clicking a save button i run through the local div to find time and schedule details //
$(".saveBtn").on("click", function() {
   
    var description = $(this).siblings(".description").val();
    console.log(description)
    var time = $(this).parent().attr("id");

   // push into schedule //
   schedule.push({time: time, description: description});
   
   // store objects in local storage //
   localStorage.setItem("schedule",JSON.stringify(schedule));
}
);
})
    
// set date at top of the page //
$("#currentDay").text(moment().format("dddd, MMMM Do"));


// var addSchedule = function()