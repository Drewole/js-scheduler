/* 
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
 */



/* 
TODO: Figure out moment.js
DONE: have the top of the page information generated and placed on the page
TODO: create a work day object with time and value blocks
TODO: create a function to create the work day structure on the page that it grabs from
TODO: Figure out logic to see if day is in past or future or current time. - This is for the color coding
TODO: Make click function for the day blocks save button. Reference the event delegation jquery inclass activity


*/

// Our moment js call should be something like this
let momentTime = moment().format('LT');

// var fullDaySchedule = {
// 	900 : {
// 		dayEvents: "",
// 		timePeriod: "AM"
// 	},
// 	1000 : {
// 		dayEvents: "",
// 		timePeriod: "AM"
// 	},
// 	1100 : {
// 		dayEvents: "",
// 		timePeriod: "AM"
// 	},
// 	1200 : {
// 		dayEvents: "",
// 		timePeriod: "PM"
// 	},
// 	100 : {
// 		dayEvents: "",
// 		timePeriod: "PM"
// 	},
// 	200 : {
// 		dayEvents: "",
// 		timePeriod: "PM"
// 	},
// 	300 : {
// 		dayEvents: "",
// 		timePeriod: "PM"
// 	},
// 	400 : {
// 		dayEvents: "",
// 		timePeriod: "PM"
// 	},
// 	500 : {
// 		dayEvents: "",
// 		timePeriod: "PM"
// 	}
// }

// }// We will use logic to determine if it is AM or PM

var fullDaySchedule = JSON.parse(localStorage.getItem("schedule"));

// Set local storage
localStorage.setItem("schedule", JSON.stringify(fullDaySchedule));

console.log(fullDaySchedule)


//globals, should we mess with jquery?
const containerEL = $(".container");

//In the logic, need to add classes on the text area to have the right colors
let timeBlock = `
<div data-time="900" class="time-block"><div class="time-display"></div><textarea class="present"></textarea><button class="saveBtn"><i class="fas fa-save"></i></button></div>
`

//Lets put the time and date up in the header
function dayAndDate(){
	let date = moment().format("dddd, MMMM Do");
	document.querySelector("#currentDay").textContent = date;
}
dayAndDate();

