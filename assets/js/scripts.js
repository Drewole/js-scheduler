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



//globals, should we mess with jquery?

const containerEL = $(".container");



//Lets put the time and date up in the header

function dayAndDate(){
	let date = moment().format("dddd, MMMM Do");
	document.querySelector("#currentDay").textContent = date;
}
dayAndDate();

