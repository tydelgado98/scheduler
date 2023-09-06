let today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY, h:mm A'));

let currentHour = today.hour();

const timeBlocks = document.querySelectorAll('.time-block');

timeBlocks.forEach((timeBlocks) => {
const hour = parseInt(timeBlocks.id);

if (hour < currentHour) {
  timeBlocks.classList.add('past'); 
} else if (hour === currentHour) {
  timeBlocks.classList.add('present');
} else {
  timeBlocks.classList.add('future');
}
});
 


$(document).ready(function() {
let text = localStorage.getItem('Hour: 9');
$('#9').textContent(text);
});

let saveBtn = $('.saveBtn');


function handleTxt(event)  {
 let block = $(this).parent().attr('id');
  event.preventDefault();

 let txt = $(this).siblings('.description').val();
  localStorage.setItem("Hour: " + block, txt);

  $(this).siblings('.description').text(txt);
  console.log(txt);
  if (!txt) {
    return;
  }
}

let txt = localStorage.getItem('text');

saveBtn.on('click', handleTxt);