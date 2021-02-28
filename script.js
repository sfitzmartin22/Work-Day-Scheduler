//Reload page //
$(document).ready (function() {

// define array that the objects will be defined within //
var schedule = [];
// set date at top of the page //
$("#currentDay").text(moment().format("dddd, MMMM Do"));

    // get local storage parse it //
    function updateSchedule () {
    var getSchedule = JSON.parse(localStorage.getItem("schedule"));
    
    if(!getSchedule) {
        getSchedule={};
    } ;

    //for statment to apply it to the correct area on the webpage//
    for(var i = 0; i < getSchedule.length; i++) {
        var userInput = getSchedule[i].description;
        $("#" + getSchedule[i].time).children(".description").text(userInput);
    }
    }

    updateSchedule();

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

// loops through the time blocks to apply the correct class based on the time //
var hourAudit =function(){
    var currentHour = moment().hour() 
    for(var i=8; i<18; i++){
        var taskArea = $("#hour-"+i)  
        if(currentHour>i){
            $(taskArea).addClass("past");
        } else if (currentHour == i){
            $(taskArea).addClass("present");
        }else{
            $(taskArea).addClass("future");
        }
    }
}

// removes past/present/future class for task area so that i can then apply the correct class when i run my hour audit function //
var clearClass = function (){
    var currentHour = moment().hour()
    for(var i=8; i<18; i++){
        var taskArea = $("#hour-"+i)
        if ($(taskArea).hasClass("past")){
            $(taskArea).removeClass("past");
        }
        if ($(taskArea).hasClass("present")){
            $(taskArea).removeClass("present");
        }
        if ($(taskArea).hasClass("future")){
            $(taskArea).removeClass("future");
        }
    }
}

hourAudit ();

// function that removes and add correct class based on the time //
var updateBackground = function (){
    clearClass();
    hourAudit();
}

// updates the ackground color every second //
setInterval (function() {
    updateBackground();
}, 1 * 1000);

})
    

