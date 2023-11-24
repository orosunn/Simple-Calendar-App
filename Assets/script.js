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
  };

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
  };

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
  };

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
  };

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
  };

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
  };

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
  };

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
  };

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
  };
  

  $(document).ready(function () {
    $('.saveBtn').on('click' , function(){
     var timeBlockEl = $(this).closest('.time-block');
     var timeBlockId = timeBlockEl.attr('id');
     var textArea = timeBlockEl.find('.description').val();
     localStorage.setItem(timeBlockId, textArea);
     console.log('Textarea value saved:', textArea, 'Time block ID key:', timeBlockId);
    });

    $('.time-block').each(function() {
      var timeBlockId = $(this).attr('id');
      var storedLocal = localStorage.getItem(timeBlockId);
      $(this).find('.description').val(storedLocal);
    });
  });

});