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
 

let saveBtn = $('.saveBtn');


function handleTxt(event)  {
 let block = $(this).parent().attr('id');
  event.preventDefault();

 let txt = $(this).siblings('.description').val();
  localStorage.setItem("Hour: " + block, txt);
let description = $(this).siblings('.description').val();

for (let i = 0; i < description.length; i+= 1) {
  let hour = localStorage.getItem("Hour: " + i);
  $("#hour" + i + " .description").val(hour);
}

  console.log(txt);

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  if (!txt) {
    return;
  }
}

let txt = localStorage.getItem('text');

saveBtn.on('click', handleTxt);