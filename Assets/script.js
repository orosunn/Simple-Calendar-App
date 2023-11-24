// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
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
});

// implement dayjs to diplay current day at top https://day.js.org/docs/en/get-set/get-set

// parse id number + get current hour from dayjs + write a conditional statement to compare the time block id number to current hour + addclass past/present/future

//save to refresh and maintain text entries
//^^ add event listener to the class .saveBtn $('.saveBtn').on('click' , function(){}) + navigate the DOM to grab the val () of the textarea +save the val () of the textarea in localstorage under 'hour-9'

var firstBlock = $('.time-block');
  firstBlock.each(function(i, rand) {
    var hourId = this.id;
    var local = localStorage.getItem(hourId);
    console.log(this);
    
  });

//^^ loop  through each time block $('.time-block').each() and grab the id (ex: hour-9) + localStorage.getItem('hour-9') + set the val() of its text area to the data in localstorage