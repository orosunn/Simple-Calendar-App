let currentDayEl = document.getElementById('currentDay');
let currentDate = dayjs().format('YYYY-MM-DD');
currentDayEl.textContent = currentDate;

$(function () {
  var currentHour = dayjs().hour();

  // 9AM
  let hour9El = document.getElementById('hour-9');
  let hour9 = parseInt(hour9El.id.match(/\d+/)[0], 10);

  if (hour9 > currentHour){
    hour9El.classList.add('future')
  }
  else if (hour9 === currentHour){
    hour9El.classList.add('present')
  }
  else {
    hour9El.classList.add('past')
  }

  // 10AM
  let hour10El = document.getElementById('hour-10');
  let hour10 = parseInt(hour10El.id.match(/\d+/)[0], 10);

  if (hour10 > currentHour){
    hour10El.classList.add('future')
  }
  else if (hour10 === currentHour){
    hour10El.classList.add('present')
  }
  else {
    hour10El.classList.add('past')
  }

  // 11AM
  let hour11El = document.getElementById('hour-11');
  let hour11 = parseInt(hour11El.id.match(/\d+/)[0], 10);

  if (hour11 > currentHour){
    hour11El.classList.add('future')
  }
  else if (hour11 === currentHour){
    hour11El.classList.add('present')
  }
  else {
    hour11El.classList.add('past')
  }

  // 12PM
  let hour12El = document.getElementById('hour-12');
  let hour12 = parseInt(hour9El.id.match(/\d+/)[0], 10);

  if (hour12 > currentHour){
    hour12El.classList.add('future')
  }
  else if (hour12 === currentHour){
    hour12El.classList.add('present')
  }
  else {
    hour12El.classList.add('past')
  }

  // 1PM
  let hour13El = document.getElementById('hour-13');
  let hour13 = parseInt(hour13El.id.match(/\d+/)[0], 10);

  if (hour13 > currentHour){
    hour13El.classList.add('future')
  }
  else if (hour13 === currentHour){
    hour13El.classList.add('present')
  }
  else {
    hour13El.classList.add('past')
  }

  // 2PM
  let hour14El = document.getElementById('hour-14');
  let hour14 = parseInt(hour14El.id.match(/\d+/)[0], 10);

  if (hour14 > currentHour){
    hour14El.classList.add('future')
  }
  else if (hour14 === currentHour){
    hour14El.classList.add('present')
  }
  else {
    hour14El.classList.add('past')
  }

  // 3PM
  let hour15El = document.getElementById('hour-15');
  let hour15 = parseInt(hour15El.id.match(/\d+/)[0], 10);

  if (hour15 > currentHour){
    hour15El.classList.add('future')
  }
  else if (hour15 === currentHour){
    hour15El.classList.add('present')
  }
  else {
    hour15El.classList.add('past')
  }

  // 4PM
  let hour16El = document.getElementById('hour-16');
  let hour16 = parseInt(hour16El.id.match(/\d+/)[0], 10);

  if (hour16 > currentHour){
    hour16El.classList.add('future')
  }
  else if (hour16 === currentHour){
    hour16El.classList.add('present')
  }
  else {
    hour16El.classList.add('past')
  }

  // 5PM
  let hour17El = document.getElementById('hour-17');
  let hour17 = parseInt(hour17El.id.match(/\d+/)[0], 10);

  if (hour17 > currentHour){
    hour17El.classList.add('future')
  }
  else if (hour17 === currentHour){
    hour17El.classList.add('present')
  }
  else {
    hour17El.classList.add('past')
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
 
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $('.saveBtn').on('click' , function(){
    var textareaValue = $(this).siblings('.description').val();
    localStorage.setItem('hour-9', textareaValue);
    console.log('Textarea value saved:', textareaValue);
  }) 
  
});


//save to refresh and maintain text entries
//^^ add event listener to the class .saveBtn $('.saveBtn').on('click' , function(){}) + navigate the DOM to grab the val () of the textarea +save the val () of the textarea in localstorage under 'hour-9'

var firstBlock = $('.time-block');
  firstBlock.each(function(i, rand) {
    var hourId = this.id;
    var local = localStorage.getItem(hourId);
    console.log(this);
    
  });

//^^ loop  through each time block $('.time-block').each() and grab the id (ex: hour-9) + localStorage.getItem('hour-9') + set the val() of its text area to the data in localstorage