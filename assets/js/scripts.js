

// Our moment js call should be something like this
let momentTime = moment().format('LT');

// var fullDaySchedule = {
// 	H900 : {
// 		dayEvents: "",
// 		timePeriod: "AM"
// 	},
// 	H1000 : {
// 		dayEvents: "",
// 		timePeriod: "AM"
// 	},
// 	H1100 : {
// 		dayEvents: "",
// 		timePeriod: "AM"
// 	},
// 	H1200 : {
// 		dayEvents: "",
// 		timePeriod: "PM"
// 	},
// 	H100 : {
// 		dayEvents: "",
// 		timePeriod: "PM"
// 	},
// 	H200 : {
// 		dayEvents: "",
// 		timePeriod: "PM"
// 	},
// 	H300 : {
// 		dayEvents: "",
// 		timePeriod: "PM"
// 	},
// 	H400 : {
// 		dayEvents: "",
// 		timePeriod: "PM"
// 	},
// 	H500 : {
// 		dayEvents: "",
// 		timePeriod: "PM"
// 	}
// }

//globals, should we mess with jquery?
const containerEL = document.querySelector(".container");

// Retrive any data from local storage
var fullDaySchedule = JSON.parse(localStorage.getItem("schedule"));


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



// Send to local storage
function sendToLocalStorage( items ) {
	localStorage.setItem("schedule", JSON.stringify(items));
	console.log("Local storage has been updated.")
}



// Function to generate time array with given start and end point.
function letsMakeTimeArray(start,end) {
	let timeArray = [];
	for (time = start; time < (end+1); time++) { // Need to add 1 to the end var to compensate for the 0 start index
		if (time > 12) {
			var j = time - 12;
		} else {
			j = time;
		}
		var hourBlock =
			{
				hour: j,
				ampm: "AM",
				toDos: ""
			}
		if (time > 11) {
			hourBlock.ampm = "PM";
		}
		timeArray.push(hourBlock);
		
	}
	return timeArray;
}
let timeArray = letsMakeTimeArray(9,17); // 1 - 24 scale, I think the intent is obvious. First number is start time, second is end time

sendToLocalStorage(timeArray);
console.log(timeArray)


// Lets cycle through the data and create the items on the screen
//In the logic, need to add classes on the text area to have the right colors
let timeBlock = `
<div data-time="900" class="time-block row"><div class="time-display"></div><textarea class="present"></textarea><button class="saveBtn"><i class="fas fa-save"></i></button></div>
`

//Lets put the time and date up in the header
function dayAndDateHeader(){
	let date = moment().format("dddd, MMMM Do");
	document.querySelector("#currentDay").textContent = date;
}
dayAndDateHeader();

