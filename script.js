// Wrap all code that interacts with the DOM in a call to jQuery to ensure that

// the code isn"t run until the browser has finished rendering all the elements
// in the html.
//let buttonEl = $(".saveBtn");
let currentDay = $("#currentDay");
let currentHour = parseInt(dayjs().format("HH"));
//let past =$(".past");
//let present = $(".present");
//let future = $(".future");
//let hour9 = $(".hour-9");
//let column2 = $(".col-2 col-md-1 hour text-center py-3");
//let columnScrip = $(".col-8 col-md-10 description");



currentDay.text((dayjs().format("dddd MMM D, YYYY")));


$(".time-block").each(function() {
let timeBlock = parseInt($(this).attr("id").split("-")[1]);
 if (currentHour > timeBlock) 
    $(this).addClass("past")

if (currentHour == timeBlock) 
    $(this).addClass("present")

if (currentHour < timeBlock) 
    $(this).addClass("future")

});


  //  $(".saveBtn").on("click", function () {

    //});
    

//function renderMessage() {
  //  let userInput = JSON.parse(localStorage.getItem("columnScrip"));

    //  $("userInput").textContent = 
    





    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
