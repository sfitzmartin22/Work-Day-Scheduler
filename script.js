//Reload page //
$(document).ready (function() {

// define objects to store //
var schedule = [];

// when clicking a save button i run through the local div to find time and schedule details //
$(".saveBtn").on("click", function() {
   
    var description = $(this).siblings(".description").val();
    console.log(description)
    var time = $(this).parent().attr("id");
    console.log(time);
   

   // push into schedule //
    schedule.push({time: time, description: description});
   console.log(schedule);
   // store objects in local storage //
    var storeTasks = function(){
    localStorage.setItem("schedule",JSON.stringify(schedule));
}
   
}
);

})
    
// set date at top of the page //
$("#currentDay").text(moment().format("dddd, MMMM Do"));


// var addSchedule = function()