
// This grabs the current time for comparison below

var currentTime = moment().format('HH');

// Convert string number to number
function convertToNumber(string) {
	return Number(string);
}


// Function to generate time array with given start and end point.
function letsMakeTimeArray(start, end) {
	let timeArray = [];
	for (time = start; time < (end + 1); time++) { // Need to add 1 to the end var to compensate for the 0 start index	
		var hourBlock =
		{
			hour: time,
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
var timeArray = letsMakeTimeArray(9, 17); // 1 - 24 scale, I think the intent is obvious. First number is start time, second is end time
sendToLocalStorage(timeArray)
//globals, should we mess with jquery? 
const containerEL = document.querySelector(".container");
const elemContainer = $(".container");

// Retrive any data from local storage
var timeArray = JSON.parse(localStorage.getItem("schedule"));




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
DONE: Figure out moment.js
DONE: have the top of the page information generated and placed on the page
DONE: create a work day object with time and value blocks
DONE: create a function to create the work day structure on the page that it grabs from
DONE: Figure out logic to see if day is in past or future or current time. - This is for the class color coding
TODO: Make click function for the day blocks save button. Reference the event delegation jquery inclass activity. On click should grab all info, update the array and send it on up.


*/

// Time Format Change
function timeFormatChange12hr(time) {
	let timeConverted = convertToNumber(time)
	var j;
	if (timeConverted > 12) {
		j = timeConverted - 12;
	} else {
		j = timeConverted;
	}
	return j;
}



//Lets put the time and date up in the header
function dayAndDateHeader() {
	let date = moment().format("dddd, MMMM Do");
	document.querySelector("#currentDay").textContent = date;
}
dayAndDateHeader();

// Send to local storage
function sendToLocalStorage(items) {
	localStorage.setItem("schedule", JSON.stringify(items));
	console.log("Local storage has been updated.")
}
// sendToLocalStorage(timeArray); // Sending the time arry to local 


// Go through our time array and put it on the page plz
function makeTimeSlots(arr) {

	for (i = 0; i < arr.length; i++) {

		//Lets do some logic to see what class we need to be applying to the textarea
		let itemClass = "past";
		if (convertToNumber(arr[i].hour) > convertToNumber(currentTime)) {
			itemClass = "future";
		} else if (convertToNumber(arr[i].hour) === convertToNumber(currentTime)) {
			itemClass = "present";
		} else {
			itemClass = "past"
		}

		//This will be our HTML
		let hourTemplate = `<div class="time-display col-1">${timeFormatChange12hr(arr[i].hour)} ${arr[i].ampm}</div><textarea class="${itemClass} col-10">${arr[i].toDos}</textarea><button class="saveBtn col-1"><i class="fas fa-save"></i></button>`;

		//Lets create the element, add some classes and set some attributes, then add it to the bottom of the container div
		var timeBlock = document.createElement("div");
		timeBlock.innerHTML = hourTemplate;
		timeBlock.classList.add("time-block", "row");
		timeBlock.setAttribute("data-time", arr[i].hour);

		containerEL.appendChild(timeBlock);
	}


}
makeTimeSlots(timeArray); // Calling the function with our desired array


// Lets save the item to local storage when they hit the save button
elemContainer.on('click', '.saveBtn', function(e){
	let buttonParentEl = $(this).closest(".row");
	let todoEntry = buttonParentEl.find("textarea").val();
	let timeSlot = buttonParentEl.data("time");

	for (i = 0; i < timeArray.length; i++) {	

		if ( timeSlot === timeArray[i].hour) {
			timeArray[i].toDos = todoEntry;
			sendToLocalStorage(timeArray);
		}

	}

});
